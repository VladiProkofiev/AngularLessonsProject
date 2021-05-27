import { Injectable, Optional } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(@Optional() private logService: LogService) { }

private data: string[] = [
  "Просмотр фильмов",
  "Прогулки на свежем воздухе",
];

getData(): string[] {
  this.logService.getMessage("Получение данных");
  return this.data;
};

addData(enthusiasm: string) {
  this.data.push(enthusiasm);
  this.logService.getMessage("Добавление данных")
};

}
