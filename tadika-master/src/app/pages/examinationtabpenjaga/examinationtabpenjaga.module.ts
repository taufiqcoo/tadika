import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExaminationtabpenjagaPageRoutingModule } from './examinationtabpenjaga-routing.module';

import { ExaminationtabpenjagaPage } from './examinationtabpenjaga.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExaminationtabpenjagaPageRoutingModule
  ],
  declarations: [ExaminationtabpenjagaPage]
})
export class ExaminationtabpenjagaPageModule {}
