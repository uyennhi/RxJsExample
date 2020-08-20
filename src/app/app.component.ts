import { Component } from '@angular/core';
import { Observable, Subscription} from 'rxjs';
import { $ } from 'protractor';
import { map, filter, tap } from 'rxjs/operators'


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
    // create new Observable by Create Operate
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
// subcribe() 
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
// unsubcribe()
  unsubcribe() {
    this.firstSubcription.unsubscribe();
    console.log('Subcriber unsubcribed from the observable.');
  }

  obs = new Observable((observer) => {
    observer.next(1)
    observer.next(2)
    observer.next(3)
    observer.next(4)
    observer.next(5)
    observer.next(6)
    observer.complete()
  }).pipe(
    tap(data => console.log('tap '+data)),           //tap
    filter(data => data > 2),                        //filter
    tap(data => console.log('filter '+data)),        //tap
    map((val) => { return val as number * 2 }),      //map
    tap(data => console.log('final '+data)),         //tap
  )

  data = [];
  observerTrial() {
    this.obs.subscribe(
      val => {
        this.data.push(val)
        console.log(this.data)
      }
    );

  }

}
