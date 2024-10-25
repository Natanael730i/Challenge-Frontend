import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BoletoComponent} from "./boleto.component";

const routes: Routes = [
  {path: '/boleto/list', component: BoletoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoletoRoutingModule { }
