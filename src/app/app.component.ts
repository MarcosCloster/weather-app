import { Component, OnInit } from '@angular/core';
import { WeatherService } from './service/weather.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  weather:any;

  constructor(private weatherService : WeatherService){

  }
  ngOnInit(): void {
    
  }

  getWeather(cityName: string){
    this.weatherService.getWeather(cityName)
    .subscribe(
      resp => this.weather = resp,
      err => console.log(err)
    )
  }

  submitLocation(cityName:HTMLInputElement){
    this.getWeather(cityName.value)
    cityName.value = ''
    cityName.focus()
    return false
  }
}
