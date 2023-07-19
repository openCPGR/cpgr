import { Component, OnInit } from '@angular/core';
import { CanvasLayer } from '../../layers/canvas.layer';

declare var L: any;

@Component({
  selector: 'jd-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    var map = L.map('map', { zoomSnap: 0.25 }).setView([22, 77], 4.5);
    L.tileLayer('https://mappls.com/atms/near/28.5454,77.45445,2').addTo(map);
    map.addLayer(new CanvasLayer());
    console.log(map);
  }
}
