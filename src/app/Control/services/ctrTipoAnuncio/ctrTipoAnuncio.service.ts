import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CtrTipoAnuncioModel, CtrTipoAnuncioModelAdd } from '../../models/ctrTipoAnuncio.model';

@Injectable({
  providedIn: 'root'
})
export class CtrTipoAnuncioService {
  urlPath: string = "http://ec2-54-198-186-75.compute-1.amazonaws.com/web/api/rest/v1/control/tipoanuncio";

  constructor(private http: HttpClient) { }

  public getAllTipoAnuncios(): Observable<CtrTipoAnuncioModel[]> {
    return this.http.get<CtrTipoAnuncioModel[]>(this.urlPath);
  }

  public addTipoAnuncio(data: CtrTipoAnuncioModelAdd): Observable<void> {
    return this.http.post<void>(this.urlPath, data);
  }
  public deleteTipoAnuncio(id: number): Observable<void> {
    return this.http.delete<void>(this.urlPath + "/" + id);
  }
}
