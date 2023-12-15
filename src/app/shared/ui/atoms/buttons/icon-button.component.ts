import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class IconButtonComponent implements OnInit {
  @Input() tooltip = 'EMPTY';
  @Input() color = 'primary';
  @Input() ariaLabel = 'EMPTY';
  @Input() buttonType = 'submit';
  @Input() overwritingClass = '';
  @Input() icon = 'play_arrow';

  baseStyleClass = 'global-material-btn';

  constructor() {}

  ngOnInit(): void {
    if (this.overwritingClass) {
      this.baseStyleClass = this.baseStyleClass + ' ' + this.overwritingClass;
    }
  }
}
