import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

const routes:Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'boleto'},
  {
    path: 'boleto',
    loadChildren: () => import('./boleto/boleto.module').then(m=> m.BoletoModule)
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
