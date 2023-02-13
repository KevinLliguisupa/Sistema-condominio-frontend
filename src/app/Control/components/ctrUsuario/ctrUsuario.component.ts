import { Component, OnInit } from '@angular/core';
import { CtrUsuarioModel } from '../../models/ctrUsuario.model';
import { CtrUsuarioService } from '../../services/ctrUsuario/ctrUsuario.service';


@Component({
  selector: 'app-ctrUsuario',
  templateUrl: './ctrUsuario.component.html',
  styleUrls: ['./ctrUsuario.component.css']
})
export class CtrUsuarioComponent implements OnInit {

  usuarios?: CtrUsuarioModel[];

  constructor(
    private usuarioService: CtrUsuarioService
  ) { }

  ngOnInit(): void {
    console.log('form value');

    this.usuarioService.getUsuarios()
    .subscribe((response:any)=>{
      this.usuarios=response.content;
    }, (error) => console.warn(error)
    )


}
}
