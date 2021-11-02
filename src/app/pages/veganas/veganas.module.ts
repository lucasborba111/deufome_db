import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VeganasPageRoutingModule } from './veganas-routing.module';

import { VeganasPage } from './veganas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VeganasPageRoutingModule
  ],
  declarations: [VeganasPage]
})
export class VeganasPageModule {}
