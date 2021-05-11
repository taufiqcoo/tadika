import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsguruPage } from './tabsguru.page';

const routes: Routes = [
  {
    path: '',
    component: TabsguruPage,
    children:[{
      path: 'senaraimuridguru',
      loadChildren: () =>
      import('../senaraimuridguru/senaraimuridguru.module').then(m => m.SenaraimuridguruPageModule),
    },
    {
      path: 'chatguru',
      loadChildren: () => import('../chatguru/chatguru.module').then( m => m.ChatguruPageModule)
    },
    {
      path: 'akaunguru',
      loadChildren: () =>
      import('../akaunguru/akaunguru.module').then(m => m.AkaunguruPageModule),
    }, 
    {
      path: 'infoguru',
      loadChildren: () =>
      import('../infoguru/infoguru.module').then(m => m.InfoguruPageModule),
    }, 
   
    {
    path: '',
      redirectTo: 'senaraimuridguru',
      pathMatch: 'full',
    },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsguruPageRoutingModule {}
