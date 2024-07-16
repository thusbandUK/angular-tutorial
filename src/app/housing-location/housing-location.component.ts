import { Component, Input } from '@angular/core';
import {HousingLocation} from '../housinglocation';
import {CommonModule} from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

/*
https://angular.dev/tutorials/first-app/07-dynamic-template-values

In this updated template code you have used property binding to bind the housingLocation.photo to the src attribute. The alt 
attribute uses interpolation to give more context to the alt text of the image.

You use interpolation to include the values for name, city and state of the housingLocation property.
*/

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <section class="listing">
      <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
      <img
        class="listing-photo"
        [src]="housingLocation.photo"
        alt="Exterior photo of {{ housingLocation.name }}"
        crossorigin
      />
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">{{ housingLocation.city }}, {{ housingLocation.state }}</p>
    </section>
  `,
  styleUrl: './housing-location.component.css'
})
/*
https://angular.dev/tutorials/first-app/05-inputs
You have to add the ! because the input is expecting the value to be passed. In this case, there is no default value. 
In our example application case we know that the value will be passed in - this is by design. The exclamation point is 
called the non-null assertion operator and it tells the TypeScript compiler that the value of this property won't be null or 
undefined.
 */


export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
