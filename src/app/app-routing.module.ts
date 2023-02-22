import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinMontoComponent } from 'src/app/Financiero/components/finMonto/finMonto.component';
import { CtrUsuarioComponent } from 'src/app/Control/components/ctrUsuario/ctrUsuario.component';
import { LoginComponent } from './Core/Login/components/login.component';
import { MenuprincipalComponent } from './Core/MenuPrincipal/components/menuprincipal.component';
import { AuthGuard } from './helpers/auth.guard';
import { FinTipoServicioComponent } from './Financiero/components/finTipoServicio/finTipoServicio.component';
import { FinReporteGeneralComponent } from './Financiero/components/finReporteGeneral/finReporteGeneral.component';
import { FinPagoServiciosComponent } from './Financiero/components/finPagoServicios/finPagoServicios.component';
import  {FinIngresosComponent} from './Financiero/components/finIngresos/finIngresos.component';
import { FinIncidenciasSolucionadasComponent } from './Financiero/components/finIncidenciasSolucionadas/finIncidenciasSolucionadas.component';
import { FinIncidenciasComponent } from './Financiero/components/finIncidencias/finIncidencias.component';
import { CtrAnuncioComponent } from './Control/components/ctrAnuncio/ctrAnuncio.component';
import { CtrAsignacionComponent } from './Control/components/ctrAsignacion/ctrAsignacion.component';
import { CtrCasaComponent } from './Control/components/ctrCasa/ctrCasa.component';
import { CtrModuloComponent } from './Control/components/ctrModulo/ctrModulo.component';
import { CtrPerfilComponent } from './Control/components/ctrPerfil/ctrPerfil.component';
import { CtrReservacionComponent } from './Control/components/ctrReservacion/ctrReservacion.component';
import { CtrReunionComponent } from './Control/components/ctrReunion/ctrReunion.component';
import { CtrTipoAnuncioComponent } from './Control/components/ctrTipoAnuncio/ctrTipoAnuncio.component';
import { FinDeudaComponent } from './Financiero/components/finDeuda/finDeuda.component';
import { FinDeudaPagoComponent } from './Financiero/components/finDeudaPago/finDeudaPago.component';
import { FinEgresosIncidenciasComponent } from './Financiero/components/finEgresosIncidencias/finEgresosIncidencias.component';
import { FinEgresosServiciosComponent } from './Financiero/components/finEgresosServicios/finEgresosServicios.component';
import { FinGastosComponent } from './Financiero/components/finGastos/finGastos.component';
import { FinIngresosGastosMensualesService } from './Financiero/services/finIngresosGastosMensuales/finIngresosGastosMensuales.service';
import { FinPagoComponent } from './Financiero/components/finPago/finPago.component';
import { NoFoundComponent } from './Core/no-found/no-found.component';
import { FinTipoDeudaComponent } from './Financiero/components/finTipoDeuda/finTipoDeuda.component';
import { FinIngresosGastosMensualesComponent } from './Financiero/components/finIngresosGastosMensuales/finIngresosGastosMensuales.component';

const routes: Routes = [
  { path:'',component: LoginComponent},
  { path:'menu',component: MenuprincipalComponent, canActivate:[AuthGuard]},
  { path:'anuncios',component:CtrAnuncioComponent, canActivate:[AuthGuard]},
  { path:'asignaciones',component:CtrAsignacionComponent, canActivate:[AuthGuard]},
  {path:'casas',component:CtrCasaComponent,canActivate:[AuthGuard]},
  {path:'modulos',component:CtrModuloComponent, canActivate:[AuthGuard]},
  {path:'perfiles', component:CtrPerfilComponent,canActivate:[AuthGuard]},
  { path: 'usuarios',component: CtrUsuarioComponent , canActivate:[AuthGuard]},
  {path:'reservaciones',component:CtrReservacionComponent,canActivate:[AuthGuard]},
  {path:'reuniones',component:CtrReunionComponent,canActivate:[AuthGuard]},
  {path:'tipoanuncios', component:CtrTipoAnuncioComponent, canActivate:[AuthGuard]},
  {path:'reporte/inquilino',component:FinDeudaComponent, canActivate:[AuthGuard]},
  {path:'cobros/nuevo',component:FinDeudaPagoComponent,  canActivate:[AuthGuard]},
  {path:'egresosincidencias',component:FinEgresosIncidenciasComponent,  canActivate:[AuthGuard]},
  {path:'egresosservicios',component:FinEgresosServiciosComponent,  canActivate:[AuthGuard]},
  {path:'gastos',component:FinGastosComponent, canActivate:[AuthGuard]},
  { path :'incidenciasnosolucionadas',component:FinIncidenciasComponent,canActivate:[AuthGuard]  },
  { path:'incidenciassolucionadas',component:FinIncidenciasSolucionadasComponent,canActivate:[AuthGuard] },
  { path:'ingresos',component:FinIngresosComponent,canActivate:[AuthGuard] },
  {path:'ingresosgastos',component:FinIngresosGastosMensualesComponent,canActivate:[AuthGuard] },
  { path:'montos',component: FinMontoComponent , canActivate:[AuthGuard]},
  {path:'cobros',component:FinPagoComponent, canActivate:[AuthGuard]},
  { path:'pagoservicios',component:FinPagoServiciosComponent,canActivate:[AuthGuard]},
  { path:'reportegeneral',component:FinReporteGeneralComponent,canActivate:[AuthGuard]},
  {path:'tiposdeudas',component:FinTipoDeudaComponent, canActivate:[AuthGuard]},
  { path:'tiposservicios',component:FinTipoServicioComponent, canActivate:[AuthGuard]},
  { path:'**',component: NoFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
