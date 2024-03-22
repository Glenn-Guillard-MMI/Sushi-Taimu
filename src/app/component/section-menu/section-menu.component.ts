import { Component, OnInit } from '@angular/core';
import { PanierService } from '../../service/panier.service';

@Component({
  selector: 'app-section-menu',
  templateUrl: './section-menu.component.html',
  styleUrl: './section-menu.component.css',
})
export class SectionMenuComponent {
  constructor(private Panier: PanierService) {}

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
    if (localStorage.getItem('valuePanier') == null || localStorage.getItem('valuePanier') == '0'){
      return
    }else{
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
}
