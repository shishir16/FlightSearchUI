import { Component, OnInit } from '@angular/core';
import { Flight } from '../service/data/Flight';
import { FlightDataService } from "../service/data/flight-data.service";

@Component({
  selector: 'app-basic-search',
  templateUrl: './basic-search.component.html',
  styleUrls: ['./basic-search.component.css']
})

export class BasicSearchComponent implements OnInit {
  flights : Flight[] 
  show = false; 
  flightNumber : string;
  departureDate : Date;
  epochDate: Date;
  constructor( private service:FlightDataService) {
  
   }

  ngOnInit() {
  
  }


  search(){
    
    console.log(this.flightNumber);
    this.epochDate = new Date(this.departureDate)
    console.log(this.epochDate.getTime());
    //this.service.getFlightData().subscribe(
    this.service.getFlightDataByFlightNumberAndDate(this.flightNumber,
      this.epochDate.getTime()).subscribe(
       response => {
        this.flights =  response ;
        this.show = true;
      })
    
  }

  clear(){
    this.flightNumber = null
    this.departureDate = null
    this.show = false
  }
}
