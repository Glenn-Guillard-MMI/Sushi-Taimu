import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './component/header/header.component';
import { SectionIndexComponent } from './component/section-index/section-index.component';
import { SectionMenuComponent } from './component/section-menu/section-menu.component';
import { SaveursComponent } from './component/saveurs/saveurs.component';
import { AchatProduitComponent } from './component/achat-produit/achat-produit.component';
import { CategorieComponent } from './component/categorie/categorie.component';
import { PanierComponent } from './component/panier/panier.component';
import { BoissonComponent } from './component/boisson/boisson.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionIndexComponent,
    SectionMenuComponent,
    SaveursComponent,
    AchatProduitComponent,
    CategorieComponent,
    PanierComponent,
    BoissonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
