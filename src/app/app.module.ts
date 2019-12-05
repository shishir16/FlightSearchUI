import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicSearchComponent } from './basic-search/basic-search.component';

import { FlightDataService } from "./service/data/flight-data.service";
import { AlternateSearchComponent } from './alternate-search/alternate-search.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicSearchComponent,
    AlternateSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FlightDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
