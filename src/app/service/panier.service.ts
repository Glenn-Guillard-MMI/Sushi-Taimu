import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PanierService {
  constructor() {}

  add() {
    const myValue: any = localStorage.getItem('valuePanier');
    if (myValue <= 10) {
      if (myValue == null) {
        localStorage.setItem('valuePanier', '1');
      } else {
        const MyNewValue: any = parseInt(myValue, 10) + 1;
        localStorage.setItem('valuePanier', MyNewValue);
      }
    } else {
    }
  }
}
