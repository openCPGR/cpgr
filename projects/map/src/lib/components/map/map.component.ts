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
    // var map = L.map('map', { zoomSnap: 0.25 }).setView([22, 77], 4.5);
    // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   attribution:
    //     '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    // }).addTo(map);

    const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap',
    });

    const osmHOT = L.tileLayer(
      'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
      {
        maxZoom: 19,
        attribution:
          '© OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France',
      }
    );
    var openTopoMap = L.tileLayer(
      'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 19,
        attribution:
          'Map data: © OpenStreetMap contributors, SRTM | Map style: © OpenTopoMap (CC-BY-SA)',
      }
    );
    var baseMaps = {
      OpenStreetMap: osm,
      'OpenStreetMap.HOT': osmHOT,
      openTopoMap: openTopoMap,
    };
    var map = L.map('map', { zoomSnap: 0.25, layers: [osm] }).setView(
      [22, 77],
      4.5
    );
    var layerControl = L.control.layers(baseMaps).addTo(map);
    console.log(map);
  }
}
