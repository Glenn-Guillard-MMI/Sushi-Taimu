import { Component, OnInit } from '@angular/core';
import { GetAPIService } from '../../service/get-api.service';
import { PanierService } from '../../service/panier.service';

@Component({
  selector: 'app-achat-produit',
  templateUrl: './achat-produit.component.html',
  styleUrl: './achat-produit.component.css',
})
export class AchatProduitComponent implements OnInit {
  constructor(private get: GetAPIService, private Panier: PanierService) {}
  data: any[] = [];
  produit = localStorage.getItem('produitSelected');

  ngOnInit(): void {
    this.get.getAPIService().subscribe((contenue) => {
      this.data = contenue;
    });
    this.bloque();
  }

  GetMyProduit() {
    return this.produit;
  }
  AjoutNumberProduit() {
    const myProduit = document.getElementById('NumberProduit');
    const numberActuel = parseInt(myProduit!.innerText, 10);
    const value: any = localStorage.getItem('valuePanier');
    if (value != null) {
      if (!(numberActuel + parseInt(value) > 9)) {
        myProduit!.innerText = (numberActuel + 1).toString();
      }
    } else {
      if (!(numberActuel > 9)) {
        myProduit!.innerText = (numberActuel + 1).toString();
      }
    }
  }

  retirerNumberProduit() {
    const myProduit = document.getElementById('NumberProduit');
    const numberActuel = parseInt(myProduit!.innerText, 10);
    if (numberActuel != 1) {
      myProduit!.innerText = (numberActuel - 1).toString();
    }
  }
  add(img: string) {
    const myProduit = document.getElementById('NumberProduit');
    const myPrix = document.getElementById('MonPrix');
    const numberActuel = parseInt(myProduit!.innerText, 10);
    const prixActuel = parseFloat(myPrix!.innerText);
    myProduit!.innerText = '1';
    if (this.Panier) {
      this.Panier.add(this.produit, prixActuel, img, numberActuel);
      this.bloque();
    }
  }

  bloque() {
    const value: any = localStorage.getItem('valuePanier');
    const MySubmit = document.getElementById('submit') as HTMLButtonElement;
    if (parseInt(value) >= 10) {
      MySubmit!.disabled = true;
    }
  }

  open() {
    const bg = document.getElementById('bg');
    const panier = document.getElementById('panier');
    const container = document.getElementById('container_panier');
    if (bg && panier && container) {
      bg.style.display = 'block';
      panier.style.display = 'block';
      container.style.scale = '1';
    }
    this.Panier.PannierView();
  }

  GetPanier() {
    const ValuePanier = localStorage.getItem('valuePanier');
    if (ValuePanier == null) {
      return 0;
    } else {
      return ValuePanier;
    }
  }
}
