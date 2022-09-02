import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressBookComponent } from './modules/address-book/components/address-book/address-book.component';
import { ContactDetailsComponent } from './modules/address-book/components/contact-details/contact-details.component';

const routes: Routes = [
  {
    path: '',
    component: AddressBookComponent,
    pathMatch: 'full',
  },
  {
    path: 'contact-details',
    component: ContactDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
