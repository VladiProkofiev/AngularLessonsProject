import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { LogService } from "../log.service";

@Component ({
    selector: 'app-data',
    template: `<div>
    <div>
        <input [(ngModel)] = "nameOfEnthusiasm" placeholder="Увлечения">
        <button (click)="addItem(nameOfEnthusiasm)">Добавить</button>
        <button (click)="removeItem()">Удалить</button>
    </div>
    <table>
        <tr *ngFor="let item of items">
            <td>{{item}}</td>
        </tr>
    </table>
</div>`,
providers: [DataService, LogService],
})
export class DataComponent implements OnInit {
    items: string[] = [];
    nameOfEnthusiasm: string = "";

constructor(private dataService: DataService) {}

addItem(nameOfEnthusiasm: string) {
  this.dataService.addData(nameOfEnthusiasm);
}

removeItem() {
    this.dataService.removeData();
}

ngOnInit() {
    this.items = this.dataService.getData();
    }
    
}