import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { fromEvent } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FinGastosService {
  @Output() disparador: EventEmitter<any> = new EventEmitter();
constructor(private http: HttpClient) { }


public getAllGastos(){
  const url =`http://ec2-54-198-186-75.compute-1.amazonaws.com/web/api/rest/v1/financiero/gasto`;
  return this.http.get(url);
}

public getAllRecibos(){
  const url =`http://ec2-54-198-186-75.compute-1.amazonaws.com/web/api/rest/v1/financiero/gasto/recibos`;
  return this.http.get(url);

}

public getAllGastosByIncidencia(id:any){
  const url =`http://ec2-54-198-186-75.compute-1.amazonaws.com/web/api/rest/v1/financiero/gasto/incidencia/`+id;
  return this.http.get(url);
}

public postGasto(gastoModel: any){
  const reader = new FileReader();
  var imagen=gastoModel.gasRecibo;
  reader.readAsDataURL(imagen);
  return fromEvent(reader, 'load').pipe(
      map(() => reader.result as string),
      switchMap((base64: string) => {
         
        var pago={
          tseId:gastoModel.tseId,
          incId:gastoModel.incId,
          gasCedTesorero:gastoModel.gasCedTesorero,
          gasPago:gastoModel.gasPago,
          gasRecibo:base64 
        }
         return this.http.post<string>(`http://ec2-54-198-186-75.compute-1.amazonaws.com/web/api/rest/v1/financiero/gasto`, pago);
      })
  );
}

public putGasto(gastoModel: any, id:any){
    const reader = new FileReader();
    var imagen=gastoModel.gasRecibo;
    reader.readAsDataURL(imagen);
    return fromEvent(reader, 'load').pipe(
        map(() => reader.result as string),
        switchMap((base64: string) => {
           
          var pago={
            gasRecibo:base64
          }
           return this.http.put<string>(`http://ec2-54-198-186-75.compute-1.amazonaws.com/web/api/rest/v1/financiero/gasto/`+id, pago);
        })
    );
}

}
