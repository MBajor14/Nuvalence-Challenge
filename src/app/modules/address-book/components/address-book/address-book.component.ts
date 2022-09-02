import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { RandomUser } from 'src/app/modules/address-book/models/randomUserModel';
import { AddressBookService } from '../../services/address-book.service';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.scss']
})
export class AddressBookComponent implements OnInit, OnDestroy {
  protected contactList$ = new BehaviorSubject<RandomUser[] | any>([]);
  private subs = new Subscription();
  // protected pageNumber = this.formBuilder.control('');

  constructor(
    private addressBookApiService: AddressBookService,
    private cdRef: ChangeDetectorRef,
    private formBuilder: FormBuilder,
    private router: Router
  ){  }

  ngOnInit() {
    this.loadData();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  private loadData(): void {
    this.subs.add(
      this.addressBookApiService.getAddressContacts().subscribe((res) => {
        this.contactList$.next(res.results);
        this.cdRef.markForCheck();
      }, console.error)
    )
  }

  protected selectContactRow(contact: RandomUser): void {
    this.addressBookApiService.currentContactDetails$.next(contact);
    this.navigateToContactDetails();
  }

  private navigateToContactDetails(): void {
    this.router.navigateByUrl('contact-details');
  }

    // beginnings of pagination implement
  // private loadFormControlListeners(): void {
  //   this.subs.add(
  //     this.pageNumber.valueChanges
  //       .pipe(
  //         debounceTime(500)
  //       ).subscribe()
  //   );
  // }
}
