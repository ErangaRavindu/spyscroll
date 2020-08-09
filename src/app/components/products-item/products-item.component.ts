import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from '../../pages/home/home.component';

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.scss']
})
export class ProductsItemComponent implements OnInit {
  @Input() model: ProductModel;
  constructor() { }

  ngOnInit(): void {
  }

}
