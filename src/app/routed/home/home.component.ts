import { Component } from '@angular/core';
import {
  MaterialButtonsDesignTypes,
  MaterialColorVariants,
} from '@app/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  matBtnColors = MaterialColorVariants;
  matBtnDesignTypes = MaterialButtonsDesignTypes;
  constructor() {}

  clickOnDirectlyEmbeddedButton(): void {
    console.log('Directly embedded button clicked!');
  }

  handleEmittedEvent(): void {
    console.log('Event received!');
  }

  otherClickEvent(): void {
    console.log('Other click event!');
  }
}
