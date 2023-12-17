import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  AfterViewInit,
} from '@angular/core';

@Directive({
  selector: '[appDynamicAttribute]',
})
export class DynamicAttributeDirective implements AfterViewInit {
  @Input('appDynamicAttribute') attributeName!: string;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngAfterViewInit(): void {
    this.renderer.setAttribute(
      this.el.nativeElement,
      this.attributeName,
      '',
    );
  }
}
