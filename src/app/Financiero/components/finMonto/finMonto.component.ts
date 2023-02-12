import { Component, OnInit } from '@angular/core';
import { FinMontModel } from '../../models/finMonto.model';
import { FinMontoService } from '../../services/finMonto/finMonto.service';


@Component({
  selector: 'app-finMonto',
  templateUrl: './finMonto.component.html',
  styleUrls: ['finMonto.component.min.css']
})
export class FinMontoComponent implements OnInit {

  montos: FinMontModel[] = [];
  temp: Object=false;

  constructor(
    private montoService: FinMontoService
  ) { }

  ngOnInit(): void {
    this.getAllMontos()



  }

  public getAllMontos() {
    this.montoService.getAllMontos().subscribe(
      (response: any) => {
        for (let i = 0; i < response.length; i++) {
          const element:FinMontModel = response[i];
          if(element.monFechaFin == null){
            element.monFechaFin = 'Activo';
          }
        }

        this.montos = response;


        this.temp = true;
      }, (error) => console.warn(error)
    )
  }

}
