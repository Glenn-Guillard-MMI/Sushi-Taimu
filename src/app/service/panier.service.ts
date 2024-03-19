import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PanierService {
  constructor() {}
  public listeSubject = new BehaviorSubject<any[]>([]);

  add(value: any, prix: any, quantite?: any): any {
    if (value != undefined && value != '') {
      const myValue: any = localStorage.getItem('valuePanier');
      if (myValue < 10) {
        if (myValue == null) {
          localStorage.setItem('valuePanier', quantite || 1);
          const TheValue: any = {
            1: { nom: value, prix: prix, quantite: quantite || 1 },
          };
          localStorage.setItem('InMyPanier', JSON.stringify(TheValue));
        } else {
          const OldItem: any = localStorage.getItem('InMyPanier');
          const json = JSON.parse(OldItem);
          for (const key in json) {
            if (json[key].nom == value) {
              json[key].quantite += quantite || 1;
              localStorage.setItem('InMyPanier', JSON.stringify(json));
              const MyNewValue: any = parseInt(myValue, 10) + (quantite || 1);
              localStorage.setItem('valuePanier', MyNewValue.toString());
              this.PannierView();

              return true;
            }
          }
          const MyNewValue: any = parseInt(myValue, 10) + 1;
          const TheValue: any = {
            nom: value,
            prix: prix,
            quantite: quantite || 1,
          };
          json[MyNewValue] = TheValue;
          localStorage.setItem('InMyPanier', JSON.stringify(json));
          localStorage.setItem('valuePanier', MyNewValue.toString());
        }
        this.PannierView();

        return true;
      } else {
        localStorage.setItem('valuePanier', '10');
        alert('Vous avez atteint la limite de commande');
      }
    } else {
      return false;
    }
  }
  liste: any[] = [];
  public PannierView() {
    this.liste = [];
    const MonPanier: any = localStorage.getItem('InMyPanier');
    const json = JSON.parse(MonPanier);
    for (const item in json) {
      this.liste.push(json[item]);
    }

    this.listeSubject.next(this.liste);
  }

  downSup(produit: any): any {
    const myValue: any = localStorage.getItem('InMyPanier');
    const numberValue: any = localStorage.getItem('valuePanier');
    const nbr: number = parseInt(numberValue, 10) - 1;
    const json = JSON.parse(myValue);
    for (const item in json) {
      if (json[item].nom == produit) {
        if (json[item].quantite == 1) {
          delete json[item];
          localStorage.setItem('InMyPanier', JSON.stringify(json));
          localStorage.setItem('valuePanier', nbr.toString());
        } else {
          json[item].quantite -= 1;
          localStorage.setItem('InMyPanier', JSON.stringify(json));
          localStorage.setItem('valuePanier', nbr.toString());
        }
      }
    }
    this.PannierView();
  }

  somme() {
    const myValue: any = localStorage.getItem('InMyPanier');
    const json = JSON.parse(myValue);
    let rsl = 0;
    for (const item in json) {
      rsl += json[item].quantite * json[item].prix;
    }
    return rsl;
  }
}
