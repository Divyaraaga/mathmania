import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo:'game',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home-screen/home-screen.module').then( m => m.HomeScreenPageModule)
  },
  {
    path: 'home2',
    loadChildren: () => import('./old-home/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'game',
    loadChildren: () => import('./game/game-screen/game-screen.module').then( m => m.GameScreenPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
