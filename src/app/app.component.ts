import { Component, ViewChild } from '@angular/core';

export class UserForm {
  constructor(public userFirstName: string, 
              public userSecondName: string, 
              public userAge: number,
              public userSex: string[],
              public nameOfEnthusiasm: string[])
  { }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  userFirstName: string = '';
  userSecondName: string = '';
  userAge: number = 0;
  userSex = [
    "Мужской",
    "Женский"
  ];
  rules = [
    "Правило №1: Заполните поле Имя",
    "Правило №2: Заполните поле Фамилия",
    "Правило №3: Введите свой возраст",
    "Правило №4: Укажите пол",
    "Правило №5: По желанию,укажите свои увлечения",
  ];
  nameOfEnthusiasm = [];
  confirmationRules: boolean = false;
  confirmationForm: boolean = false;
  userForms: UserForm[] = [];

toggleRules() {
  this.confirmationRules = !this.confirmationRules;
}

confirmForm() {
  this.confirmationForm = !this.confirmationForm;
  this.userForms.push(new UserForm(this.userFirstName, this.userSecondName, this.userAge, this.userSex, this.nameOfEnthusiasm))
}

}
