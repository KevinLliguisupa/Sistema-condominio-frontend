import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class FinTipoDeudaService {
  urlPath:string="http://ec2-54-198-186-75.compute-1.amazonaws.com/web/api/rest/v1/financiero/cobros/tipos-deuda";


constructor(private http:HttpClient) { }

public getAllTiposDeuda(){
  return this.http.get(this.urlPath)
}

}
