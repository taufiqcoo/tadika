import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchedulepenjagaPageRoutingModule } from './schedulepenjaga-routing.module';

import { SchedulepenjagaPage } from './schedulepenjaga.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchedulepenjagaPageRoutingModule
  ],
  declarations: [SchedulepenjagaPage]
})
export class SchedulepenjagaPageModule {}
