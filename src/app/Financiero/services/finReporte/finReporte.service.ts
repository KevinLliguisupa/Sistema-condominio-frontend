import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FinReporteService {
  @Output() disparador: EventEmitter<any> = new EventEmitter();
  constructor(private http: HttpClient) { }

  public getAllResumenEgresosIncidencias(){
    const url= `http://ec2-54-198-186-75.compute-1.amazonaws.com/web/api/rest/v1/financiero/reporteegresosincidencias/0/0`;
    return this.http.get(url);
  }
  public getAllResumenEgresosServicios(){
    const url= `http://ec2-54-198-186-75.compute-1.amazonaws.com/web/api/rest/v1/financiero/reporteegresosservicios/0/0`;
    return this.http.get(url);
  }

  public getIngresosMensuales(){
    const url =`http://ec2-54-198-186-75.compute-1.amazonaws.com/web/api/rest/v1/financiero/ingresos`;
    return this.http.get(url);
  }
  public getEgresosIncidenciasMensuales(){
    const url =`http://ec2-54-198-186-75.compute-1.amazonaws.com/web/api/rest/v1/financiero/gastosincidencias`;
    return this.http.get(url);
  }
  public getEgresosServiciosMensuales(){
    const url =`http://ec2-54-198-186-75.compute-1.amazonaws.com/web/api/rest/v1/financiero/gastosservicios`;
    return this.http.get(url);
  }
  public getIngresosTotales(){
    const url=`http://ec2-54-198-186-75.compute-1.amazonaws.com/web/api/rest/v1/financiero/ingresosvalor`;
    return this.http.get(url);
  }

  public getEgresosIncidenciasTotales(){
    const url=`http://ec2-54-198-186-75.compute-1.amazonaws.com/web/api/rest/v1/financiero/gastosincidenciasvalor`;
    return this.http.get(url);
  }

  public getEgresosServiciosTotales(){
    const url=`http://ec2-54-198-186-75.compute-1.amazonaws.com/web/api/rest/v1/financiero/gastosserviciosvalor`;
    return this.http.get(url);
  }

  public getSaldoTotal(){
    const url=`http://ec2-54-198-186-75.compute-1.amazonaws.com/web/api/rest/v1/financiero/saldo`;
    return this.http.get(url);
  }
  public getDeudaTotal(){
    const url=`http://ec2-54-198-186-75.compute-1.amazonaws.com/web/api/rest/v1/financiero/deudatotal`;
    return this.http.get(url);
  }

}
