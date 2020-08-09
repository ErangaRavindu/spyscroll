import {Component, Input, OnInit} from '@angular/core';
import {PlacesModel} from '../../pages/home/home.component';

@Component({
  selector: 'app-place-tile',
  templateUrl: './place-tile.component.html',
  styleUrls: ['./place-tile.component.scss']
})
export class PlaceTileComponent implements OnInit {
  @Input() model: PlacesModel;
  constructor() { }

  ngOnInit(): void {
  }

}
