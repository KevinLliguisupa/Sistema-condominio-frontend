import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { CtrUsuarioModel, Credentials, CredentialsRol,objectJWT } from 'src/app/Control/models/ctrUsuario.model';
import { HtmlParser } from '@angular/compiler';
import { catchError, map } from 'rxjs/operators';
import { JwtModule } from "@auth0/angular-jwt";
import * as jwt from 'jsonwebtoken';
import * as jwt_decode from 'jwt-decode';
@Injectable(
  {
    providedIn: 'root'
  })

export class LoginService {


  constructor(
    private http: HttpClient,


  ) { }



  // getUsuarios(): Observable<CtrUsuarioModel[]> {
  //   return this.http.get<CtrUsuarioModel[]>('http://localhost:8080/web/api/rest/v1/control/usuario/all');
  // }



  login(creds: Credentials) {
    return this.http.post('http://ec2-54-198-186-75.compute-1.amazonaws.com/web/api/rest/v1/login', creds, {
      observe: 'response'
    }).pipe(map((response: HttpResponse<any>) => {
      const body = response.body;
      const headers = response.headers;
      const bearerToken = headers.get('Authorization')!;
      const token = bearerToken.replace('Bearer ', '');
      localStorage.setItem('token', token);
    //  const m=jwt;
      var c= localStorage.getItem('token')!;
      var decodedHeader: string[] = jwt_decode.default(c)!;
      const ultimoElemento: string = decodedHeader[decodedHeader.length - 1]!;
      console.log("a"+ultimoElemento); // Salida: "naranja"
      console.log(decodedHeader);

   //   const decodedToken = jwt.decode(token);
    //  const payload = decodedToken;
      return body;

    }))
  }

private saveToken(token:string):void{

}


  getObjJWT():objectJWT{
    var c= localStorage.getItem('token')!;
    var a: objectJWT = jwt_decode.default(c);
    return a;
  }

  logout():void{
    return localStorage.removeItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }



}
