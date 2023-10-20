import { Component } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {
  universities = ['CU', 'CMU','MU', 'SWU', 'TU', 'MFU', 'KU'];
  yearList = [2000,2005,2010,2015,2020];
  numbersArray: number[] = [];

  constructor() {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    for (let i = 0; i < randomNum; i++) {
      this.numbersArray.push(i);
    }
  }
}
