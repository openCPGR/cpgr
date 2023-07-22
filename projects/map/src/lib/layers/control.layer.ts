import { Component } from '@angular/core';
import { POSITIONS } from '../enums/map.enum';
import { Control, Map } from 'leaflet';

export class BottomRightControl extends Control {
  constructor(opt?: { position: POSITIONS, comp?: Component }) {
    super(opt);
  }

  override onAdd(map: Map): HTMLElement {
    var div = document.createElement('div');
    return div;
  }
}
