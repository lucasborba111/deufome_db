import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MassasPage } from './massas.page';

const routes: Routes = [
  {
    path: '',
    component: MassasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MassasPageRoutingModule {}
