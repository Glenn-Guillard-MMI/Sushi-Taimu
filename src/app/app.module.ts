import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './component/produit/produit.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './component/header/header.component';
import { SectionIndexComponent } from './component/section-index/section-index.component';
import { SectionMenuComponent } from './component/section-menu/section-menu.component';
import { SaumonComponent } from './component/saumon/saumon.component';
import { ThonComponent } from './component/thon/thon.component';
import { AvocatComponent } from './component/avocat/avocat.component';
import { SaveursComponent } from './component/saveurs/saveurs.component';
import { AchatProduitComponent } from './component/achat-produit/achat-produit.component';
import { CategorieComponent } from './component/categorie/categorie.component';
import { PanierComponent } from './component/panier/panier.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    HeaderComponent,
    SectionIndexComponent,
    SectionMenuComponent,
    SaumonComponent,
    ThonComponent,
    AvocatComponent,
    SaveursComponent,
    AchatProduitComponent,
    CategorieComponent,
    PanierComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
