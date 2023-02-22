import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CtrReunionModel, CtrReunionModelSave } from '../../models/ctrReunion.model';

@Injectable({
  providedIn: 'root'
})
export class CtrReunionService {


  urlPath: string = "http://localhost:8080/web/api/rest/v1/control/reunion";

  constructor(private http: HttpClient) { }

  public getAllReuniones(): Observable<CtrReunionModel[]> {
    return this.http.get<CtrReunionModel[]>(this.urlPath + "/ordenarDec");
  }

  public addReunion(data: CtrReunionModelSave): Observable<void> {
    return this.http.post<void>(this.urlPath, data);
  }
  public updateReunion(data: CtrReunionModelSave): Observable<void> {
    return this.http.put<void>(this.urlPath, data);
  }
  public deleteReunion(id: number): Observable<any> {
    return this.http.put<any>(this.urlPath + "/" + id, {});
  }
}

