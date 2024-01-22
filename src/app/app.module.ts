import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppCold } from './rxjs/cold.component';
import { HttpClientModule } from '@angular/common/http';
import { AppHot } from './rxjs/hot.component';
import { HigherOrderComponent } from './rxjs/higher-order.component';

@NgModule({
  declarations: [
    AppComponent,
    AppCold,
    AppHot,
    HigherOrderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
