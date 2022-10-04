import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UniboUtilsService {

  constructor() { }

  /**
   * Comprueba si una variable es de tipo number
   * @param n parámetro a comprobar
   * @returns booleano que indica si el parámetro es numérico
   */
  public isNumber(n: any) { 
    return !isNaN(parseFloat(n)) && !isNaN(n - 0) 
  }
}
