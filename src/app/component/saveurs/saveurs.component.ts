import { Component, OnInit } from '@angular/core';
import { GetAPIService } from '../../service/get-api.service';
import { PanierService } from '../../service/panier.service';

@Component({
  selector: 'app-saveurs',
  templateUrl: './saveurs.component.html',
  styleUrl: './saveurs.component.css',
})
export class SaveursComponent implements OnInit {
  constructor(private get: GetAPIService, private Panier: PanierService) {}
  data: any[] = [];
  Saveur = localStorage.getItem('Saveurs');

  ngOnInit(): void {
    this.get.getAPIService().subscribe((contenue) => {
      this.data = contenue;
    });
  }

  GetMySaveur() {
    return this.Saveur;
  }

  add(value: any, prix: number) {
    this.Panier.add(value, prix);
  }

  GetPanier() {
    const ValuePanier = localStorage.getItem('valuePanier');
    if (ValuePanier == null) {
      return 0;
    } else {
      return ValuePanier;
    }
  }

  ProduitSelected(produit: string) {
    localStorage.setItem('produitSelected', produit);
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
}
