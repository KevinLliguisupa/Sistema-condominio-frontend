import { Component, OnInit } from '@angular/core';
import { FinIngresosService } from '../../services/finIngresos/finIngresos.service';
import { FinIngresosModel } from '../../models/finIngresos.model';

@Component({
  selector: 'app-finIngresos',
  templateUrl: './finIngresos.component.html',
  styleUrls: ['./finIngresos.component.css']
})
export class FinIngresosComponent implements OnInit {
  
  public ingresosList:FinIngresosModel[]=[];
  constructor(private finIngresosService: FinIngresosService) { }

  ngOnInit() {
    this.getAllIngresos();
  }

  public getAllIngresos(){
    this.finIngresosService.getAllIngresos().subscribe(
      (ingresos:any)=>{
        this.ingresosList=ingresos;
      }
    );
  }
  getEventValue($event:any) :string {
    return $event.target.value;
  } 

}
