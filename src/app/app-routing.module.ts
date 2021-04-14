import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'introduction',
    pathMatch: 'full'
  },
  {
    path: 'introduction',
    loadChildren: () => import('./pages/introduction/introduction.module').then( m => m.IntroductionPageModule)
  }, 
  {
    path: 'penjaga',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'tabsguru',
    loadChildren: () => import('./pages/tabsguru/tabsguru.module').then( m => m.TabsguruPageModule)
  },
  {
    path: 'daftaranak',
    loadChildren: () => import('./pages/daftaranak/daftaranak.module').then( m => m.DaftaranakPageModule)
  },
  {
    path: 'senaraianak',
    loadChildren: () => import('./pages/senaraianak/senaraianak.module').then( m => m.SenaraianakPageModule)
  },
  {
    path: 'akaunpejaga',
    loadChildren: () => import('./pages/akaunpejaga/akaunpejaga.module').then( m => m.AkaunpejagaPageModule)
  },
  {
    path: 'senaraimuridguru',
    loadChildren: () => import('./pages/senaraimuridguru/senaraimuridguru.module').then( m => m.SenaraimuridguruPageModule)
  },
  {
    path: 'akaunguru',
    loadChildren: () => import('./pages/akaunguru/akaunguru.module').then( m => m.AkaunguruPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
