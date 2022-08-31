import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { RandomUser } from 'src/app/models/randomUserModel';
import { AddressBookService } from 'src/app/services/address-book.service';

interface FieldContext {
  label: string,
  value: string | number
}

interface SectionContext {
  title: string,
  fields2d: [
    FieldContext[],
    FieldContext[]?,
    FieldContext[]?
  ]
}

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactDetailsComponent implements OnInit {
  protected currentContact: RandomUser = null;

  protected nameSectionContext: SectionContext;
  protected contactSectionContext: SectionContext;
  protected addressSectionContext: SectionContext;

  constructor(private addressBookService: AddressBookService) { }

  get currentContact$(): Observable<RandomUser> {
    return this.addressBookService.currentContactDetails$;
  }

  ngOnInit() {
    this.loadData();
    this.loadSectionContexts();
  }

  private loadData(): void {
    this.addressBookService.currentContactDetails$
      .pipe(tap(console.log))
      .subscribe(contactDetails => {
        this.currentContact = contactDetails;
      });
  }

  private loadSectionContexts(): void {
    this.buildNameSectionContext();
    this.buildContactSectionContext();
    this.buildAddressSectionContext();
  }

  private buildNameSectionContext(): void {
    if(!this.currentContact) return;
    const { name: { first, last } } = this.currentContact;
    this.nameSectionContext = {
      title: 'Name',
      fields2d: [
        [
          this.buildFieldContext('First', first),
          this.buildFieldContext('Last', last)
        ]
      ]
    }
  }

  private buildContactSectionContext(): void {
    if(!this.currentContact) return;
    const { email, phone, cell } = this.currentContact;
    this.contactSectionContext = {
      title: 'Contact',
      fields2d: [
        [this.buildFieldContext('Email', email)],
        [this.buildFieldContext('Phone', phone)],
        [this.buildFieldContext('Cell', cell)]
      ]
    }
  }

  private buildAddressSectionContext(): void {
    if(!this.currentContact) return;
    const {
      location: {
        street: { number, name }, city, state, postcode, country
      }
    } = this.currentContact;

    this.addressSectionContext = {
      title: 'Address',
      fields2d: [
        [
          this.buildFieldContext('Street', `${number} ${name}`)
        ],
        [
          this.buildFieldContext('City', city),
          this.buildFieldContext('State', state),
          this.buildFieldContext('Zip', postcode)
        ],
      ]
    }
  }

  private buildFieldContext(label: string, value: string | number): FieldContext {
    return { label, value };
  }
}
