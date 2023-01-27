import { Component, Input } from '@angular/core';

@Component({
  selector: 'Dhana',
  template: `<h1>Dhana {{name}}</h1>`,
  styles: [`h1 { font-family: sans-serif; }`],
})
export class HelloComponent {
  @Input() name: string;
}
