import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SenaraimuridguruPageRoutingModule } from './senaraimuridguru-routing.module';

import { SenaraimuridguruPage } from './senaraimuridguru.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SenaraimuridguruPageRoutingModule
  ],
  declarations: [SenaraimuridguruPage]
})
export class SenaraimuridguruPageModule {}
