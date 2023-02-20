import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinMontoComponent } from 'src/app/Financiero/components/finMonto/finMonto.component';
import { CtrUsuarioComponent } from 'src/app/Control/components/ctrUsuario/ctrUsuario.component';
import { LoginComponent } from './Core/Login/components/login.component';
import { MenuprincipalComponent } from './Core/MenuPrincipal/components/menuprincipal.component';
import { FinTipoServicioComponent } from './Financiero/components/finTipoServicio/finTipoServicio.component';
import { FinPagoServiciosComponent } from './Financiero/components/finPagoServicios/finPagoServicios.component';
import { FinIncidenciasComponent } from './Financiero/components/finIncidencias/finIncidencias.component';
import { FinIncidenciasSolucionadasComponent } from './Financiero/components/finIncidenciasSolucionadas/finIncidenciasSolucionadas.component';
import { FinGastosComponent } from './Financiero/components/finGastos/finGastos.component';


const routes: Routes = [
  { path:'',component: LoginComponent},
  { path:'menu',component: MenuprincipalComponent},
  { path:'montos',component: FinMontoComponent},
  { path: 'usuarios',component: CtrUsuarioComponent},
  {path:'tiposervicio',component:FinTipoServicioComponent},
  {path:'pagoservicio',component:FinPagoServiciosComponent},
  {path:'incidenciasnosolucionadas',component:FinIncidenciasComponent},
  {path:'incidenciassolucionadas',component:FinIncidenciasSolucionadasComponent},
  {path:'gasto',component:FinGastosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
