import { Component, OnInit } from '@angular/core';
import { LocationService } from '../shared/location.service';
import { ILocation } from '../shared/location';
import { SharedService } from '../shared/shared.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public pageTitle: string = 'Home';
  errorMessage: string;
  years: any[];
  selectedYear: any;
  public currentLocation = {
    'Latitude' : 35.229464,
    'Longitude' : -80.855375 };
  public locations: any[] = [];

  constructor(private _locationService: LocationService, private _sharedService: SharedService) {
  }

  ngOnInit(): void {
    this.years = this._sharedService.years;
    this.selectedYear = this._sharedService.selectedYear;

    this._locationService.getLocations(this.selectedYear)
            .subscribe(locations => {
                this.locations = locations;
            },
                error => this.errorMessage = <any>error);
  }

  onSelectedYear(event) {
    console.log(event);
    this.selectedYear = event;
    this._sharedService.selectedYear = this.selectedYear;
   }
}
