import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressBookComponent } from './modules/address-book/components/address-book/address-book.component';

const routes: Routes = [
  { path: '', redirectTo: 'address-book', pathMatch: 'full' },
  { path: 'address-book', component: AddressBookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
