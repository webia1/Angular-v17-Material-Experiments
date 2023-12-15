import {
  Component,
  Input,
  OnInit,
  ElementRef,
  Renderer2,
  AfterViewInit,
} from '@angular/core';
import { MaterialColorVariants, MaterialButtonsDesignTypes } from '@app/types';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
})
export class IconButtonComponent implements OnInit, AfterViewInit {
  @Input() designType = MaterialButtonsDesignTypes.fab;
  @Input() tooltip = 'EMPTY';
  @Input() color = MaterialColorVariants.primary;
  @Input() ariaLabel = 'EMPTY';
  @Input() buttonType = 'submit';
  @Input() overwritingClass = '';
  @Input() icon = 'play_arrow';
  @Input() disabled = false;

  baseStyleClass = 'global-material-btn';

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    if (this.overwritingClass) {
      this.baseStyleClass = this.baseStyleClass + ' ' + this.overwritingClass;
    }
  }

  ngAfterViewInit(): void {
    const button = this.elRef.nativeElement.querySelector('button');
    if (button && this.designType) {
      this.renderer.setAttribute(button, this.designType, '');
      console.log('IconButtonComponent AfterViewInit button', button);
    } else {
      console.warn('Button not found or design type not set!');
    }
  }
}
