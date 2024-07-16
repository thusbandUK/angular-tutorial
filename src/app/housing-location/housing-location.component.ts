import { Component, Input } from '@angular/core';
import {HousingLocation} from '../housinglocation';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [],
  templateUrl: './housing-location.component.html',
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
