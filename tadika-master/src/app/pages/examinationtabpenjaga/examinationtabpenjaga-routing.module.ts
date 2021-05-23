import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExaminationtabpenjagaPage } from './examinationtabpenjaga.page';

const routes: Routes = [
  {
    path: '',
    component: ExaminationtabpenjagaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExaminationtabpenjagaPageRoutingModule {}
