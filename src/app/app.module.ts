import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {CommonModule} from "@angular/common";
import {BoletoComponent} from './boleto/boleto.component';
import {RouterOutlet} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import { AppRoutingModule } from './app-routing.module';
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    BoletoComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    CommonModule,
    RouterOutlet,
    AppRoutingModule,
    MatOptionModule,
    MatSelectModule,
  ],
  providers: [RouterTestingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
