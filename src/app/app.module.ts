import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicCalcDisplayComponent } from './basic-calc-display/basic-calc-display.component';



@NgModule({
  declarations: [
    AppComponent,
    BasicCalcDisplayComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
