import { Component, ElementRef, OnInit } from '@angular/core';
import * as popJs from '@popperjs/core' 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pgr';
  constructor(private _el:ElementRef){}

  ngOnInit(): void {
    
  }
  
}
