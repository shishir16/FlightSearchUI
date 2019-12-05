import { Component, OnInit } from '@angular/core';
import { Flight } from '../service/data/Flight';
import { FlightDataService } from "../service/data/flight-data.service";


@Component({
  selector: 'app-alternate-search',
  templateUrl: './alternate-search.component.html',
  styleUrls: ['./alternate-search.component.css']
})
export class AlternateSearchComponent implements OnInit {
  flights : Flight[] 
  show = false; 
  origin : string;
  destination : string;
  departureDate : Date;
  epochDate: Date;
  constructor( private service:FlightDataService) {
  
   }

  ngOnInit() {
  
  }


  search(){
    
    
    this.epochDate = new Date(this.departureDate)
    console.log(this.epochDate.getTime()) 
    this.service.getFlightDataByOriginAndDate(this.origin,this.destination,this.epochDate.getTime()).subscribe(
       response => {
        this.flights =  response ;
        this.show = true;
      })
    
  }

  clear(){
    this.origin  = null
    this.destination  = null
    this.departureDate = null
    this.show = false
  }

}
