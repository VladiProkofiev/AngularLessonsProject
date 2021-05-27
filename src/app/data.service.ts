import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

private data: string[] = [
  "Просмотр фильмов",
  "Прогулки на свежем воздухе",
];

getData(): string[] {
  return this.data
};

addData(enthusiasm: string) {
  this.data.push(enthusiasm)
};

}
