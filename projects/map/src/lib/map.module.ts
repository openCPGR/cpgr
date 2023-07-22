import { NgModule } from '@angular/core';
import { MapComponent } from './components/map/map.component';
import { MapRoutingModule } from './map-routing.module';
import { BottomLeftControlComponent } from './components/bottom-left-control/bottom-left-control.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MapComponent, BottomLeftControlComponent],
  imports: [CommonModule],
  exports: [MapComponent, MapRoutingModule],
})
export class MapModule {}
