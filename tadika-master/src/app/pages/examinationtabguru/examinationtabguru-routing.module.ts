import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExaminationtabguruPage } from './examinationtabguru.page';

const routes: Routes = [
  {
    path: '',
    component: ExaminationtabguruPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExaminationtabguruPageRoutingModule {}
