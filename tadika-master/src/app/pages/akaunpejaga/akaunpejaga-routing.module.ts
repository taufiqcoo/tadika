import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AkaunpejagaPage } from './akaunpejaga.page';

const routes: Routes = [
  {
    path: '',
    component: AkaunpejagaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AkaunpejagaPageRoutingModule {}
