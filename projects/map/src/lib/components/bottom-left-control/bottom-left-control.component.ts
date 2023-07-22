import {
  Component,
  OnInit,
  ViewContainerRef,
  Input,
  Renderer2,
  ElementRef,
} from '@angular/core';
import { Control, Map } from 'leaflet';
import { BottomRightControl } from '../../layers/control.layer';
import { POSITIONS } from '../../enums/map.enum';

@Component({
  selector: 'jd-bottom-left-control',
  templateUrl: './bottom-left-control.component.html',
  styleUrls: ['./bottom-left-control.component.scss'],
})
export class BottomLeftControlComponent implements OnInit {
  constructor(private v: ElementRef, private red: Renderer2) {}

  @Input() map: Map | null = null;
  control: Control | null = null;
  ngOnInit(): void {
    this.control = new BottomRightControl({
      position: POSITIONS.BOTTOM_RIGHT,
    });
    this.map?.addControl(this.control);
    this.red.appendChild(this.control.getContainer(), this.v.nativeElement);
  }

  remove() {
    this.control?.remove();
  }
}
