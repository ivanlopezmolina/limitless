import { Component, OnInit } from '@angular/core';
import { LocationService } from '../shared/location.service';
import { ILocation } from '../shared/location';
import { SharedService } from '../shared/shared.service';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public pageTitle: string = 'Data List';
  public listFilter: string;
  errorMessage: string;
  years: any[];
  selectedYear: any;

  locationChosen = false;
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
