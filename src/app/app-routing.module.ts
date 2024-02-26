import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionIndexComponent } from './component/section-index/section-index.component';
import { SectionMenuComponent } from './component/section-menu/section-menu.component';

const routes: Routes = [
  {path: 'index', component: SectionIndexComponent},
  {path: 'menu', component: SectionMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
