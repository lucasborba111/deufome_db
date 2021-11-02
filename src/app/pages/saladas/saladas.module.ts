import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaladasPageRoutingModule } from './saladas-routing.module';

import { SaladasPage } from './saladas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaladasPageRoutingModule
  ],
  declarations: [SaladasPage]
})
export class SaladasPageModule {}
