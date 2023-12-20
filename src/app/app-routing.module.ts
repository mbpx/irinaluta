import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Display3D } from './display3d/display3d.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
