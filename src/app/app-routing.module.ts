import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

const routes:Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'index'},
  {
    path: 'index',
    loadChildren: () => import('./index/index.module').then(m=> m.IndexModule)
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
