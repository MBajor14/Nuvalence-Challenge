import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddressBookComponent } from './components/address-book/address-book.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';


const routes: Routes = [
  {
    path: '',
    component: AddressBookComponent
  },
  {
    path: 'contact-details',
    component: ContactDetailsComponent
  },
  {
    path: 'address-book',
    component: AddressBookComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
