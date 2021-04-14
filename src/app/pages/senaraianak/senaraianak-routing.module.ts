import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SenaraianakPage } from './senaraianak.page';

const routes: Routes = [
  {
    path: '',
    component: SenaraianakPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SenaraianakPageRoutingModule {}
