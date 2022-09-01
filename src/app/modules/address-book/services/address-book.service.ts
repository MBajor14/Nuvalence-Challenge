import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { RandomUser } from '../models/randomUserModel';

interface ParamOptions {
  page: number,
  results: number
}

@Injectable({
  providedIn: 'root'
})
export class AddressBookService {
  //  implement a filter for API call options

  // private url = 'https://randomuser.me/api/?';
  private readonly url = 'https://randomuser.me/api/?page=1&results=10&seed=nuvalence&nat=US';
  private readonly seedParam = 'nuvalence';
  private readonly nationalityParam = 'US';
  private readonly includeData = ['name', 'location', 'email', 'phone', 'cell', 'picture', 'nat'];
  public currentContactDetails$ = new BehaviorSubject<RandomUser>(null);

  constructor(private apiService: ApiService) { }

  public getAddressContacts(): Observable<any> {
    return this.apiService.get(`${this.url}&inc=${this.includeData.join(',')}`);
  }

  private buildParamsString({ page, results }: ParamOptions): string {
    let paramsString = ``;

    if(page)    paramsString.concat(`page=${page}&`);
    if(results) paramsString.concat(`results=${results}&`);

    return paramsString;
  }

}
