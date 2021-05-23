import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodopenjagaPageRoutingModule } from './todopenjaga-routing.module';

import { TodopenjagaPage } from './todopenjaga.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodopenjagaPageRoutingModule
  ],
  declarations: [TodopenjagaPage]
})
export class TodopenjagaPageModule {}
