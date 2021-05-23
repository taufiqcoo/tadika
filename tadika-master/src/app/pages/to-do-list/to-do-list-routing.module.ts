import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToDoListPage } from './to-do-list.page';

const routes: Routes = [
  {
    path: '',
    component: ToDoListPage
  },
  {
    path: 'add-new-task',
    loadChildren: () => import('./add-new-task/add-new-task.module').then( m => m.AddNewTaskPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToDoListPageRoutingModule {}
