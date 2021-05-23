import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScheduleguruPageRoutingModule } from './scheduleguru-routing.module';

import { ScheduleguruPage } from './scheduleguru.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScheduleguruPageRoutingModule
  ],
  declarations: [ScheduleguruPage]
})
export class ScheduleguruPageModule {}
