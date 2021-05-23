import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DaftaranakPageRoutingModule } from './daftaranak-routing.module';

import { DaftaranakPage } from './daftaranak.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DaftaranakPageRoutingModule
  ],
  declarations: [DaftaranakPage]
})
export class DaftaranakPageModule {}
