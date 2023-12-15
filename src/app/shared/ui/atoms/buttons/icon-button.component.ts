import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
})
export class IconButtonComponent implements OnInit {
  @Input() tooltip = 'EMPTY';
  @Input() color = 'primary';
  @Input() ariaLabel = 'EMPTY';
  @Input() buttonType = 'submit';
  @Input() overwritingClass = '';
  @Input() icon = 'play_circle_outline';

  baseStyleClass = 'global-material-btn';

  constructor() {}

  ngOnInit(): void {
    if (this.overwritingClass) {
      this.baseStyleClass = this.baseStyleClass + ' ' + this.overwritingClass;
    }
  }
}
