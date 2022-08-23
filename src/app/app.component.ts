import { Component } from '@angular/core';

export interface tickdata {
  raceid: number;
  race: string;
  quan: number;
  amount: number;
  imageSrc?: string;
}

export interface tickdataTwo {
  raceid: number;
  race: string;
  quan: number;
  amount: number;
  imageSrc?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx';
}
