import { NgModule, Injector } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';


import { AppRoutes } from './app.routing';

import { PagesModule } from './pages/pages.module';


@NgModule({
    imports: [
      CommonModule,
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      RouterModule.forRoot(AppRoutes,{
      //   useHash: true
      }),
      HttpClientModule,
      PagesModule,
      ReactiveFormsModule
    ],
    declarations: [
      AppComponent,
    ],
    providers : [
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule {
  constructor(injector:Injector){
    }
}
