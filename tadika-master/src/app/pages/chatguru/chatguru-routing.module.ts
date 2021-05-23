import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatguruPage } from './chatguru.page';

const routes: Routes = [
  {
    path: '',
    component: ChatguruPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatguruPageRoutingModule {}
