import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CtrReservacionModel, CtrReservacionModelSave } from '../../models/ctrReservacion.model';

@Injectable({
  providedIn: 'root'
})
export class CtrReservacionService {

  urlPath: string = "http://ec2-54-198-186-75.compute-1.amazonaws.com/web/api/rest/v1/control/reservacion";

  constructor(private http: HttpClient) { }

  public getAllReservaciones(): Observable<CtrReservacionModel[]> {
    return this.http.get<CtrReservacionModel[]>(this.urlPath + "/masrecientes");
  }

  public addReservacion(data: CtrReservacionModelSave): Observable<void> {
    return this.http.post<void>(this.urlPath, data);
  }
  public updateReservacion(data: CtrReservacionModelSave): Observable<void> {
    return this.http.put<void>(this.urlPath, data);
  }
  public approvalReservacion(id:number): Observable<void> {
    return this.http.put<void>(this.urlPath+"/"+id, {});
  }
  public deleteReservacion(id: number): Observable<any> {
    return this.http.put<any>(this.urlPath + "/estado/" + id, {});
  }
}
