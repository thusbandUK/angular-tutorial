import { Component } from '@angular/core';
import {HousingLocationComponent} from '../housing-location/housing-location.component';
//import {CommonModule} from '@angular/common';
import {HousingLocation} from '../housinglocation';

/*
this was in imports CommonModule. v frustrating, basically their app shows the commonmodule being imported (see commented out
line above) but including common module in the imports crashes the app 
*/

/*
inre: template 2nd section
When adding a property binding to a component tag, we use the [attribute] = "value" syntax to notify Angular that the assigned 
value should be treated as a property from the component class and not a string value.
*/

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location [housingLocation]="housingLocation"></app-housing-location>
    </section>    
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  housingLocation: HousingLocation = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}
