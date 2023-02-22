import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { FinTipoServicioService } from '../../services/finTipoServicio/finTipoServicio.service';
import { FinTipoServicioModel } from '../../models/finTipoServicio.model';
import { FinPagoServiciosModel } from '../../models/finPagoServicios.model';
import { FinPagoServiciosService } from '../../services/finPagoServicios/finPagoServicios.service';
import { FinImagenModel } from '../../models/finImagen.model';
@Component({
  selector: 'app-finPagoServicios',
  templateUrl: './finPagoServicios.component.html',
  styleUrls: ['./finPagoServicios.component.css']
})
export class FinPagoServiciosComponent implements OnInit {

  public imagen!:File;
  public imagenMostrada="";
  public idImagenActualizar="";
  public idPagoActualizar="";
  public tipoServiciosList: FinTipoServicioModel[]=[];
  public form!: FormGroup;
  public mapaTipoServicios=new Map();
  public mapaImagenes= new Map();

  public pagoServiciosList: FinPagoServiciosModel[]=[];

  constructor(private formBuilder:FormBuilder, private pagoServiciosService: FinPagoServiciosService,
    private finTipoServiciosService :FinTipoServicioService) { 
    }

  ngOnInit() {
    this.getAllTiposServicios();
    this.getAllImagenes();
    this.getAllPagosServicios();
    this.form=this.formBuilder.group({
      txtServicio:0,
      txtMonto:0
    })

  }


  private getAllImagenes(){
    this.pagoServiciosService.getAllImagenes().subscribe(
        (imagen:any)=>{
          var listaImagenes:FinImagenModel[]=imagen;
          listaImagenes.forEach((p)=>{
            this.mapaImagenes.set(p.id, p.imagenBinarizada)
          })
        }
    );
    
  }

  public selectImagen(id:any){
    this.imagenMostrada= this.mapaImagenes.get(id);
  }

  public mostrar(){
    return this.imagenMostrada;
  }


  public getAllTiposServicios(){
    this.finTipoServiciosService.getTiposServicios().subscribe(
      (Servicio:any)=>{
        var lista:FinTipoServicioModel[]=Servicio;    
        lista.forEach((p)=>{
        if(!p.tseIncidencia){
            this.tipoServiciosList.push({
              tseId:p.tseId,
              tseIncidencia:p.tseIncidencia,
              tseNombre:p.tseNombre,
              tseDescripcion:p.tseDescripcion
            });
            this.mapaTipoServicios.set(p.tseId,p.tseNombre);
        } 
        });
      }
    );
  
  }
  public getTipoServicioById(tseId:any){
    return this.mapaTipoServicios.get(tseId);
  }

  public getAllPagosServicios(){
    this.pagoServiciosList=[];
      this.pagoServiciosService.getAllPagosServicios().subscribe(
        (pagoServicio:any)=>{
          this.pagoServiciosList= pagoServicio;
        }
      );
  }

  public cargarImagen(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      this.imagen = input.files[0];
    }
  }

  public postPagoServicio(event: Event): void {
    event.preventDefault();
    if (this.imagen && this.form.value.txtServicio!=0 &&this.form.value.txtMonto!=0) {
    
      var pagoServicioInsert={
        tseId:this.form.value.txtServicio,
        pseMonto:this.form.value.txtMonto,
        pseRecibo:this.imagen ,
        pseCedTesorero:"1728848373",//Cedula del usuario Logeado
      }
      this.pagoServiciosService.postPagoServicio(pagoServicioInsert)
        .subscribe(resultado => {
          console.log('La imagen se ha guardado correctamente:', resultado);
        });
    }
  }

  public getIdImagen(idImagen:any, idPago:any){
      this.idImagenActualizar=idImagen;
      this.idPagoActualizar=idPago;
      this.imagenMostrada=this.mapaImagenes.get(idImagen);
  }

  public updatePagoServicio(event: Event):void{
    event.preventDefault();
    if (this.imagen) {
    
      var updatePago={
        pseRecibo:this.imagen 
      }
      this.pagoServiciosService.putPagoServicio(updatePago,this.idImagenActualizar,true)
        .subscribe(resultado => {
          console.log('La imagen se ha actualizado correctamente:', resultado);
        });
    }else{

      var updatePago1={
        pseRecibo:this.imagenMostrada 
      }
      this.pagoServiciosService.putPagoServicio(updatePago1,this.idImagenActualizar,false)
        .subscribe(resultado => {
          console.log('La imagen se ha actualizado correctamente:', resultado);
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
  getEventValue($event:any) :string {
    return $event.target.value;
  } 
}
