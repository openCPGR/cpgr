import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { CanvasLayer } from '../../layers/canvas.layer';
import { Map, TileLayer } from 'leaflet';
import 'leaflet-draw';

declare var L: any;
@Component({
  selector: 'jd-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  @ViewChild('leaflet-bottom leaflet-right', { static: false })
  div!: ElementRef;
  map: Map | null = null;
  constructor(private viewContainerRef: ViewContainerRef) {}

  ngOnInit(): void {
    // this.viewContainerRef.createComponent(BottomLeftControlComponent);
    const osm = new TileLayer(
      'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 19,
      }
    );

    const osmHOT = new TileLayer(
      'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
      {
        maxZoom: 19,
      }
    );
    var openTopoMap = new TileLayer(
      'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 19,
      }
    );
    var baseMaps = {
      OpenStreetMap: osm,
      'OpenStreetMap.HOT': osmHOT,
      openTopoMap: openTopoMap,
      'Custom Canvas Layer': new CanvasLayer(),
    };
    this.map = new Map('map', {
      zoomSnap: 0.25,
      layers: [osm],
      attributionControl: false,
      drawControl: true
    }).setView([22, 80], 4.5);
    console.log(this.div);
    var layerControl = L.control.layers(baseMaps).addTo(this.map);
    L.control.scale().addTo(this.map);
    console.log(this.map);
  }
}
