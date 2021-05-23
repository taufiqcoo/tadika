import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SenaraianakPageRoutingModule } from './senaraianak-routing.module';

import { SenaraianakPage } from './senaraianak.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SenaraianakPageRoutingModule
  ],
  declarations: [SenaraianakPage]
})
export class SenaraianakPageModule {}
