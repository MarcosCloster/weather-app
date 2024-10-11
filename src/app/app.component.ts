import { Component, OnInit } from '@angular/core';
import { WeatherService } from './service/weather.service'
import { GeolocationService } from './service/geolocation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  weather:any;

  constructor(private weatherService : WeatherService, private geoLocationSvc : GeolocationService){
    this.getLocation();
  }
  ngOnInit(): void {
    
  }

  getWeather(cityName: string){
    this.weatherService.getWeather(cityName)
    .subscribe(
      resp => this.weather = resp,
      err => {
        alert('Ingrese una ciudad que exista')
      }
    )
  }

  submitLocation(cityName:HTMLInputElement){
    this.getWeather(cityName.value)
    cityName.value = ''
    cityName.focus()
    return false
  }

  private async getLocation(): Promise<void> {
    try {
      const {coords} = await this.geoLocationSvc.getCurrentPosition()
      //this.weather = this.weatherService.getWeatherByCoords(coords)
      this.weatherService.getWeatherByCoords({ lat: coords.latitude, lon: coords.longitude }).subscribe(
        resp => this.weather = resp,
        err => console.log(err)
      );
    } catch (error) {
      console.log(error)
    }
  }

}
