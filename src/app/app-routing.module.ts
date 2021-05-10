import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo, AngularFireAuthGuard } from
 '@angular/fire/auth-guard';




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
    path: 'tabs',
    canActivate: [AngularFireAuthGuard],
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'tabsguru',
    canActivate: [AngularFireAuthGuard],
    loadChildren: () => import('./pages/tabsguru/tabsguru.module').then( m => m.TabsguruPageModule)
  },
  {
    path: 'home',
   
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  
 

 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
