import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatguruPageRoutingModule } from './chatguru-routing.module';

import { ChatguruPage } from './chatguru.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatguruPageRoutingModule
  ],
  declarations: [ChatguruPage]
})
export class ChatguruPageModule {}
