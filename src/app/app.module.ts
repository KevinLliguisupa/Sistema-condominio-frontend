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

import { TableModule } from 'primeng/table';
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
import {DialogModule} from 'primeng/dialog';
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
import { CtrAnuncioComponent } from './Control/components/ctrAnuncio/ctrAnuncio.component';
import { CtrAsignacionComponent } from './Control/components/ctrAsignacion/ctrAsignacion.component';
import { CtrCasaComponent } from './Control/components/ctrCasa/ctrCasa.component';
import { CtrModuloComponent } from './Control/components/ctrModulo/ctrModulo.component';
import { CtrPerfilComponent } from './Control/components/ctrPerfil/ctrPerfil.component';
import { CtrReservacionComponent } from './Control/components/ctrReservacion/ctrReservacion.component';
import { CtrReunionComponent } from './Control/components/ctrReunion/ctrReunion.component';
import { CtrTipoAnuncioComponent } from './Control/components/ctrTipoAnuncio/ctrTipoAnuncio.component';
import { FinEgresosIncidenciasComponent } from './Financiero/components/finEgresosIncidencias/finEgresosIncidencias.component';
import { FinEgresosServiciosComponent } from './Financiero/components/finEgresosServicios/finEgresosServicios.component';
import { FinIngresosGastosMensualesComponent } from './Financiero/components/finIngresosGastosMensuales/finIngresosGastosMensuales.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';
import { ConfirmationService, MessageService } from 'primeng/api';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastModule } from 'primeng/toast';
import { CtrLugarComponent } from './Control/components/ctrLugar/ctrLugar.component';
import { FinTipoDeudaComponent } from './Financiero/components/finTipoDeuda/finTipoDeuda.component';
import { MenuPrincipalCondominoComponent } from './Core/MenuPrincipalCondomino/MenuPrincipalCondomino.component';
import { NavegacionCondominosComponent } from './Core/navegacionCondominos/navegacionCondominos.component';
import { MenuPrincipalSecretarioComponent } from './Core/MenuPrincipalSecretario/MenuPrincipalSecretario.component';
import { NavegacionSecretarioComponent } from './Core/navegacionSecretario/navegacionSecretario.component';
import { MenuPrincipalTesoreroComponent } from './Core/MenuPrincipalTesorero/MenuPrincipalTesorero.component';
import { NavegacionTesoreroComponent } from './Core/navegacionTesorero/navegacionTesorero.component';

@NgModule({

  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
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
    TabViewModule,
    ConfirmDialogModule,
    MessagesModule,
    NgbModule,
    ToastModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    MenuprincipalComponent,
    CtrAnuncioComponent,
    CtrAsignacionComponent,
    CtrCasaComponent,
    CtrModuloComponent,
    CtrPerfilComponent,
    CtrUsuarioComponent,
    CtrReservacionComponent,
    CtrReunionComponent,
    CtrTipoAnuncioComponent,
    FinDeudaComponent,
    FinDeudaPagoComponent,
    FinEgresosIncidenciasComponent,
    FinEgresosServiciosComponent,
    FinGastosComponent,
    FinIncidenciasComponent,
    FinIncidenciasSolucionadasComponent,
    FinIngresosComponent,
    FinIngresosGastosMensualesComponent,
    FinMontoComponent,
    FinPagoComponent,
    FinPagoServiciosComponent,
    FinReporteGeneralComponent,
    FinTipoDeudaComponent,
    FinTipoServicioComponent,
    NoFoundComponent,
    FinDeudaPagoComponent,
    FinDeudaComponent,
    NavegacionComponent,
    NoFoundComponent,
    MenuprincipalComponent,
    CtrAnuncioComponent,
    CtrTipoAnuncioComponent,
    CtrLugarComponent,
    CtrReunionComponent,
    CtrReservacionComponent,
    MenuPrincipalCondominoComponent,
    NavegacionCondominosComponent,
    MenuPrincipalSecretarioComponent,
    NavegacionSecretarioComponent,
    MenuPrincipalTesoreroComponent,
    NavegacionTesoreroComponent

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, 
    useClass: AuthInterceptor, multi: true,
  }, CurrencyPipe, ConfirmationService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
