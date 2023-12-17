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

  initiateBtnClick(event: unknown): void {
    console.log('Child component emitted event: ', event);
  }
}
