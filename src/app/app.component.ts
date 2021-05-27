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
  rules = [
    "Правило №1",
    "Правило №2",
    "Правило №3",
    "Правило №4",
    "Правило №5",
  ];

confirmation: boolean = false;

toggle() {
this.confirmation = !this.confirmation;
}

@ViewChild (ChildComponent, {static: false})

private counterComponent: ChildComponent | undefined;

increment() {this.counterComponent?.increment()};

decrement() {this.counterComponent?.decrement()};

}
