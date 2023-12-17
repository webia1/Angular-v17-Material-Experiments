import {
  AfterContentInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';
import {
  MaterialButtonsDesignTypes,
  MaterialColorVariants,
} from '@app/types';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
})
export class IconButtonComponent implements AfterContentInit {
  @Input() designType: MaterialButtonsDesignTypes =
    MaterialButtonsDesignTypes.fab;
  @Input() tooltip = 'EMPTY';
  @Input() color = MaterialColorVariants.primary;
  @Input() ariaLabel = 'EMPTY';
  @Input() buttonType = 'submit';
  @Input() icon = 'play_arrow';
  @Input() disabled = false;

  @Output() messageEvent = new EventEmitter<unknown>();

  baseBtnClass = 'global-material-btn';

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef,
  ) {}

  ngAfterContentInit() {
    this.appendButton();
    this.cdr.detectChanges();
  }

  appendButton() {
    // append button to host element with id="atom-btn"
    const buttonContainer =
      this.elRef.nativeElement.querySelector('#atom-btn');
    const button = this.createButton();
    this.renderer.appendChild(buttonContainer, button);
    console.log('Button', button);
  }

  createButton() {
    const button = this.renderer.createElement('button');
    const matIcon = this.renderer.createElement('mat-icon');
    this.renderer.listen(button, 'click', this.clickHandler);
    this.renderer.addClass(button, this.baseBtnClass);
    this.renderer.setAttribute(button, this.designType, '');
    this.renderer.setAttribute(button, 'type', this.buttonType);
    this.renderer.setAttribute(button, 'aria-label', this.ariaLabel);
    this.renderer.setAttribute(button, 'matTooltip', this.tooltip);

    this.renderer.setAttribute(
      button,
      'disabled',
      this.disabled.toString(),
    );

    if (this.color && this.color === 'primary') {
      this.renderer.addClass(button, 'primary');
    }

    // add icon name from this.icon to mat-icon as innerHTML
    this.renderer.addClass(matIcon, 'material-icons');
    this.renderer.appendChild(
      matIcon,
      this.renderer.createText(this.icon),
    );

    this.renderer.addClass(button, 'mdc-fab');
    this.renderer.appendChild(button, matIcon);

    return button;
  }

  clickHandler() {
    this.messageEvent.emit();
  }
}
