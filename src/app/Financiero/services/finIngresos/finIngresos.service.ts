import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FinIngresosService {
@Output() disparador: EventEmitter<any> = new EventEmitter();
constructor(private http: HttpClient) { }


public getAllIngresos(){
  const url=`http://localhost:8080/web/api/rest/v1/financiero/ingresodinero`;
  return this.http.get(url);
}
}
