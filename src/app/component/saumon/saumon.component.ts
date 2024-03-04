import { Component, OnInit } from '@angular/core';
import { GetAPIService } from '../../service/get-api.service';

@Component({
  selector: 'app-saumon',
  templateUrl: './saumon.component.html',
  styleUrl: './saumon.component.css',
})
export class SaumonComponent implements OnInit {
  constructor(private get: GetAPIService) {}
  data: any[] = [];

  ngOnInit(): void {
    this.get.getAPIService().subscribe((contenue) => {
      this.data = contenue;
    });
  }
}
