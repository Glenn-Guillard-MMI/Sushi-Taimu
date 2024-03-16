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
  const container = document.getElementById('container_panier')
  if (bg && panier && container) {
    bg.style.display = 'none'
    panier.style.display = 'none'
    panier.style.transition = 'left 250ms ease'
    container.style.scale = '0'
  }
}
}
