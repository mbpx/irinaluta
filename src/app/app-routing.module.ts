import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitComponent } from './init/init.component';


const routes: Routes = [
  {
    path: '',
    component: InitComponent
  },
  {
    path: 'v1',
    loadChildren: () => import('./v1/v1.module').then(m => m.V1Module)
  },
  {
    path: 'v0',
    loadChildren: () => import('./v2/v2.module').then(m => m.V2Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
