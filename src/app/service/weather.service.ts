import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey: string = '713de6971c4544cd9f3222436241010';
  URI:string = '';

  constructor(private http : HttpClient) { 

    this.URI = `http://api.weatherapi.com/v1/forecast.json?key=${this.apiKey}`

  }

  getWeather(nombre:string){
    return this.http.get(`${this.URI}&q=${nombre}&days=1`)
  }
}
