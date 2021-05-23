import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
      children:[{
      path: 'daftaranak',
      loadChildren: () =>
      import('../daftaranak/daftaranak.module').then(m => m.DaftaranakPageModule),
    },
   
    {
      path: 'akaunpenjaga',
      loadChildren: () =>
      import('../akaunpejaga/akaunpejaga.module').then(m => m.AkaunpejagaPageModule),
    },
    {
      path: 'chatpenjaga',
      loadChildren: () => import('../chatpenjaga/chatpenjaga.module').then( m => m.ChatpenjagaPageModule)
    },
    {
      path: 'examination',
      loadChildren: () => import('../examination/examination.module').then( m => m.ExaminationPageModule)
    },
    {
      path: 'senaraianak',
      loadChildren: () => import('../senaraianak/senaraianak.module').then( m => m.SenaraianakPageModule)
    },
    {
      path: 'todopenjaga',
      loadChildren: () => import('../todopenjaga/todopenjaga.module').then( m => m.TodopenjagaPageModule)
    },
    
    {
      path: '',
      redirectTo: 'senaraianak',
      pathMatch: 'full',
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
