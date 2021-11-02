import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MassasPageRoutingModule } from './massas-routing.module';

import { MassasPage } from './massas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MassasPageRoutingModule
  ],
  declarations: [MassasPage]
})
export class MassasPageModule {}
