import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPaginationParams } from '../../interfaces/pagination-params.interface';

@Component({
  selector: 'lib-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() limit: number = 10; //number of records to skip for pagination
  @Input() totalRow: number = 50;

  @Output() next = new EventEmitter<IPaginationParams>();

  currentPageNumber: number = 1;

  constructor() {}

  get offset(): number {
    return (this.currentPageNumber - 1) * this.limit;
  }

  get numberOfPages(): number {
    return Math.ceil(this.totalRow / this.limit);
  }

  ngOnInit(): void {}
  previousPage() {
    this.currentPageNumber--;
    this.next.emit({ offset: this.offset, limit: this.limit });
  }
  nextPage() {
    this.currentPageNumber++;
    this.next.emit({ offset: this.offset, limit: this.limit });
  }
}
