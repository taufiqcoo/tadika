import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScheduleguruPage } from './scheduleguru.page';

const routes: Routes = [
  {
    path: '',
    component: ScheduleguruPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScheduleguruPageRoutingModule {}
