import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FinDeudaPagoService {
  @Output() disparador: EventEmitter<any> = new EventEmitter();

  urlPath: string = "http://ec2-54-198-186-75.compute-1.amazonaws.com/web/api/rest/v1/financiero/cobros/deudas";

  constructor(private http: HttpClient) { }

  public getDeudasPendientesByInquilino(cedulaInquilino: string, size: number, page: number) {
    const endpoint = this.urlPath + "/usuario/" + cedulaInquilino +
      "/pendientes?pagination=true&size=" + size + "&page=" + page;

    return this.http.get(endpoint);
  }

  public getDeudaByInquilino(cedulaInquilino: string, size: number, page: number) {
    const endpoint = this.urlPath + "/usuario/" + cedulaInquilino +
      "?pagination=true&size=" + size + "&page=" + page;

    return this.http.get(endpoint);
  }

  public getValorAdeudado(cedulaInquilino: string) {
    const endpoint = this.urlPath + "/usuario/" + cedulaInquilino + "/adeudado";

    return this.http.get(endpoint);
  }

  public getProximaDeuda(cedulaInquilino: string) {
    const endpoint = this.urlPath + "/usuario/" + cedulaInquilino + "/proxima";

    return this.http.get(endpoint);
  }

}
