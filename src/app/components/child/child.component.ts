import { Component, Input, OnInit, Output, EventEmitter, ContentChild, ElementRef } from '@angular/core';

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

    @ContentChild("headerContent", {static: false})
    header: ElementRef | undefined
    change() { 
      if(this.header !==undefined){
          this.header.nativeElement.textContent = "Подтверждено"; 
      }
  }
  constructor() { }

  counter: number = 0;
    increment() {this.counter++};
    decrement() {this.counter--};

  ngOnInit() {
       
    console.log(`ngOnInit`);
  }
  ngOnChanges() {
     
    console.log(`OnChanges`);
  }
  ngDoCheck() {
     
    console.log(`ngDoCheck`);
  }
  ngAfterViewInit() {
     
    console.log(`ngAfterViewInit`);
  }
  ngAfterViewChecked() {
     
    console.log(`ngAfterViewChecked`);
  }
  ngAfterContentInit() {
     
    console.log(`ngAfterContentInit`);
  }
  ngAfterContentChecked() {
     
    console.log(`ngAfterContentChecked`);
  }

}
