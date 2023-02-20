import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class FinTipoServicioService {
  @Output() disparador: EventEmitter<any> = new EventEmitter();

constructor(private http: HttpClient) {

 }
public getTiposServicios(){
  const url=`http://localhost:8080/web/api/rest/v1/financiero/tiposervicio`;
  return this.http.get(url);
}
public getTiposServiciosById(tse_id:any){
  const url=`http://localhost:8080/web/api/rest/v1/financiero/tiposervicio/`+tse_id;
  return this.http.get(url);
}

public postTipoServicio(body:any){
  const url=`http://localhost:8080/web/api/rest/v1/financiero/tiposervicio`;
  return this.http.post(url,body);
}

public putTipoServicio(tse_id:any,body:any){
  const url=`http://localhost:8080/web/api/rest/v1/financiero/tiposervicio/`+tse_id;
  return this.http.put(url,body);
}
}
