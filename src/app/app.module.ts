import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OfComponent } from './of/of.component';
import { IntervalComponent } from './interval/interval.component';
import { FromComponent } from './from/from.component';
import { RangeComponent } from './range/range.component';

@NgModule({
  declarations: [
    AppComponent,
    OfComponent,
    IntervalComponent,
    FromComponent,
    RangeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
