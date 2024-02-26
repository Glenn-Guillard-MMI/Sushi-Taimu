import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './component/produit/produit.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './component/header/header.component';
import { SectionIndexComponent } from './component/section-index/section-index.component';
import { SectionMenuComponent } from './component/section-menu/section-menu.component';

@NgModule({
  declarations: [AppComponent, ProduitComponent, HeaderComponent, SectionIndexComponent, SectionMenuComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
