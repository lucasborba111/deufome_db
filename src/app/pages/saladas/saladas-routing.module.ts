import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaladasPage } from './saladas.page';

const routes: Routes = [
  {
    path: '',
    component: SaladasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaladasPageRoutingModule {}
