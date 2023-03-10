import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../Login/services/login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menuprincipal',
  templateUrl: './menuprincipal.component.html',
  styleUrls: ['./menuprincipal.component.css']
})
export class MenuprincipalComponent implements OnInit {

  constructor(
    private router : Router,
    private rol : LoginService,
  ) {
   }
  ngOnInit() {
  }

 register(form: NgForm){
      this.router.navigate(['/usuarios']);
    }

  salir(form: NgForm){
    this.router.navigate(['/menu']);

  }


}
