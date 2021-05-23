import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodopenjagaPage } from './todopenjaga.page';

const routes: Routes = [
  {
    path: '',
    component: TodopenjagaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodopenjagaPageRoutingModule {}
