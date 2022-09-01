import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressBookComponent } from './components/address-book/address-book.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AddressBookRoutingModule } from './address-book-routing.module';

@NgModule({
  declarations: [
    AddressBookComponent,
    ContactDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AddressBookRoutingModule
  ]
})
export class AddressBookModule { }
