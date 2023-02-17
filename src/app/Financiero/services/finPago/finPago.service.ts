import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FinPagoService {
  @Output() disparador: EventEmitter<any> = new EventEmitter();

  urlPath: string = "http://localhost:8080/web/api/rest/v1/financiero/cobros/pagos"

  constructor(private http: HttpClient) { }

  public getPagos(size:number, page: number) {
    return this.http.get(this.urlPath + "/recibos?pagination=true&size=" + size + "&page=" + page)
  }


  public getPagoById(pagoId: number) {
    const endpoint = this.urlPath + '/recibos/' + pagoId
    return this.http.get(endpoint)
  }

  public postPagarDeudaById(body: any) {
    return this.http.post(this.urlPath + "/comunes", body);
  }

  public postPagarVariasDeudas(body: any) {
    return this.http.post(this.urlPath + "/diferidos", body);
  }
}
