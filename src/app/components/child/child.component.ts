import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<ng-content></ng-content>
  <h3>{{title}}</h3>`,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
title = 'Рады вас видеть'
  constructor() { }

  ngOnInit(): void {
  }

}
