import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private headerSource = new BehaviorSubject('default');
  currentHeader = this.headerSource.asObservable();

  constructor() { }

  changeHeader(headerClass: string) {
    this.headerSource.next(headerClass);
  }
}
