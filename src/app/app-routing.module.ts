import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionIndexComponent } from './component/section-index/section-index.component';
import { SectionMenuComponent } from './component/section-menu/section-menu.component';
import { ProduitComponent } from './component/produit/produit.component';
import { SaumonComponent } from './component/saumon/saumon.component';
import { ThonComponent } from './component/thon/thon.component';
import { AvocatComponent } from './component/avocat/avocat.component';
import { SaveursComponent } from './component/saveurs/saveurs.component';

const routes: Routes = [
  { path: '', component: SectionIndexComponent },
  { path: 'menu', component: SectionMenuComponent },
  { path: 'produit', component: ProduitComponent },
  { path: 'saumon', component: SaumonComponent },
  { path: 'thon', component: ThonComponent },
  { path: 'avocat', component: AvocatComponent },
  { path: 'saveurs', component: SaveursComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
