import { Component } from "@angular/core";

@Component ({
    selector: 'app-data',
    template: `<div><h3>{{message}}</h3></div>`
})
export class DataComponent {
    message: string = 'Сообщение из DataComponent'
}