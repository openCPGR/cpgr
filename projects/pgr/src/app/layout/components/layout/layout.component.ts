import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pgr-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  isSidebarOpened: boolean= false;
  ngOnInit(): void {
  }

  toggle(isOpened: boolean){
    this.isSidebarOpened = isOpened;
  }

}
