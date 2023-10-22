import { Component } from '@angular/core';

@Component({
  selector: 'app-my-video-page',
  templateUrl: './my-video-page.component.html',
  styleUrls: ['./my-video-page.component.css']
})
export class MyVideoPageComponent {
  numbersArray: number[] = [];
  constructor() {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    for (let i = 0; i < randomNum; i++) {
      this.numbersArray.push(i);
    }
    
  }
}
