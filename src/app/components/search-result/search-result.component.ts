import {Component, Input, OnInit} from '@angular/core';
import {ResultModel} from '../../pages/search-page/search-page.component';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  @Input() model: ResultModel;
  constructor() { }

  ngOnInit(): void {
  }

}
