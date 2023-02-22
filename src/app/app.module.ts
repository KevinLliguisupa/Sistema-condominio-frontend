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
import { FinPagoComponent } from './Financiero/components/finPago/finPago.component';
import { FinDeudaPagoComponent } from './Financiero/components/finDeudaPago/finDeudaPago.component';

import {TableModule} from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { FinTipoServicioComponent } from './Financiero/components/finTipoServicio/finTipoServicio.component';
import { FinPagoServiciosComponent } from './Financiero/components/finPagoServicios/finPagoServicios.component';
import { FinIncidenciasComponent } from './Financiero/components/finIncidencias/finIncidencias.component';
import { FinIncidenciasSolucionadasComponent } from './Financiero/components/finIncidenciasSolucionadas/finIncidenciasSolucionadas.component';
import { FinGastosComponent } from './Financiero/components/finGastos/finGastos.component';
import { FinIngresosComponent } from './Financiero/components/finIngresos/finIngresos.component';
import { FinReporteGeneralComponent } from './Financiero/components/finReporteGeneral/finReporteGeneral.component';
import { ChartModule } from 'primeng/chart';
import {CardModule} from 'primeng/card';
import {ToastModule} from 'primeng/toast';
import {DialogModule} from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DropdownModule} from 'primeng/dropdown';
import {InputNumberModule} from 'primeng/inputnumber';
import {PaginatorModule} from 'primeng/paginator';
import {PanelModule} from 'primeng/panel';
import {ToolbarModule} from 'primeng/toolbar';
import {InputTextModule} from 'primeng/inputtext';
import { CurrencyPipe } from '@angular/common';
import { FinDeudaComponent } from './Financiero/components/finDeuda/finDeuda.component';
import {TabViewModule} from 'primeng/tabview';
import * as Chart from 'chart.js';
import { NavegacionComponent } from './Core/navegacion/navegacion.component';
import { NoFoundComponent } from './Core/no-found/no-found.component';
import { MenuprincipalComponent } from './Core/MenuPrincipal/components/menuprincipal.component';

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
    ButtonModule,
    ChartModule,
    CardModule,
    ToastModule,
    DialogModule,
    ConfirmDialogModule,
    DropdownModule,
    InputNumberModule,
    PaginatorModule,
    PanelModule,
    CardModule,
    ToolbarModule,
    InputTextModule,
    TabViewModule
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
    FinIngresosComponent,
    FinReporteGeneralComponent,
    FinPagoComponent,
    FinDeudaPagoComponent,
    FinDeudaComponent,
    NavegacionComponent,
    NoFoundComponent,
    MenuprincipalComponent
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, 
    useClass: AuthInterceptor, multi: true,
  }, CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
