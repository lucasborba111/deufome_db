import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopreceitasPageRoutingModule } from './topreceitas-routing.module';

import { TopreceitasPage } from './topreceitas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopreceitasPageRoutingModule
  ],
  declarations: [TopreceitasPage]
})
export class TopreceitasPageModule {}
