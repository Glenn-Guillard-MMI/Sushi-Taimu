import { Component, OnInit } from '@angular/core';
import { PanierService } from '../../service/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css',
})
export class PanierComponent implements OnInit {
  constructor(private panier: PanierService) {}
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
}
