import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinMontoComponent } from 'src/app/Financiero/components/finMonto/finMonto.component';
import { CtrUsuarioComponent } from 'src/app/Control/components/ctrUsuario/ctrUsuario.component';
import { LoginComponent } from './Core/Login/components/login.component';
import { MenuprincipalComponent } from './Core/MenuPrincipal/components/menuprincipal.component';
import { CtrAnuncioComponent } from './Control/components/ctrAnuncio/ctrAnuncio.component';
import { CtrReunionComponent } from './Control/components/ctrReunion/ctrReunion.component';
import { CtrReservacionComponent } from './Control/components/ctrReservacion/ctrReservacion.component';
import { CtrTipoAnuncioComponent } from './Control/components/ctrTipoAnuncio/ctrTipoAnuncio.component';
import { CtrLugarComponent } from './Control/components/ctrLugar/ctrLugar.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'menu', component: MenuprincipalComponent },
  { path: 'montos', component: FinMontoComponent },
  { path: 'usuarios', component: CtrUsuarioComponent },
  { path: 'anuncios', component: CtrAnuncioComponent },
  { path: 'tipos-anuncios', component: CtrTipoAnuncioComponent },
  { path: 'lugares', component: CtrLugarComponent },
  { path: 'reuniones', component: CtrReunionComponent },
  { path: 'reservaciones', component: CtrReservacionComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
