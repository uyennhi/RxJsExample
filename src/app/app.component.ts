import { Component } from '@angular/core';
import { Observable, Subscription} from 'rxjs';
import { $ } from 'protractor';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Observables-tutorial';
  divisibleByThreeObservable: Observable<{isDivisibleByTree: false, number: 0}>;

  firstSubcription: Subscription;
  subcriberOneValue: number = 0;
  isSubcriberOneDisible: boolean;
  ngOnInit() {
    this.divisibleByThreeObservable = Observable.create((observer) => {
      let number = 0;
      setInterval(() => {
        if(number % 3 === 0) {
          observer.next({isDivisibleByTree: true, number: number});
        }else {
          observer.next({isDivisibleByTree: true, number: number});
        }
        number++;
      },3000);
      
    });
  }

  subcribe() {
    this.firstSubcription = this.divisibleByThreeObservable
    .subscribe({next: (value) => {
      console.log(`subcriber 1 = Number:  ${value.number}
                  ${value.isDivisibleByTree ? 'is' : 'is not'} divisible by three.`);
             this.subcriberOneValue = value.number;
             this.isSubcriberOneDisible = value.isDivisibleByTree;   
      
    }
  });
  }

  unsubcribe() {
    this.firstSubcription.unsubscribe();
    console.log('Subcriber unsubcribed from the observable.');
  }

}
