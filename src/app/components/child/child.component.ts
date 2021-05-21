import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() title: string = '';
  @Input() _userName: string = '';
  @Input() _userAge: number = 0;
    @Input() 
    set userName(name: string) {
      if(name.length < 2) {
        alert('Некорректное имя')
      }
      else {
        this._userName = name;
      }
    }
    get userName() {
      return this._userName;
    }

    @Input() 
    set userAge(age: number) {
      if(age < 18) {
        alert('Вы слишком молоды для данного сервиса');
      }
      else if(age > 100) {
        alert('Вы уверены,что ввели возраст правильно?')
      }
      else {
        this._userAge = age;
      }
    }
    get userAge() {
      return this._userAge;
    }

    @Output() userNameChange = new EventEmitter<string>()
    onNameChange(model: string) {
      this._userName = model;
      this.userNameChange.emit(model);
    }
  constructor() { }

  ngOnInit(): void {
  }

}
