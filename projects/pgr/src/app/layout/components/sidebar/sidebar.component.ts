import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pgr-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() isSidebarOpened : boolean= false;

  navList = [{
    name:'Dashboard',
    link:'',
    icon:'chart-line'
  },{
    name:'Dashboard',
    link:'',
    icon:'chart-line'
  },{
    name:'Dashboard',
    link:'',
    icon:'chart-line'
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
