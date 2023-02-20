import { Component, OnInit } from '@angular/core';
import { FinIncidenciaModel } from '../../models/finIncidencia.model';
import { FinIncidenciaService } from '../../services/finIncidencia/finIncidencia.service';
import { FormBuilder,FormGroup } from '@angular/forms';
import { FinImagenModel } from '../../models/finImagen.model';
@Component({
  selector: 'app-finIncidencias',
  templateUrl: './finIncidencias.component.html',
  styleUrls: ['./finIncidencias.component.css']
})
export class FinIncidenciasComponent implements OnInit {
  public form!: FormGroup;
  public incidenciasNoSolucionadasList:FinIncidenciaModel[]=[];
  public imagenMap= new Map();
  public imagenBase64="";
  public idIncidencia=0;
  public descripcionMostrar="";
  public imagen!:File;

  constructor(private formBuilder:FormBuilder, private finIncidenciaService: FinIncidenciaService) { }

  ngOnInit() {
    this.getAllEvidenciaIncidencia();
    this.getAllIncidenciasNoSolucionadas();

    this.form=this.formBuilder.group({
      txtDescripcion:['']

    })
  }

  public getAllIncidenciasNoSolucionadas(){
    this.finIncidenciaService.getAllIncidenciasNoSolucionadas().subscribe(
      (incidencias:any)=>{
        this.incidenciasNoSolucionadasList=incidencias;
      }
    )
  }

  public getAllEvidenciaIncidencia(){
    this.finIncidenciaService.getAllEvidenciaIncidencia().subscribe(
      (imagenes:any)=>{
        var imagenesList: FinImagenModel[]=imagenes;
        imagenesList.forEach((i)=>{
          this.imagenMap.set(i.id,i.imagenBinarizada);
        });
      }
    );
  }


  public mostrar(){
    return this.imagenBase64;
  }

  public selectDescripcion(descripcion:string ,id:any){
    this.descripcionMostrar=descripcion;
    this.imagenBase64=this.imagenMap.get(id);
  }

  public cargarImagen(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      this.imagen = input.files[0];
    }
  }

  public getIdIncidencia(idIncidencia:any,idImagen:any,descripcion:any){
      this.idIncidencia=idIncidencia;
      this.imagenBase64=this.imagenMap.get(idImagen);
      this.descripcionMostrar=descripcion;
  }

  public postIncidencia(event: Event): void {

    event.preventDefault();
    if (this.imagen && this.form.value.txtDescripcion!='') {
    
      var incidencia={
        usuCedula:'1728848373',
        incDescripcion:this.form.value.txtDescripcion,
        incEvidenciaIndicencia:this.imagen 
      }
      this.finIncidenciaService.postIncidencia(incidencia)
        .subscribe(resultado => {
          console.log('La imagen se ha guardado correctamente:', resultado);
        });
    }
  }

  public putIncidencia(event: Event): void {
    event.preventDefault();
    if (this.imagen) {
      var incidencia1={
        incDescripcion:this.form.value.txtDescripcion.length==0?this.descripcionMostrar:this.form.value.txtDescripcion,
        incEvidenciaIndicencia:this.imagen 
      }
      this.finIncidenciaService.putIncidenciaNoSolucionada(incidencia1,this.idIncidencia,true)
        .subscribe(resultado => {
          console.log('Se ha actualizado correctamente:', resultado);
        });
    }else{
      var incidencia={
        incDescripcion:this.form.value.txtDescripcion.length==0?this.descripcionMostrar:this.form.value.txtDescripcion,
        incEvidenciaIndicencia: this.imagenBase64
      }
      this.finIncidenciaService.putIncidenciaNoSolucionada(incidencia,this.idIncidencia,false)
        .subscribe(resultado => {
          console.log('Se ha actualizado correctamente:', resultado);
        });
    }
  }

  public putIncidenciaSolucion(event: Event): void {
    event.preventDefault();
    if (this.imagen) {
      var incidencia={
        incEvidenciaIndicencia:this.imagen 
      }
      this.finIncidenciaService.putIncidenciaSolucionNoSolucionada(incidencia,this.idIncidencia)
        .subscribe(resultado => {
          console.log('Se ha solucionado correctamente:', resultado);
        });
    }
  }

  public normalizarFecha(fecha:any){
    const fechaObjeto= new Date(fecha);
    const anio = fechaObjeto.getFullYear();
    const mes = fechaObjeto.getMonth() + 1; 
    const dia = fechaObjeto.getDate();
    const fechaFormateada = anio + '/' + (mes < 10 ? '0' + mes : mes) + '/' + (dia < 10 ? '0' + dia : dia);
    return fechaFormateada;

  }
}
