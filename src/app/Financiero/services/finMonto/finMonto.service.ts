import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FinMontoService {
  @Output() disparador: EventEmitter<any> = new EventEmitter();

  urlPath: string = "http://localhost:8080/web/api/rest/v1/financiero/cobros/montos";

  constructor(private http: HttpClient) { }

  public getAllMontos() {
    return this.http.get(this.urlPath)
  }

  public getActivos() {
    const endpoint = this.urlPath + '/activos'
    return this.http.get(endpoint)
  }

  public getActivosByTipo(tipDeuId: number) {
    const endpoint = this.urlPath + '/activos/' + tipDeuId
    return this.http.get(endpoint)
  }

  public postNewMonto(body: any){
    return this.http.post(this.urlPath,body)
  }

}