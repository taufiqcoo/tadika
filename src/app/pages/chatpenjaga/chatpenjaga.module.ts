import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatpenjagaPageRoutingModule } from './chatpenjaga-routing.module';

import { ChatpenjagaPage } from './chatpenjaga.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatpenjagaPageRoutingModule
  ],
  declarations: [ChatpenjagaPage]
})
export class ChatpenjagaPageModule {}
