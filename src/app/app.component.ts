import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from "rxjs/operators";
import { RandomUser } from './models/randomUserModel';
import { AddressBookService } from './services/address-book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(){  }

  ngOnInit(): void {
    // loader?

  }

  ngOnDestroy(): void {

  }
}
