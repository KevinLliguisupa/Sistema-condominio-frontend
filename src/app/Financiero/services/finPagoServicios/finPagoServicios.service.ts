import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { fromEvent } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FinPagoServiciosService {
  @Output() disparador: EventEmitter<any> = new EventEmitter();

constructor(private http: HttpClient) { }


public getAllPagosServicios(){
  const url="http://ec2-54-198-186-75.compute-1.amazonaws.com/web/api/rest/v1/financiero/pagoservicios";
  return this.http.get(url);
}

public getAllImagenes(){
  const url="http://ec2-54-198-186-75.compute-1.amazonaws.com/web/api/rest/v1/financiero/pagoservicios/imagenrecibo";
  return this.http.get(url);
}

public postPagoServicio(pagoServicioModel: any){
  const reader = new FileReader();
  var imagen=pagoServicioModel.pseRecibo;
  reader.readAsDataURL(imagen);
  return fromEvent(reader, 'load').pipe(
      map(() => reader.result as string),
      switchMap((base64: string) => {
         
        var pagoServicioModelInsert={
          tseId:pagoServicioModel.tseId,
          pseMonto:pagoServicioModel.pseMonto,
          pseRecibo:base64,
          pseCedTesorero:pagoServicioModel.pseCedTesorero 
        }
         return this.http.post<string>(`http://ec2-54-198-186-75.compute-1.amazonaws.com/web/api/rest/v1/financiero/pagoservicios`, pagoServicioModelInsert);
      })
  );
}

public putPagoServicio(pagoServicioModel: any, id:any,verificarImagen:boolean){
  if(verificarImagen){
    const reader = new FileReader();
    var imagen=pagoServicioModel.pseRecibo;
    reader.readAsDataURL(imagen);
    return fromEvent(reader, 'load').pipe(
        map(() => reader.result as string),
        switchMap((base64: string) => {
           
          var pagoServicioModelUpdate={
            pseRecibo:base64,
          }
           return this.http.put<string>(`http://ec2-54-198-186-75.compute-1.amazonaws.com/web/api/rest/v1/financiero/pagoservicios/`+id, pagoServicioModelUpdate);
        })
    );
  }else{
    
          var pagoServicioModelUpdate={
            pseRecibo:pagoServicioModel.pseRecibo
          }
           return this.http.put<string>(`http://ec2-54-198-186-75.compute-1.amazonaws.com/web/api/rest/v1/financiero/pagoservicios/`+id, pagoServicioModelUpdate);
  
  }
 
}




}
