// import { Component } from '@angular/core';
// import { TransportService } from './shared/services/policy/policy.service';
// import { Transport } from './models/PolicySearch';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })

// export class PivotComponent {

//   dataCollection: Transport[];
//   gridColumns: string[];



//   constructor(private transportService: TransportService) { 
//   }

//   ngOnInit() {
//     this.getTransportData();
//   }

//   private getTransportData() {
//     // getting data from service
//     this.dataCollection =  this.transportService.getTransportData();
//     console.log('data collection =>' + this.dataCollection);
//     //setting the columns for grid
//     let workersCompensationObject = new WorkersCompensationPolicy();
//     this.gridColumns = Object.getOwnPropertyNames(workersCompensationObject);
//     console.log('gridColumns =>' + this.gridColumns);
//   }

// }
