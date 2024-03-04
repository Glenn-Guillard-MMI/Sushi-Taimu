import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PanierService {
  constructor() {}

  add(value: any, quantite?: any): void {
    const myValue: any = localStorage.getItem('valuePanier');
    if (myValue < 10) {
      if (myValue == null) {
        localStorage.setItem('valuePanier', '1');
        const TheValue: any = { 1: { nom: value, quantite: quantite || 1 } };
        localStorage.setItem('InMyPanier', JSON.stringify(TheValue));
      } else {
        const OldItem: any = localStorage.getItem('InMyPanier');
        const json = JSON.parse(OldItem);
        for (const key in json) {
          if (json[key].nom == value) {
            json[key].quantite += quantite || 1;
            localStorage.setItem('InMyPanier', JSON.stringify(json));
            const MyNewValue: any = parseInt(myValue, 10) + 1;
            localStorage.setItem('valuePanier', MyNewValue.toString());
            return;
          }
        }
        const MyNewValue: any = parseInt(myValue, 10) + 1;
        const TheValue: any = {
          nom: value,
          quantite: quantite || 1,
        };
        json[MyNewValue] = TheValue;
        localStorage.setItem('InMyPanier', JSON.stringify(json));
        localStorage.setItem('valuePanier', MyNewValue.toString());
      }
    } else {
      localStorage.setItem('valuePanier', '10');
      alert('Vous avez atteint la limite de commande');
    }
  }
}
