import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressBookComponent } from './components/address-book/address-book.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';


const routes: Routes = [
  {
    path: '',
    component: AddressBookComponent,
  },
  {
    path: 'contact-details',
    component: ContactDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddressBookRoutingModule { }
