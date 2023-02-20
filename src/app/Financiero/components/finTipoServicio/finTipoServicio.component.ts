import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup ,Validators} from '@angular/forms';
import { FinTipoServicioModel } from '../../models/finTipoServicio.model';
import { FinTipoServicioService } from '../../services/finTipoServicio/finTipoServicio.service';

@Component({
  selector: 'app-finTipoServicio',
  templateUrl: './finTipoServicio.component.html',
  styleUrls: ['./finTipoServicio.component.css']
})
export class FinTipoServicioComponent implements OnInit {

  
  public form!: FormGroup;
  public nombreServicio="";
  public descripcionServicio="";
  public idServicio=0;
  public incidenciaServicio=false;
  public idDefaultSelect=0;

  public servicioTipo=[
    {"Nombre":"Incidencia","Si":true},{"Nombre":"Servicio","Si":false}
  ]

  public tiposServiciosList: FinTipoServicioModel[]=[]

 
  constructor(
    private tipoServicioService: FinTipoServicioService,
    private formBuilder:FormBuilder 
  ) { 

  }

  ngOnInit():void {
    this.getAllTiposServicios();
    this.form=this.formBuilder.group({
      txtNombre:['',Validators.required],
      txtDescripcion:['',Validators.required],
      txtIncidencia:true
    })
  }

  public getAllTiposServicios(){
    this.tipoServicioService.getTiposServicios().subscribe(
      (tipoSercicio:any)=>{
        this.tiposServiciosList=tipoSercicio;
      }
    )
    
 
  }

  public getTipoServicio(tse_id:any,tseIncidencia:any,tseNombre:any,tseDescripcion:any){
    this.form.value.txtIncidencia=tseIncidencia;
    this.idServicio=tse_id;
    this.idDefaultSelect=tseIncidencia?0:1;
    this.nombreServicio=tseNombre;
    this.descripcionServicio=tseDescripcion;
   
  }

  public postTipoServicio(){
    if(this.form.value.txtNombre!='' && this.form.value.txtDescripcion!=''){
      this.tipoServicioService.postTipoServicio({
        tseNombre:this.form.value.txtNombre,
        tseDescripcion:this.form.value.txtDescripcion,
        tseIncidencia:this.form.value.txtIncidencia
      }).subscribe();
    }
    
  }

  public updateTipoServicio(){
    this.tipoServicioService.putTipoServicio(
      this.idServicio,
      {
        tseNombre:this.form.value.txtNombre==''?this.nombreServicio:this.form.value.txtNombre,
        tseDescripcion:this.form.value.txtDescripcion==''?this.descripcionServicio:this.form.value.txtDescripcion,
        tseIncidencia:this.form.value.txtIncidencia
    }
    ).subscribe();

  }

}
