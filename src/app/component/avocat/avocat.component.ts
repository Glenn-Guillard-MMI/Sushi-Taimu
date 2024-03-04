import { Component, OnInit } from '@angular/core';
import { GetAPIService } from '../../service/get-api.service';
import { PanierService } from '../../service/panier.service';

@Component({
  selector: 'app-avocat',
  templateUrl: './avocat.component.html',
  styleUrl: './avocat.component.css',
})
export class AvocatComponent implements OnInit {
  constructor(private get: GetAPIService, private Panier: PanierService) {}
  data: any[] = [];

  ngOnInit(): void {
    this.get.getAPIService().subscribe((contenue) => {
      this.data = contenue;
    });
  }

  add(value: any) {
    this.Panier.add(value);
  }
}
