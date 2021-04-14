import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AkaunguruPageRoutingModule } from './akaunguru-routing.module';

import { AkaunguruPage } from './akaunguru.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AkaunguruPageRoutingModule
  ],
  declarations: [AkaunguruPage]
})
export class AkaunguruPageModule {}
