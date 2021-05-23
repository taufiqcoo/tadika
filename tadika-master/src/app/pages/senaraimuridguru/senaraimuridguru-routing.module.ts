import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SenaraimuridguruPage } from './senaraimuridguru.page';

const routes: Routes = [
  {
    path: '',
    component: SenaraimuridguruPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SenaraimuridguruPageRoutingModule {}
