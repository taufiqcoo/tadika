import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExaminationtabguruPageRoutingModule } from './examinationtabguru-routing.module';

import { ExaminationtabguruPage } from './examinationtabguru.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExaminationtabguruPageRoutingModule
  ],
  declarations: [ExaminationtabguruPage]
})
export class ExaminationtabguruPageModule {}
