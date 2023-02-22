import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { LoginService } from '../services/login.service';
import { NgFor } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Credentials } from 'src/app/Control/models/ctrUsuario.model';
import { objectJWT } from 'src/app/Control/models/ctrUsuario.model';
import { CtrUsuarioService } from 'src/app/Control/services/ctrUsuario/ctrUsuario.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  creds: Credentials = {
    usuCedula: "",
    usuClave: ""
  };




  constructor(
    private router: Router,
    private apiService: LoginService,
    private ctrUsuarioService:CtrUsuarioService

  ) { }

  ngOnInit() {
  }

  login(form: NgForm){

    this.apiService.login(this.creds)
    .subscribe(response=>{
      var objeJWT:objectJWT =this.apiService.getObjJWT();
      var cedulaLogin=objeJWT.usuCedula;

      if(cedulaLogin=='1005003171'){
        this.router.navigate(['/menu']);
        
      }else if(cedulaLogin=='0850055237'){
        this.router.navigate(['/menucondomino']);
      }
      else if(cedulaLogin=='1728848373'){
        this.router.navigate(['/menutesorero']);
      }
      else if(cedulaLogin=='0102116381'){
        this.router.navigate(['/menusecretario']);
      }

      
    })

  }

}
