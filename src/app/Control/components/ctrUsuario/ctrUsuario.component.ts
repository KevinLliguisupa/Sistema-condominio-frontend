import { Component, OnInit } from '@angular/core';
import { CtrUsuarioModel } from '../../models/ctrUsuario.model';
import { ApiService } from 'src/app/Core/Login/module/api.service';


@Component({
  selector: 'app-ctrUsuario',
  templateUrl: './ctrUsuario.component.html',
  styleUrls: ['./ctrUsuario.component.css']
})
export class CtrUsuarioComponent implements OnInit {

  usuarios?: CtrUsuarioModel[];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    console.log('form value');

    this.apiService.getUsuarios()
    .subscribe((response:any)=>{
      this.usuarios=response.content;
    }, (error) => console.warn(error)
    )


}
}
