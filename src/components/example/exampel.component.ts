import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';

@Component({
  selector: 'app-exampel',
  templateUrl: './exampel.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ExampelComponent {
  protected showText = signal(false);
}
