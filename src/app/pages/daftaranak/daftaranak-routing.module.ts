import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DaftaranakPage } from './daftaranak.page';

const routes: Routes = [
  {
    path: '',
    component: DaftaranakPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DaftaranakPageRoutingModule {}
