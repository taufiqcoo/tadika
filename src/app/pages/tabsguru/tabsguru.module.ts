import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsguruPageRoutingModule } from './tabsguru-routing.module';

import { TabsguruPage } from './tabsguru.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsguruPageRoutingModule
  ],
  declarations: [TabsguruPage]
})
export class TabsguruPageModule {}
