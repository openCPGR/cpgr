import { Component, OnInit , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'pgr-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() toggle = new EventEmitter();

  isOpened : boolean= false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleButton(){
    this.isOpened = !this.isOpened;
    this.toggle.emit(this.isOpened)
  }

}
