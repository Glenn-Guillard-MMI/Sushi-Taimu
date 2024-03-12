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
  add() {
    const myProduit = document.getElementById('NumberProduit');
    const numberActuel = parseInt(myProduit!.innerText, 10);
    myProduit!.innerText = '1';
    if (this.Panier) {
      this.Panier.add(this.produit, numberActuel);
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
}
