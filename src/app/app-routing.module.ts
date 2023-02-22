import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinMontoComponent } from 'src/app/Financiero/components/finMonto/finMonto.component';
import { CtrUsuarioComponent } from 'src/app/Control/components/ctrUsuario/ctrUsuario.component';
import { LoginComponent } from './Core/Login/components/login.component';
import { MenuprincipalComponent } from './Core/MenuPrincipal/components/menuprincipal.component';


const routes: Routes = [
  { path:'',component: LoginComponent},
  { path:'menu',component: MenuprincipalComponent},
  { path:'montos',component: FinMontoComponent},
  { path: 'usuarios',component: CtrUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
