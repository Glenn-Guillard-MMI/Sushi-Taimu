import { Component } from '@angular/core';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent {
  close() {
    const bg = document.getElementById('bg')
    const panier = document.getElementById('panier')
    if (bg && panier) {
      bg.style.display = 'none'
      panier.style.display = 'none'
    }
  }
}
