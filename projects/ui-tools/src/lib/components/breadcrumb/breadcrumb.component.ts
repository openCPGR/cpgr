import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { INav } from '../../interfaces/nav.interface';

@Component({
  selector: 'lib-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  @Input() navList: INav[] = [];
  constructor(public location: Location) {}

  ngOnInit(): void {}
}
