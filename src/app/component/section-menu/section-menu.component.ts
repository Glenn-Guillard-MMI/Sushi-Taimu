import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-menu',
  templateUrl: './section-menu.component.html',
  styleUrl: './section-menu.component.css',
})
export class SectionMenuComponent {
  public Saveurs(NomDeLaSaveur: string) {
    localStorage.setItem('Saveurs', NomDeLaSaveur);
  }

  public composition(NomDeLaSaveur: string) {
    localStorage.setItem('composition', NomDeLaSaveur);
  }

  GetPanier() {
    const ValuePanier = localStorage.getItem('valuePanier');
    if (ValuePanier == null) {
      return 0;
    } else {
      return ValuePanier;
    }
  }

  open() {
    const bg = document.getElementById('bg')
    const panier = document.getElementById('panier')
    if (bg && panier) {
      bg.style.display = 'block'
      panier.style.display = 'block'
    }
  }
}
