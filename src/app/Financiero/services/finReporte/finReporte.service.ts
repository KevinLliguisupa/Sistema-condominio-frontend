import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FinReporteService {
  @Output() disparador: EventEmitter<any> = new EventEmitter();
  constructor(private http: HttpClient) { }

  public getAllResumenEgresosIncidencias(anio:any,mes:any){
    const url= `http://localhost:8080/web/api/rest/v1/financiero/reporteegresosincidencias/`+anio+`/`+mes;
    return this.http.get(url);
  }
  public getAllResumenEgresosServicios(anio:any,mes:any){
    const url= `http://localhost:8080/web/api/rest/v1/financiero/reporteegresosservicios/`+anio+`/`+mes;
    return this.http.get(url);
  }

  public getIngresosMensuales(){
    const url =`http://localhost:8080/web/api/rest/v1/financiero/ingresos`;
    return this.http.get(url);
  }
  public getEgresosIncidenciasMensuales(){
    const url =`http://localhost:8080/web/api/rest/v1/financiero/gastosincidencias`;
    return this.http.get(url);
  }
  public getEgresosServiciosMensuales(){
    const url =`http://localhost:8080/web/api/rest/v1/financiero/gastosservicios`;
    return this.http.get(url);
  }
  public getIngresosTotales(){
    const url=`http://localhost:8080/web/api/rest/v1/financiero/ingresosvalor`;
    return this.http.get(url);
  }

  public getEgresosIncidenciasTotales(){
    const url=`http://localhost:8080/web/api/rest/v1/financiero/gastosincidenciasvalor`;
    return this.http.get(url);
  }

  public getEgresosServiciosTotales(){
    const url=`http://localhost:8080/web/api/rest/v1/financiero/gastosserviciosvalor`;
    return this.http.get(url);
  }

  public getSaldoTotal(){
    const url=`http://localhost:8080/web/api/rest/v1/financiero/saldo`;
    return this.http.get(url);
  }
  public getDeudaTotal(){
    const url=`http://localhost:8080/web/api/rest/v1/financiero/deudatotal`;
    return this.http.get(url);
  }
}
