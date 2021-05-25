import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './components/child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title: string = 'Форма авторизации';
  name: string = 'Пользователь';
  age: number = 18;

  @ViewChild (ChildComponent, {static: false})
  private counterComponent: ChildComponent | undefined
increment() {this.counterComponent?.increment()};
decrement() {this.counterComponent?.decrement()};
}
