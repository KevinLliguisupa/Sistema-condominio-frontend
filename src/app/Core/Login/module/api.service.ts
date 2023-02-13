import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CtrUsuarioModel,Credentials } from 'src/app/Control/models/ctrUsuario.model';
import { HtmlParser } from '@angular/compiler';
import { map } from 'rxjs/operators';

@Injectable(
  {
    providedIn: 'root'
  })

export class ApiService {
  constructor(
    private http: HttpClient
  ) { }

  getUsuarios(): Observable<CtrUsuarioModel[]> {
    return this.http.get<CtrUsuarioModel[]>('http://localhost:8080/web/api/rest/v1/control/usuario/all');
  }

  login(creds: Credentials) {
    return this.http.post('http://localhost:8080/web/api/rest/v1/login', creds, {
      observe: 'response'
    }).pipe(map((response: HttpResponse<any>)=>{
      const body = response.body;
      const headers = response.headers;

      const bearerToken= headers.get('Authorization')!;
      const token = bearerToken.replace('Bearer ','');

      localStorage.setItem('token',token);

      return body;

    }))
  }

  getToken(){
    return localStorage.getItem('token');

  }

}
