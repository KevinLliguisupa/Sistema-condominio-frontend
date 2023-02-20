import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { fromEvent } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FinIncidenciaService {
  @Output() disparador: EventEmitter<any> = new EventEmitter();
constructor(private http: HttpClient) { }

public getAllIncidenciasNoSolucionadas(){
  const url =`http://localhost:8080/web/api/rest/v1/financiero/incidencia/nosolucionadas`;
  return this.http.get(url);
}
public getAllIncidenciasSolucionadas(){
  const url =`http://localhost:8080/web/api/rest/v1/financiero/incidencia/solucionadas`;
  return this.http.get(url);
}
public getAllEvidenciaIncidencia(){
  const url =`http://localhost:8080/web/api/rest/v1/financiero/incidencia/evidenciasnosolucionadas`;
  return this.http.get(url);
}
public getAllEvidenciaSolucion(){
  const url =`http://localhost:8080/web/api/rest/v1/financiero/incidencia/evidenciassolucionadas`;
  return this.http.get(url);
}

public postIncidencia(incidenciaModel: any){
  const reader = new FileReader();
  var imagen=incidenciaModel.incEvidenciaIndicencia;
  reader.readAsDataURL(imagen);
  return fromEvent(reader, 'load').pipe(
      map(() => reader.result as string),
      switchMap((base64: string) => {
         
        var incidencia={
          usuCedula:incidenciaModel.usuCedula,
          incDescripcion:incidenciaModel.incDescripcion,
          incEvidenciaIndicencia:base64
        }
         return this.http.post<string>(`http://localhost:8080/web/api/rest/v1/financiero/incidencia`, incidencia);
      })
  );
}
public putIncidenciaNoSolucionada(incidenciaModel: any, id:any, verificarImagen:boolean){

  if(verificarImagen){

    const reader = new FileReader();
    var imagen=incidenciaModel.incEvidenciaIndicencia;
    reader.readAsDataURL(imagen);
    return fromEvent(reader, 'load').pipe(
        map(() => reader.result as string),
        switchMap((base64: string) => {
           
          var incidencia={
            incDescripcion:incidenciaModel.incDescripcion,
            incEvidenciaIndicencia:base64
          }
           return this.http.put<string>(`http://localhost:8080/web/api/rest/v1/financiero/incidencia/`+id, incidencia);
        })
    );
  }else{

        var incidencia={
          incDescripcion:incidenciaModel.incDescripcion,
          incEvidenciaIndicencia:incidenciaModel.incEvidenciaIndicencia
        }
         return this.http.put<string>(`http://localhost:8080/web/api/rest/v1/financiero/incidencia/`+id, incidencia);
  }
  
}

public putIncidenciaSolucionNoSolucionada(incidenciaModel: any, id:any){

    const reader = new FileReader();
    var imagen=incidenciaModel.incEvidenciaIndicencia;
    reader.readAsDataURL(imagen);
    return fromEvent(reader, 'load').pipe(
        map(() => reader.result as string),
        switchMap((base64: string) => {
           
          var incidencia={
            incEvidenciaSolucion:base64
          }
           return this.http.put<string>(`http://localhost:8080/web/api/rest/v1/financiero/incidencia/solucion/`+id, incidencia);
        })
    );

  
}

}
