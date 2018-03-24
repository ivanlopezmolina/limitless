import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { ILocation } from './location';

@Injectable()
export class SharedService {
  public years = [2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010];
  public selectedYear = 2018;
}
