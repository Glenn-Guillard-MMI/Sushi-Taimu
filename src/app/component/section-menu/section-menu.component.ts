import { Component } from '@angular/core';

@Component({
  selector: 'app-section-menu',
  templateUrl: './section-menu.component.html',
  styleUrl: './section-menu.component.css',
})
export class SectionMenuComponent {
  public saumon() {
    console.log('Please select');
  }
}
