import { Component, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations';
import { LocationDTO } from 'src/app/models/weather.model';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [
    
  ]
})
export class SearchComponent implements OnInit {

  search: string = '';

  cities: LocationDTO[] = [];
  searching: boolean = false;

  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  @Output() city: EventEmitter<LocationDTO> = new EventEmitter<LocationDTO>();

  constructor(
    private locationService: LocationService
  ) { }

  ngOnInit(): void {
  }

  closeSearch(){
    this.close.emit();
  }

  searchCity(){
    this.locationService.searchLocation(this.search)
    .subscribe((cities) => {
      this.cities = cities;
      this.searching = true;
    });
  }

  selectCity(city: LocationDTO){
    this.city.emit(city);
    this.locationService.setLocation(city.url);
    this.closeSearch();
  }

  

}
