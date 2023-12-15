import { Component } from '@angular/core';
import { MaterialColorVariants, MaterialButtonsDesignTypes } from '@app/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  matBtnColors = MaterialColorVariants;
  matBtnDesignTypes = MaterialButtonsDesignTypes;
}
