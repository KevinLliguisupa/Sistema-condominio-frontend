import { Component, OnInit } from '@angular/core';
import { FinImagenModel } from '../../models/finImagen.model';
import { FinIncidenciaService } from '../../services/finIncidencia/finIncidencia.service';
import { FinIncidenciaModel } from '../../models/finIncidencia.model';
@Component({
  selector: 'app-finIncidenciasSolucionadas',
  templateUrl: './finIncidenciasSolucionadas.component.html',
  styleUrls: ['./finIncidenciasSolucionadas.component.css']
})
export class FinIncidenciasSolucionadasComponent implements OnInit {

  public imagenesIncidenciaMap= new Map();
  public imagenesSolucionMap= new Map();
  public incidenciasSolucionadasList: FinIncidenciaModel[]=[];
  public incidenciaDescripcion="";
  public incidenciaIncidencia="";
  public incidenciaSolucion="";


  constructor(private finIncidenciaService:FinIncidenciaService) { }

  ngOnInit() {
    this.getAllImagenesIncidencias();
    this.getAllImagenesSoluciones();
    this.getIncidenciasSolucionadas();
  }

  public getAllImagenesIncidencias(){
    this.finIncidenciaService.getAllEvidenciaIncidencia().subscribe(
      (imagenes:any)=>{
        var imagenesIncidenciaList:FinImagenModel[]=imagenes;
        imagenesIncidenciaList.forEach((p)=>{
          this.imagenesIncidenciaMap.set(p.id,p.imagenBinarizada);
        });
      }
    );
  }

  public getAllImagenesSoluciones(){
    this.finIncidenciaService.getAllEvidenciaSolucion().subscribe(
      (imagenes:any)=>{
        var imagenesSolucionList:FinImagenModel[]=imagenes;
        imagenesSolucionList.forEach((p)=>{
          this.imagenesSolucionMap.set(p.id,p.imagenBinarizada);
        });
      }
    );
  }

  public getIncidenciasSolucionadas(){
      this.finIncidenciaService.getAllIncidenciasSolucionadas().subscribe(
        (incidencias:any)=>{
          this.incidenciasSolucionadasList=incidencias;
        }
      );
  }

  public normalizarFecha(fecha:any){
    const fechaObjeto= new Date(fecha);
    const anio = fechaObjeto.getFullYear();
    const mes = fechaObjeto.getMonth() + 1; 
    const dia = fechaObjeto.getDate();
    const fechaFormateada = anio + '/' + (mes < 10 ? '0' + mes : mes) + '/' + (dia < 10 ? '0' + dia : dia);
    return fechaFormateada;

  }

  public selectDetalle(descripcion:any, incidencia:any, solucion:any){
    this.incidenciaDescripcion=descripcion;
    this.incidenciaIncidencia=this.imagenesIncidenciaMap.get(incidencia);
    this.incidenciaSolucion= this.imagenesSolucionMap.get(solucion);

  }

  public mostrarIncidencia(){
    return this.incidenciaIncidencia;
  }

  public mostrarSolucion(){
    return this.incidenciaSolucion;
  }
  getEventValue($event:any) :string {
    return $event.target.value;
  } 

}
