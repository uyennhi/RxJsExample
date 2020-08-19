import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';
@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.css']
})
export class RangeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  ObservableRangenumbers() {
    //emit 1-10 in sequence
    const source = range(1, 10);
    //output: 1,2,3,4,5,6,7,8,9,10
    const example = source.subscribe(val => console.log(val));
  }


}
