import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UniboUtilsService {

  constructor() { }

  public isNumber(n: any) { 
    return !isNaN(parseFloat(n)) && !isNaN(n - 0) 
  }
}
