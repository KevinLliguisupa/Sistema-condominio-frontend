import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';
import { FinMontoComponent } from 'src/app/Financiero/components/finMonto/finMonto.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptor } from 'src/app/helpers/auth.interceptor';
import { CtrUsuarioComponent } from 'src/app/Control/components/ctrUsuario/ctrUsuario.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './Core/Login/components/login.component';

import {TableModule} from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { FinTipoServicioComponent } from './Financiero/components/finTipoServicio/finTipoServicio.component';
import { FinPagoServiciosComponent } from './Financiero/components/finPagoServicios/finPagoServicios.component';
import { FinIncidenciasComponent } from './Financiero/components/finIncidencias/finIncidencias.component';
import { FinIncidenciasSolucionadasComponent } from './Financiero/components/finIncidenciasSolucionadas/finIncidenciasSolucionadas.component';
import { FinGastosComponent } from './Financiero/components/finGastos/finGastos.component';
import { FinIngresosComponent } from './Financiero/components/finIngresos/finIngresos.component';

@NgModule({

  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule,
    BrowserAnimationsModule,
    TableModule,
    ButtonModule
  ],
  declarations: [
    AppComponent,
    FinMontoComponent,
    CtrUsuarioComponent,
    LoginComponent,
    FinTipoServicioComponent,
    FinPagoServiciosComponent,
    FinIncidenciasComponent,
    FinIncidenciasSolucionadasComponent,
    FinGastosComponent,
    FinIngresosComponent
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
