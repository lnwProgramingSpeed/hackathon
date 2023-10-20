import { Component } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {
  universities = ['CU', 'CMU','MU', 'SWU', 'TU', 'MFU', 'KU'];
  selectedUniversity: string = 'University';

  yearList = [2019,2020,2021,2022,2023];
  selectedYear = 'Year';

  termList = [1,2,3];
  selectedTerm = 'Term';

  numbersArray: number[] = [];

  inputValue: string = 'Search';

  constructor() {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    for (let i = 0; i < randomNum; i++) {
      this.numbersArray.push(i);
    }
    
  }

  selectUniversity(university: string) {
    this.selectedUniversity = university;
  }

  selectYear(year: string) {
    this.selectedYear = year;
  }

  selectTerm(term: string) {
    this.selectedTerm = term;
  }
  
  showValue(){
    console.log(this.inputValue);
  }
}
