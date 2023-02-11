import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './login-routing.module';
import { LoginComponent } from '../components/login.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [LoginComponent],
  providers: [],
  bootstrap: [LoginComponent]
})
export class LoginModule { }
