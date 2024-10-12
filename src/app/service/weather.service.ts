import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { last, Observable } from 'rxjs';

interface Coord {
  lat: number;
  lon: number;
}


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey: string = '713de6971c4544cd9f3222436241010';
  URI:string = '';

  constructor(private http : HttpClient) { 

    this.URI = `https://api.weatherapi.com/v1/forecast.json?key=${this.apiKey}`

  }

  getWeather(nombre:string){
    return this.http.get(`${this.URI}&q=${nombre}&days=8`)
  }

  getWeatherByCoords(coord: Coord)
  {
    return this.http.get(`${this.URI}&q=${coord.lat},${coord.lon}&days=8`)
  }
}
