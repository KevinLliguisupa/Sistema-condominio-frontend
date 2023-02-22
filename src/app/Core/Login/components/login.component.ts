import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { LoginService } from '../services/login.service';
import { NgFor } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Credentials } from 'src/app/Control/models/ctrUsuario.model';
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


  ) { }

  ngOnInit() {
  }

  login(form: NgForm){

    this.apiService.login(this.creds)
    .subscribe(response=>{
      this.router.navigate(['/menu']);
    })

  }

}
