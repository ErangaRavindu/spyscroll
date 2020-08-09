import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {ScrollSpyItemDirective} from '../directives/scroll-spy-item.directive';

@Injectable({
  providedIn: 'root'
})
export class ScrollSpyService {

  private clickMenuItem$ = new BehaviorSubject<string>(undefined);
  public spys: ScrollSpyItemDirective[] = [];

  public addSpy(items: ScrollSpyItemDirective[]): void {
    this.spys.splice(0,
      this.spys.length);
    this.spys.push(...items);
    const defaultSelectedMenu = this.clickMenuItem$.getValue();
    if (defaultSelectedMenu) {
      this.setActiveMenuItem(defaultSelectedMenu);
    }
  }

  public clear() {
    this.spys.splice(0, this.spys.length);
    this.setClickMenuItem(undefined);
  }

  public getClickMenuItem(): Observable<string> {
    return this.clickMenuItem$.asObservable();
  }

  public setClickMenuItem(item: string): void {
    this.setActiveMenuItem(item);
    this.clickMenuItem$.next(item);
  }

  public setActiveMenuItem(item: string): void {
    this.spys.forEach((spy: ScrollSpyItemDirective) => {
      spy.active = item === spy.id;
      spy.detectChanges();
    });
  }

  constructor() {
  }
}
