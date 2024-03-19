import { Component, OnInit } from '@angular/core';
import { PanierService } from '../../service/panier.service';
import { GetAPIService } from '../../service/get-api.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css',
})
export class PanierComponent implements OnInit {
  constructor(private panier: PanierService, private APIPOST: GetAPIService) {}
  Malister: any[] = [];
  ngOnInit(): void {
    this.panier.listeSubject.subscribe((panier) => {
      this.Malister = panier;
    });
  }

  close() {
    const bg = document.getElementById('bg');
    const panier = document.getElementById('panier');
    const container = document.getElementById('container_panier');
    if (bg && panier && container) {
      bg.style.display = 'none';
      panier.style.display = 'none';
      panier.style.transition = 'left 250ms ease';
      container.style.scale = '0';
    }
  }
  down(produit: any) {
    this.panier.downSup(produit);
  }

  up(object: any) {
    this.panier.add(object, '');
  }

  recupsomme() {
    return this.panier.somme();
  }

  SubmitComande() {
    this.APIPOST.PostAPIService();
  }

  clear(){
    localStorage.removeItem('valuePanier');
    localStorage.removeItem('InMyPanier');
    this.close();
  }

  quantite(){
    const ValuePanier = localStorage.getItem('valuePanier');
    if (ValuePanier == null) {
      return 0;
    } else {
      return ValuePanier;
    }
  }
}
