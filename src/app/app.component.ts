import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './components/child/child.component';
import { DataService } from './data.service';
import { LogService } from './log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService, LogService],
})
export class AppComponent implements OnInit {
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
  items: string[] = [];
  nameOfEnthusiasm: string = "";
  confirmation: boolean = false;

constructor(private dataService: DataService, private logService: LogService) {}

addItem(nameOfEnthusiasm: string) {
  this.dataService.addData(nameOfEnthusiasm);
  this.logService.getMessage("Добавление данных")
}

toggle() {
this.confirmation = !this.confirmation;
}

  @ViewChild (ChildComponent, {static: false})
  private counterComponent: ChildComponent | undefined
increment() {this.counterComponent?.increment()};
decrement() {this.counterComponent?.decrement()};

ngOnInit() {
this.items = this.dataService.getData();
this.logService.getMessage("Получение данных")
}

}
