import { Component, OnInit } from '@angular/core';
import { PanierService } from '../../service/panier.service';
import { GetAPIService } from '../../service/get-api.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css',
})
export class PanierComponent implements OnInit {
  constructor(private panier: PanierService, private APIPOST: GetAPIService) {}
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
    const annulation = document.getElementById('msgAnnul');
    if (bg && panier && container && annulation) {
      bg.style.display = 'none';
      panier.style.display = 'none';
      annulation.style.display = 'none';
      container.style.scale = '0';
    }
    document.body.style.overflow = 'auto';
  }
  down(produit: any) {
    this.panier.downSup(produit);
    if (localStorage.getItem('valuePanier') == null || localStorage.getItem('valuePanier') == '0'){
      this.close()
    }
  }

  up(id: number, object: any) {
    this.panier.add(id, object, '');
  }

  recupsomme() {
    return this.panier.somme();
  }

  SubmitComande() {
    const confirmation = document.getElementById('msgComm'),
      panier = document.getElementById('panier'),
      bg = document.getElementById('bg'),
      container = document.getElementById('container_panier');
    if (panier && confirmation && container && bg) {
      panier.style.display = 'none';
      confirmation.style.display = 'none';
      panier.style.display = 'none';
      container.style.scale = '0';
      bg.style.display = 'none';
    }
    document.body.style.overflow = 'auto';
    this.APIPOST.PostAPIService();
  }

  annulation() {
    const annulation = document.getElementById('msgAnnul'),
      panier = document.getElementById('panier');
    if (annulation && panier) {
      panier.style.display = 'none';
      annulation.style.display = 'block';
    }
  }

  annulConfAnnu() {
    const annulation = document.getElementById('msgAnnul'),
      confirmation = document.getElementById('msgComm'),
      panier = document.getElementById('panier');
    if (annulation && panier && confirmation) {
      panier.style.display = 'block';
      annulation.style.display = 'none';
      confirmation.style.display = 'none';
    }
  }

  confirmation() {
    const confirmation = document.getElementById('msgComm'),
      panier = document.getElementById('panier');
    if (panier && confirmation) {
      panier.style.display = 'none';
      confirmation.style.display = 'block';
    }
  }

  clear() {
    localStorage.removeItem('valuePanier');
    localStorage.removeItem('InMyPanier');
    this.close();
  }

  quantite() {
    const ValuePanier = localStorage.getItem('valuePanier');
    if (ValuePanier == null) {
      return 0;
    } else {
      return ValuePanier;
    }
  }
}
