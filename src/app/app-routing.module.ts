import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinMontoComponent } from 'src/app/Financiero/components/finMonto/finMonto.component';
import { CtrUsuarioComponent } from 'src/app/Control/components/ctrUsuario/ctrUsuario.component';
import { LoginComponent } from './Core/Login/components/login.component';
import { MenuprincipalComponent } from './Core/MenuPrincipal/components/menuprincipal.component';
import { FinPagoComponent } from './Financiero/components/finPago/finPago.component';
import { FinDeudaPagoComponent } from './Financiero/components/finDeudaPago/finDeudaPago.component';
import { FinDeudaComponent } from './Financiero/components/finDeuda/finDeuda.component';

// { path:'',component: LoginComponent},

const routes: Routes = [
  { path:'',component: LoginComponent},
  { path:'menu',component: MenuprincipalComponent},
  { path:'montos',component: FinMontoComponent},
  { path:'cobros',component: FinPagoComponent},
  { path:'usuarios',component: CtrUsuarioComponent},
  { path:'cobros/nuevo',component: FinDeudaPagoComponent},
  { path:'reporte/inquilino',component: FinDeudaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
