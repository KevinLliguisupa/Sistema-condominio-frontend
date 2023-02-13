import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CtrUsuarioComponent } from 'src/app/Control/components/ctrUsuario/ctrUsuario.component';
import { LoginComponent } from '../components/login.component';
import { MenuprincipalComponent } from '../../MenuPrincipal/components/menuprincipal.component';
import { AuthGuard } from 'src/app/helpers/auth.guard';

const routes: Routes = [

  //{
   // path: '',
   // component: LoginComponent,
   // canActivate: [AuthGuard]
 // }
  //,
  {
    path: 'usuarios',
    component: CtrUsuarioComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
