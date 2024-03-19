import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
      .post('http://localhost:3000/commandes', { prix_t: rsl })
      .subscribe();

    localStorage.removeItem('InMyPanier');
    localStorage.removeItem('valuePanier');
    window.location.reload();
  }
}
