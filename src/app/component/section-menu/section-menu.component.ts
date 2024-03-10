import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-menu',
  templateUrl: './section-menu.component.html',
  styleUrl: './section-menu.component.css',
})
export class SectionMenuComponent {
  public saumon() {
    console.log('Please select');
  }

  public Saveurs(NomDeLaSaveur: string) {
    localStorage.setItem('Saveurs', NomDeLaSaveur);
  }

  GetPanier(){
    return localStorage.getItem('valuePanier')
  }
}
