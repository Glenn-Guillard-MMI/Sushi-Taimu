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

  add(value: any) {
    this.Panier.add(value);
  }
}
