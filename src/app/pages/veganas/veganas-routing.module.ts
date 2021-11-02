import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VeganasPage } from './veganas.page';

const routes: Routes = [
  {
    path: '',
    component: VeganasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VeganasPageRoutingModule {}
