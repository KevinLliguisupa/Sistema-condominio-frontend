import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FinDeudaPagoService {
  @Output() disparador: EventEmitter<any> = new EventEmitter();

  urlPath: string = "http://localhost:8080/web/api/rest/v1/financiero/cobros/deudas";

  constructor(private http: HttpClient) { }

  public getDeudasPendientesByInquilino(cedulaInquilino: string, size: number, page: number) {
    return this.http.get(this.urlPath + "/usuario/" + cedulaInquilino +
      "/pendientes?pagination=true&size=" + size + "&page=" + page)
  }

}
