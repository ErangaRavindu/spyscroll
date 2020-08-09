import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-widget',
  templateUrl: './search-widget.component.html',
  styleUrls: ['./search-widget.component.scss']
})
export class SearchWidgetComponent implements OnInit {
  openSearch: boolean;
  time = {hour: 13, minute: 30};
  meridian = true;
  constructor() { }

  ngOnInit(): void {
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    this.openSearch = false;
  }


}
