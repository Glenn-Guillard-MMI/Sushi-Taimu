import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timeout } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetAPIService {
  constructor(private http: HttpClient) {}

  public getAPIService(): Observable<any> {
    return this.http.get('http://localhost:3000/box');
  }

  public getAPIBoissonService(): Observable<any> {
    return this.http.get('http://localhost:3000/boissons');
  }

  public PostAPIService(): void {
    const myValue: any = localStorage.getItem('InMyPanier');
    const json = JSON.parse(myValue);
    let rsl = 0;
    for (const item in json) {
      rsl += json[item].quantite * json[item].prix;
    }
    this.http
      .post<{ id: number }>('http://localhost:3000/commandes', { prix_t: rsl })
      .subscribe((data) => {
        const json2 = JSON.parse(myValue);
        const idcom = data.id;
        for (const ids in json2) {
          let monid: string = json2[ids].id.toString();
          if (monid.startsWith('boisson_')) {
            let idboisson: string = json2[ids].id;
            idboisson = idboisson.charAt(idboisson.length - 1);
            this.http
              .post('http://localhost:3000/commandes/btc', {
                comId: idcom,
                boiId: parseInt(idboisson),
              })
              .subscribe();
          } else {
            let idalim: string = json2[ids].id;
            console.log(idalim);
            this.http
              .post('http://localhost:3000/commandes/btc', {
                comId: idcom,
                boxId: parseInt(idalim),
              })
              .subscribe();
          }
        }
        alert('votre num de commande est :' + idcom);
      });
    setTimeout(() => {
      localStorage.removeItem('InMyPanier');
      localStorage.removeItem('valuePanier');
      window.location.reload();
    }, 500);
  }
}
