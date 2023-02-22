import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CtrLugarModel, CtrLugarModelSave } from '../../models/ctrLugar.model';

@Injectable({
  providedIn: 'root'
})
export class CtrLugarService {


  urlPath: string = "http://localhost:8080/web/api/rest/v1/control/lugar";

  constructor(private http: HttpClient) { }

  public getAllLugares(): Observable<CtrLugarModel[]> {
    return this.http.get<CtrLugarModel[]>(this.urlPath);
  }

  public addLugar(data: CtrLugarModelSave): Observable<void> {
    return this.http.post<void>(this.urlPath, data);
  }
  public updateLugar(data: CtrLugarModelSave): Observable<void> {
    return this.http.put<void>(this.urlPath, data);
  }
  public deleteLugar(id: number): Observable<any> {
    return this.http.delete<any>(this.urlPath + "/" + id);
  }

}
