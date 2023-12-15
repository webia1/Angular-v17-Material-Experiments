import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MaterialColorVariants } from '@app/types';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class IconButtonComponent implements OnInit {
  @Input() tooltip = 'EMPTY';
  @Input() color = MaterialColorVariants.primary;
  @Input() ariaLabel = 'EMPTY';
  @Input() buttonType = 'submit';
  @Input() overwritingClass = '';
  @Input() icon = 'play_arrow';
  @Input() disabled = false;

  baseStyleClass = 'global-material-btn';

  constructor() {}

  ngOnInit(): void {
    if (this.overwritingClass) {
      this.baseStyleClass = this.baseStyleClass + ' ' + this.overwritingClass;
    }
  }
}
