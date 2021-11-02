import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostarPage } from './postar.page';

const routes: Routes = [
  {
    path: '',
    component: PostarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostarPageRoutingModule {}
