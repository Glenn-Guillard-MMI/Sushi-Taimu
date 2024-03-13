import { Component, OnInit } from '@angular/core';
import { GetAPIService } from '../../service/get-api.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css'],
})
export class ProduitComponent implements OnInit {
  constructor(private get: GetAPIService) {}
  data: any[] = [];

  ngOnInit(): void {
    this.get.getAPIService().subscribe((contenue) => {
      this.data = contenue;
    });
  }

  open() {
    const bg = document.getElementById('bg')
    const panier = document.getElementById('panier')
    const container = document.getElementById('container_panier')
    if (bg && panier && container) {
      bg.style.display = 'block'
      panier.style.display = 'block'
      container.style.scale = '1'
    }
  }
}
