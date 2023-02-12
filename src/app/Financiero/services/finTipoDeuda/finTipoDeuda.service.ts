import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class FinTipoDeudaService {
  urlPath:string="http://localhost:8080/web/api/rest/v1/financiero/cobros/tipos-deuda";


constructor(private http:HttpClient) { }

public getAllTiposDeuda(){
  return this.http.get(this.urlPath)
}

}
