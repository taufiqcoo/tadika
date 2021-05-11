import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoguruPageRoutingModule } from './infoguru-routing.module';

import { InfoguruPage } from './infoguru.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoguruPageRoutingModule
  ],
  declarations: [InfoguruPage]
})
export class InfoguruPageModule {}
