import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpInterceptors } from './interceptors/http.interceptor';
import { HTTP_INTERCEPTORS } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptors,
      multi: true,
    },
  ]
})
export class AppModule { }
