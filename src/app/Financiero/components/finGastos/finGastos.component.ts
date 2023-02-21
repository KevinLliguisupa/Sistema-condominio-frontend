import { Component, OnInit } from '@angular/core';
import { FinTipoServicioService } from '../../services/finTipoServicio/finTipoServicio.service';
import { FinTipoServicioModel } from '../../models/finTipoServicio.model';
import { FinIncidenciaModel } from '../../models/finIncidencia.model';
import { FinIncidenciaService } from '../../services/finIncidencia/finIncidencia.service';
import { FinGastosModel } from '../../models/finGastos.model';
import { FinGastosService } from '../../services/finGastos/finGastos.service';
import { FormBuilder,FormGroup } from '@angular/forms';
import { FinImagenModel } from '../../models/finImagen.model';
@Component({
  selector: 'app-finGastos',
  templateUrl: './finGastos.component.html',
  styleUrls: ['./finGastos.component.css']
})
export class FinGastosComponent implements OnInit {


  public imagen!:File;
  public form!: FormGroup;
  public serviciosList : FinTipoServicioModel[]=[]
  public incidenciasList: FinIncidenciaModel[]=[];
  public gastosList: FinGastosModel[]=[]


  public serviciosMap = new Map();
  public incidenciasMap= new Map();
  public recibosMap= new Map();

  public imagenMostrar="";
  public idPago=0;


  constructor(private formBuilder:FormBuilder, 
    private finGastosService: FinGastosService,
    private finTipoServiciosService: FinTipoServicioService,
    private finIncidenciaService:FinIncidenciaService) { }

  ngOnInit( ) {
    this.getAllInidenciasSolucionadas();
    this.getAllTipoServicios();
    this.getAllInidenciasAbiertas();
    this.getAllGastos();
    this.getAllRecibos();
    this.form=this.formBuilder.group({
      txtIncidencia:[''],
      txtServicio:[''],
      txtPago:[0]
    })
  }


  public getAllTipoServicios(){
    this.finTipoServiciosService.getTiposServicios().subscribe(
      (servicio:any)=>{
        var serviciosAux:FinTipoServicioModel[]=servicio;
        serviciosAux.forEach((p)=>{
          if(p.tseIncidencia){
            this.serviciosList.push(p);
            this.serviciosMap.set(p.tseId,p.tseNombre);
          }
        });     
      }
    );
  }

  public getAllInidenciasAbiertas(){
    this.finIncidenciaService.getAllIncidenciasNoSolucionadas().subscribe(
      (incidencia:any)=>{
        this.incidenciasList=incidencia;
        this.incidenciasList.forEach((p)=>{
          this.incidenciasMap.set(p.incId,p.incDescripcion);
        });
        
      }
    );
  }
  public getAllInidenciasSolucionadas(){
    this.finIncidenciaService.getAllIncidenciasSolucionadas().subscribe(
      (incidencia:any)=>{
        this.incidenciasList=incidencia;
        this.incidenciasList.forEach((p)=>{
          this.incidenciasMap.set(p.incId,p.incDescripcion);
        });
        
      }
    );
  }

  public getAllGastos(){
    this.finGastosService.getAllGastos().subscribe(
      (gasto:any)=>{
        this.gastosList=gasto;
      }
    );
  }

  public getAllRecibos(){
    this.finGastosService.getAllRecibos().subscribe(
      (recibos:any)=>{
        var recibosList:FinImagenModel[]= recibos;
        recibosList.forEach((p)=>{
          this.recibosMap.set(p.id,p.imagenBinarizada);
        })
    }
    );
  }

  public selectImagen(id:any){
    this.imagenMostrar= this.recibosMap.get(id);
  }

  public mostrar(){
    return this.imagenMostrar;
  }

  public getIncidenciaById(id:any){
    return this.incidenciasMap.get(id);
  }
  public getServicioById(id:any){
    return this.serviciosMap.get(id);
  }

  public normalizarFecha(fecha:any){
    const fechaObjeto= new Date(fecha);
    const anio = fechaObjeto.getFullYear();
    const mes = fechaObjeto.getMonth() + 1; 
    const dia = fechaObjeto.getDate();
    const fechaFormateada = anio + '/' + (mes < 10 ? '0' + mes : mes) + '/' + (dia < 10 ? '0' + dia : dia);
    return fechaFormateada;

  }


  public cargarImagen(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      this.imagen = input.files[0];
    }
  }
  
  public postGasto(event: Event): void {

    event.preventDefault();
    if (this.imagen && this.form.value.txtPago>0 && this.form.value.txtIncidencia!='' && this.form.value.txtServicio!='') {
    
      var pago={
        tseId:this.form.value.txtServicio,
        incId:this.form.value.txtIncidencia,
        gasCedTesorero:'1728848373',
        gasPago:this.form.value.txtPago,
        gasRecibo:this.imagen 
      }
      this.finGastosService.postGasto(pago)
        .subscribe(resultado => {
          console.log('Se ha ingresado correctamente:', resultado);
        });
    }
    
  }

  public getDatos(id:any){
    this.idPago=id;
  }

  public updateGasto(event: Event): void {

    event.preventDefault();
    if (this.imagen) {
    
      var pago={
        gasRecibo:this.imagen 
      }
      this.finGastosService.putGasto(pago,this.idPago)
        .subscribe(resultado => {
          console.log('Se ha actualizado correctamente:', resultado);
        });
    }
    
  }
  getEventValue($event:any) :string {
    return $event.target.value;
  } 
  
}
