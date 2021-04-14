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
      path: 'akaunguru',
      loadChildren: () =>
      import('../akaunguru/akaunguru.module').then(m => m.AkaunguruPageModule),
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
