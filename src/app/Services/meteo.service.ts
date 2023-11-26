import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



const URL = "https://api.open-meteo.com/v1/forecast?latitude=33.88&longitude=9.53&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m";


@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(private http: HttpClient) { }

  public getTemperature(){
    return this.http.get(URL);
    
  }

}
