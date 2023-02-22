import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CtrAnuncioModel, CtrAnuncioModelAdd, CtrAnuncioModelCreate, CtrAnuncioModelUpdate } from '../../models/ctrAnuncio.model';


@Injectable({
  providedIn: 'root'
})
export class CtrAnuncioService {

  @Output() disparador: EventEmitter<any> = new EventEmitter();

  urlPath: string = "http://localhost:8080/web/api/rest/v1/control/anuncio";

  constructor(private http: HttpClient) { }

  public getAllAnuncios(): Observable<CtrAnuncioModel[]> {
    return this.http.get<CtrAnuncioModel[]>(this.urlPath + "/ordenDec");
  }

  public addAnuncio(data: CtrAnuncioModelAdd): Observable<void> {
    return this.http.post<void>(this.urlPath, data);
  }
  public updateAnuncio(data: CtrAnuncioModelUpdate): Observable<void> {
    return this.http.put<void>(this.urlPath, data);
  }
  public deleteAnuncio(id: number): Observable<any> {
    return this.http.put<any>(this.urlPath + "/" + id, {});
  }
}
