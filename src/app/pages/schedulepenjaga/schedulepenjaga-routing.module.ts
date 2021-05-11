import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchedulepenjagaPage } from './schedulepenjaga.page';

const routes: Routes = [
  {
    path: '',
    component: SchedulepenjagaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchedulepenjagaPageRoutingModule {}
