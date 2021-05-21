import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-child><h2>Добро пожаловать,{{name}}</h2></app-child>`,
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  name = 'Vladimir';
}
