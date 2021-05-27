import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

getMessage(message: string) {
  console.log(message)
}

  constructor() { }
}
