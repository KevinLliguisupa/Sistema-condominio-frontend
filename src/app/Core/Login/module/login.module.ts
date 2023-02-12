import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './login-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';

import { LoginComponent } from '../components/login.component';
import { FinMontoComponent } from 'src/app/Financiero/components/finMonto/finMonto.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule,
  ],
  declarations: [
    LoginComponent,
    FinMontoComponent
  ],
  providers: [],
  bootstrap: [
    LoginComponent
  ]
})
export class LoginModule { }
