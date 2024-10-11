import { Injectable } from '@angular/core';
import { timeout } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }

  public getCurrentPosition():Promise<any>{
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximunAge: 0
    }
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options)
    })
  }
}
