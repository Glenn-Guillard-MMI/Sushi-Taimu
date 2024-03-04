import { Component, OnInit } from '@angular/core';
import { GetAPIService } from '../../service/get-api.service';
import { PanierService } from '../../service/panier.service';

@Component({
  selector: 'app-thon',
  templateUrl: './thon.component.html',
  styleUrl: './thon.component.css',
})
export class ThonComponent implements OnInit {
  constructor(private get: GetAPIService, private Panier: PanierService) {}
  data: any[] = [];

  ngOnInit(): void {
    this.get.getAPIService().subscribe((contenue) => {
      this.data = contenue;
    });
  }

  add(value: any): void {
    this.Panier.add(value);
  }
}
