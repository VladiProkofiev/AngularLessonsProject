import { Injectable, Optional } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(@Optional() private logService: LogService) { }

private data: string[] = [];

getData(): string[] {
  this.logService.getMessage("Получение данных");
  return this.data;
};

addData(enthusiasm: string) {
  this.data.push(enthusiasm);
  this.logService.getMessage("Добавление данных");
};
removeData() {
  this.data.pop();
  this.logService.getMessage("Удаление данных")

}
}
