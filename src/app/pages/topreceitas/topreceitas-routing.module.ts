import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopreceitasPage } from './topreceitas.page';

const routes: Routes = [
  {
    path: '',
    component: TopreceitasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopreceitasPageRoutingModule {}
