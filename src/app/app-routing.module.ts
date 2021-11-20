import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
    
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'lanches',
    loadChildren: () => import('./pages/lanches/lanches.module').then( m => m.LanchesPageModule)
  },
  {
    path: 'saladas',
    loadChildren: () => import('./pages/saladas/saladas.module').then( m => m.SaladasPageModule)
  },
  {
    path: 'veganas',
    loadChildren: () => import('./pages/veganas/veganas.module').then( m => m.VeganasPageModule)
  },
  {
    path: 'massas',
    loadChildren: () => import('./pages/massas/massas.module').then( m => m.MassasPageModule)
  },
  {
    path: 'sobre',
    loadChildren: () => import('./pages/sobre/sobre.module').then( m => m.SobrePageModule)
  },
  {
    path: 'postar',
    loadChildren: () => import('./postar/postar.module').then( m => m.PostarPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule),
    canActivate: [AuthGuard]
  },
 
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'postdetails',
    loadChildren: () => import('./postdetails/postdetails.module').then( m => m.PostdetailsPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
