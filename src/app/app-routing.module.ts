import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainV1Component } from './main-v1/main-v1.component';
import { InitComponent } from './init/init.component';
import { MainV2Component } from './main-v2/main-v2.component';

const routes: Routes = [
  {
    path: '',
    component: InitComponent
  },
  {
    path: 'v1',
    component: MainV1Component
  },
  {
    path: 'v2',
    component: MainV2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
