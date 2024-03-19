import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionIndexComponent } from './component/section-index/section-index.component';
import { SectionMenuComponent } from './component/section-menu/section-menu.component';
import { SaveursComponent } from './component/saveurs/saveurs.component';
import { AchatProduitComponent } from './component/achat-produit/achat-produit.component';
import { CategorieComponent } from './component/categorie/categorie.component';
import { BoissonComponent } from './component/boisson/boisson.component';

const routes: Routes = [
  { path: '', component: SectionIndexComponent },
  { path: 'menu', component: SectionMenuComponent },
  { path: 'saveurs', component: SaveursComponent },
  { path: 'Mon-produit', component: AchatProduitComponent },
  { path: 'composition', component: CategorieComponent },
  { path: 'boisson', component: BoissonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
