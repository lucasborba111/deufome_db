import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostarPageRoutingModule } from './postar-routing.module';

import { PostarPage } from './postar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostarPageRoutingModule
  ],
  declarations: [PostarPage]
})
export class PostarPageModule {}
