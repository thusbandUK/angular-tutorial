import { Component, inject } from '@angular/core';
import {HousingLocationComponent} from '../housing-location/housing-location.component';
import {CommonModule} from '@angular/common';
import {HousingLocation} from '../housinglocation';
//import { NgFor } from '@angular/common';
import {NgFor} from '@angular/common';
import {HousingService} from '../housing.service';

/*
this was in imports CommonModule. v frustrating, basically their app shows the commonmodule being imported (see commented out
line above) but including common module in the imports crashes the app 
*/

/*
inre: template 2nd section
When adding a property binding to a component tag, we use the [attribute] = "value" syntax to notify Angular that the assigned 
value should be treated as a property from the component class and not a string value.
*/

/*
Does the input need a backslash?
*/

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent, NgFor, CommonModule],
  template: `
    <section>
      <form>        
        <input type="text" placeholder="Filter by city" #filter>        
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">    
    <app-housing-location
        *ngFor="let housingLocation of filteredLocationList"
        [housingLocation]="housingLocation"        
      ></app-housing-location>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  housingService: HousingService = inject(HousingService);
  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      const baseUrl = this.baseUrl;
      //the below is a pretty messy hack but it works
      housingLocationList.forEach((x=>{        
        return x.photo = x.photo.replace("${this.baseUrl}", this.baseUrl);
      }));
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }  

  housingLocationList: HousingLocation[] = [];

  filteredLocationList: HousingLocation[] = [];

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
    );
  }
  
}
