import { NgModule } from '@angular/core';
import { MapComponent } from './components/map/map.component';
import { MapRoutingModule } from './map-routing.module';

@NgModule({
  declarations: [MapComponent],
  imports: [],
  exports: [MapComponent, MapRoutingModule],
})
export class MapModule {}
