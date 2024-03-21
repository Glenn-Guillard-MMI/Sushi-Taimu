import { Component, OnInit } from '@angular/core';
import { GetAPIService } from '../../service/get-api.service';
import { PanierService } from '../../service/panier.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrl: './categorie.component.css',
})
export class CategorieComponent implements OnInit {
  constructor(private get: GetAPIService, private Panier: PanierService) {}
  data: any[] = [];
  Saveur = localStorage.getItem('composition');

  ngOnInit(): void {
    this.get.getAPIService().subscribe((contenue) => {
      this.data = contenue;
    });
  }

  GetMyCompo() {
    return this.Saveur;
  }

  add(id: number, value: any, prix: number, img: string) {
    this.Panier.add(id, value, prix, img);
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
    document.body.style.overflow = 'hidden';
  }
}
