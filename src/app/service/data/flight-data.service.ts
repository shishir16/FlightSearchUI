import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Flight } from './Flight';

@Injectable({
  providedIn: 'root'
})


export class FlightDataService {
  constructor(private http: HttpClient) { }
  getFlightData() {
    return this.http.get<Flight[]>(`http://localhost:8080/flightSearchServices/flights`);
  }
  getFlightDataByFlightNumber(flightNumber) {
    return this.http.get<Flight[]>(`http://localhost:8080/flightSearchServices/flights/${flightNumber}`);
  }
  getFlightDataByFlightNumberAndDate(flightNumber,dt){
    return this.http.get<Flight[]>(
      `http://localhost:8080/flightSearchServices/flights/${flightNumber}/${dt}`);
  }

  getFlightDataByOriginAndDate(origin,destination,dt){
    return this.http.get<Flight[]>(
      `http://localhost:8080/flightSearchServices/flights/${origin}/${destination}/${dt}`);
  }  
}