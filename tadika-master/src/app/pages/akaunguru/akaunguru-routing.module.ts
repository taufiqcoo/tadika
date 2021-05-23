import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AkaunguruPage } from './akaunguru.page';

const routes: Routes = [
  {
    path: '',
    component: AkaunguruPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AkaunguruPageRoutingModule {}
