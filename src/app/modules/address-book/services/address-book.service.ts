import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { RandomUser } from '../models/randomUserModel';

@Injectable({
  providedIn: 'root'
})
export class AddressBookService {
  //  implement a filter for API call options

  // private url = 'https://randomuser.me/api/?';
  private readonly url = 'https://randomuser.me/api/?page=1&results=10&seed=nuvalence&nat=US';
  public currentContactDetails$ = new BehaviorSubject<RandomUser>(null);

  constructor(private apiService: ApiService) { }

  public getAddressContacts(): Observable<any> {
    const includeData = ['name', 'location', 'email', 'phone', 'cell', 'picture', 'nat'];
    return this.apiService.get(`${this.url}&inc=${includeData.join(',')}`);
  }
}
