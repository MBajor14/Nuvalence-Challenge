import { TestBed } from '@angular/core/testing';

import { AddressBookService } from './address-book.service';

describe('RandomUserApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddressBookService = TestBed.get(AddressBookService);
    expect(service).toBeTruthy();
  });
});
