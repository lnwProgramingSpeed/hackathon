import { Component } from '@angular/core';

@Component({
  selector: 'app-buying-page',
  templateUrl: './buying-page.component.html',
  styleUrls: ['./buying-page.component.css'],
})
export class BuyingPageComponent {
  numbersArray: number[] = [];
  constructor() {
    const randomNum = Math.floor(Math.random() * 3) + 6;
    for (let i = 0; i < randomNum; i++) {
      this.numbersArray.push(i);
    }
  }
}
