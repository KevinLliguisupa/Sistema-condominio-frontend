import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { CtrUsuarioModel } from '../../models/ctrUsuario.model';

@Injectable({
  providedIn: 'root'
})
export class CtrUsuarioService {
  @Output() disparador: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) { }


  public getUsuarios() {
    return this.http.get<CtrUsuarioModel[]>('http://localhost:8080/web/api/rest/v1/control/usuario/all');
  }

}
