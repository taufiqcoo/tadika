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
      path: 'senaraianak',
      loadChildren: () =>
      import('../senaraianak/senaraianak.module').then(m => m.SenaraianakPageModule),
    },
    {
      path: 'senaraianak/:id',
      loadChildren: () =>
      import('../senaraianak/senaraianak.module').then(m => m.SenaraianakPageModule),
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
