import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { debounceTime, switchMap, tap } from 'rxjs/operators';
import { RandomUser } from 'src/app/modules/address-book/models/randomUserModel';
import { AddressBookService } from '../../services/address-book.service';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.scss']
})
export class AddressBookComponent implements OnInit, OnDestroy {
  protected contactList$ = new BehaviorSubject<RandomUser[] | any>([]);
  protected searchFormControl = this.formBuilder.control('');
  private subs = new Subscription();

  constructor(
    private addressBookApiService: AddressBookService,
    private cdRef: ChangeDetectorRef,
    private formBuilder: FormBuilder,
    private router: Router
  ){  }

  get contactListFiltered$(): Observable<any[]> {
    return this.contactList$
      .pipe(
        tap(console.log),
        switchMap(data => {
          return data ? of([data[0]]) : of([])
        })
      );
  }

  ngOnInit() {
    this.loadData();
    this.loadFormControlListeners();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  private loadData(): void {
    this.addressBookApiService.getAddressContacts().subscribe((res) => {
      // console.log(res);
      this.contactList$.next(res.results);
      this.cdRef.markForCheck();
    }, console.error);
  }

  private loadFormControlListeners(): void {
    this.subs.add(
      this.searchFormControl.valueChanges
        .pipe(
          debounceTime(500),
          tap(console.log)
        ).subscribe()
    );
  }

  protected selectContactRow(contact: RandomUser): void {
    console.log('Selected contact row', contact);
    this.addressBookApiService.currentContactDetails$.next(contact);
    this.navigateToContactDetails(contact);
  }

  protected navigateToContactDetails(contact: RandomUser): void {
    this.router.navigateByUrl('/contact-details', { state: { contact } })
  }
}
