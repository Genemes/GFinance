import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /*{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'consignado', loadChildren: './pages/consignado/consignado.module#ConsignadoPageModule' },
  { path: 'consorcio', loadChildren: './pages/consorcio/consorcio.module#ConsorcioPageModule' }*/
  {
    path: '',
    redirectTo: 'consignado',
    pathMatch: 'full'
  },
  {
    path: 'consignado',
    loadChildren: './pages/consignado/consignado.module#ConsignadoPageModule'
  },
  {
    path: 'consorcio',
    loadChildren: './pages/consorcio/consorcio.module#ConsorcioPageModule'
  },
  { 
    path: 'caixa',
    loadChildren: './pages/caixa/caixa.module#CaixaPageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
