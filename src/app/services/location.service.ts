import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { LocationDTO } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private apiKey = environment.API_KEY;
  private apiUrl = environment.API_URL + 'search.json'
  
  constructor(
    private http: HttpClient
  ) { }

  myLocation: string = 'Santiago';

  getPosition(): Promise<any>{
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
        resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
      },
      err => {
        reject(err);
      });
    });
  }

  searchLocation(location: string){
    return this.http.get<LocationDTO[]>(`${this.apiUrl}?key=${this.apiKey}&q=${location}`);
  }

  getLocation(){
    return this.myLocation;
  }

  setLocation(location: string){
    this.myLocation = location;
  }
}
