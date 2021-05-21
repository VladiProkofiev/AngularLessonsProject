import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title: string = 'Форма авторизации';
  name: string = 'Пользователь';
  age: number = 18;
}
