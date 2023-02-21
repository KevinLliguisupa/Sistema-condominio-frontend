import { Component, OnInit } from '@angular/core';
import { FinResumenEgresoIncidencias, FinResumenEgresoServicios, FinValorMensual, FinValorTotal } from '../../models/finReporte.model';
import { FinReporteService } from '../../services/finReporte/finReporte.service';

@Component({
  selector: 'app-finReporteGeneral',
  templateUrl: './finReporteGeneral.component.html',
  styleUrls: ['./finReporteGeneral.component.css']
})
export class FinReporteGeneralComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
