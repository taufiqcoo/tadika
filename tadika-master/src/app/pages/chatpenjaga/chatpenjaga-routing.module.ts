import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatpenjagaPage } from './chatpenjaga.page';

const routes: Routes = [
  {
    path: '',
    component: ChatpenjagaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatpenjagaPageRoutingModule {}
