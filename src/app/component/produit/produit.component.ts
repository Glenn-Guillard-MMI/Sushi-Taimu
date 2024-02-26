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
}
