import { Component, OnInit } from '@angular/core';
import { FinResumenEgresoServiciosTablaModel,FinResumenEgresoIncidenciasTablaModel,FinAnioMesValoresMensualesModel,FinResumenEgresoIncidenciasModel, FinResumenEgresoServiciosModel, FinValorMensualModel, FinValorTotalModel } from '../../models/finReporte.model';
import { FinReporteService } from '../../services/finReporte/finReporte.service';

@Component({
  selector: 'app-finReporteGeneral',
  templateUrl: './finReporteGeneral.component.html',
  styleUrls: ['./finReporteGeneral.component.css']
})
export class FinReporteGeneralComponent implements OnInit {

  public basicData: any;
  public horizontalOptions: any;
  public ingresosMensualesList:FinValorMensualModel[]=[];
  public egresosIncidenciasMensualesList:FinValorMensualModel[]=[];
  public egresosServiciosMensualesList:FinValorMensualModel[]=[];
  public labelsGraficoBarrasMensual:string []=[];
  public ingresosGraficoBarrasMensual: number[]=[];
  public egresosIncidenciasGraficoBarrasMensual:number[]=[];
  public egresosServicioGraficoBarrasMensual:number[]=[];

  public egresosIncidenciasResumenTotal:FinResumenEgresoIncidenciasTablaModel[]=[];

  public egresosServiciosResumenTotal:FinResumenEgresoServiciosTablaModel[]=[];

  public dineroDisponible=0;
  public deudatotal=0;

  public meses = new Map<number, string>([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
  ]);

  

  constructor(private finReporteService: FinReporteService) { 
  
  }

  ngOnInit() {
    this.getAllIngresosMensuales();
    this.getAllResumenEgresosIncidencias();
    this.getAllResumenEgresosServicios();
    this.getDineroDisponible();
    this.getDeudasGerenales();
  }

  public getDineroDisponible(){
    this.finReporteService.getSaldoTotal().subscribe(
      (saldo:any)=>{
        this.dineroDisponible=saldo.valor
      }
    );
  }

  public getDeudasGerenales(){
    this.finReporteService.getDeudaTotal().subscribe(
      (deuda:any)=>{
        this.deudatotal=deuda.valor
      }
    );
  }
  public getAllResumenEgresosIncidencias(){
    var valorTotal=0;
    var numIncidenciasTotal=0;
    this.finReporteService.getAllResumenEgresosIncidencias().subscribe(
      (incidencia:any)=>{
        var egresosIncidenciasResumenTotalAux:FinResumenEgresoIncidenciasModel[]=incidencia;
        egresosIncidenciasResumenTotalAux.forEach(
          (p)=>{
            valorTotal=valorTotal+p.valor;
            numIncidenciasTotal=numIncidenciasTotal+p.incidencias;

            this.egresosIncidenciasResumenTotal.push(
              {
              tipoServicio:p.servicio,
              valor:p.valor==null?0:p.valor,
              numIncidencias:p.incidencias
              }
            );
          }
        );

        this.egresosIncidenciasResumenTotal.push(
          {
          tipoServicio:'Total',
          valor:valorTotal,
          numIncidencias:numIncidenciasTotal
          }
        );
      }
    );
  }

  public getAllResumenEgresosServicios(){
    var valorTotal=0;
    this.finReporteService.getAllResumenEgresosServicios().subscribe(
      (servicio:any)=>{
        var egresosServicioResumenTotalAux:FinResumenEgresoServiciosModel[]=servicio;
        egresosServicioResumenTotalAux.forEach(
          (p)=>{
            valorTotal=valorTotal+p.valor;

            this.egresosServiciosResumenTotal.push(
              {
              tipoServicio:p.servicio,
              valor:p.valor==null?0:p.valor
              }
            );
          }
        );

        this.egresosServiciosResumenTotal.push(
          {
          tipoServicio:'Total',
          valor:valorTotal
          }
        );
      }
    );
  }








  public getAllIngresosMensuales(){
    this.finReporteService.getIngresosMensuales().subscribe(
      (ingresos:any)=>{
        this.ingresosMensualesList=ingresos;
        this.getAllEgresosIncidenciasMensuales();
      }
    );
  }

  public getAllEgresosIncidenciasMensuales(){
    this.finReporteService.getEgresosIncidenciasMensuales().subscribe(
      (incidencias:any)=>{
        this.egresosIncidenciasMensualesList=incidencias;
        this.getAllEgresosServiciosMensuales();
      }
    );
  }

  public getAllEgresosServiciosMensuales(){
    this.finReporteService.getEgresosServiciosMensuales().subscribe(
      (servicio:any)=>{
        this.egresosServiciosMensualesList=servicio;
        this.ordenarIngresosEgresosMensuales();
        this.inicializarDiagramaBarrasHorizontal();
      }
    );
  }

  public ordenarIngresosEgresosMensuales(){
    var anioMesValoresMensuales:FinAnioMesValoresMensualesModel[]=[];
    var anioMin=9999;
    var anioMax=0;
    var mesMin=9999;
    var mesMax=0;

    var ingresosMensualesMap= new Map();
    var egresosIncidenciasMensualesMap= new Map();
    var egresosServiciosMensualesMap= new Map();

    // Obtencion del anio minimo y maximo
    this.ingresosMensualesList.forEach(
      (i)=>{
        if(i.anio<anioMin){
          anioMin=i.anio
        }
        if(i.anio>anioMax){
          anioMax=i.anio
        }
        ingresosMensualesMap.set(i.anio+"-"+i.mes,i.valor);
      }
      
    );
    this.egresosIncidenciasMensualesList.forEach(
      (i)=>{
        if(i.anio<anioMin){
          anioMin=i.anio
        }
        if(i.anio>anioMax){
          anioMax=i.anio
        }
        egresosIncidenciasMensualesMap.set(i.anio+"-"+i.mes,i.valor);
      }
    );
    this.egresosServiciosMensualesList.forEach(
      (i)=>{
        if(i.anio<anioMin){
          anioMin=i.anio
        }
        if(i.anio>anioMax){
          anioMax=i.anio
        }
        egresosServiciosMensualesMap.set(i.anio+"-"+i.mes,i.valor);
      }
    );


    // Obtencion del mes minimo y maximo corresponsiente al anio minimo y maximo

    this.ingresosMensualesList.forEach(
      (i)=>{
        if(i.anio==anioMin && i.mes<mesMin){
          mesMin=i.mes
        }
        if(i.anio==anioMax && i.mes>mesMax){
          mesMax=i.mes
        }
      }
    );
    this.egresosIncidenciasMensualesList.forEach(
      (i)=>{
        if(i.anio==anioMin && i.mes<mesMin){
          mesMin=i.mes
        }
        if(i.anio==anioMax && i.mes>mesMax){
          mesMax=i.mes
        }
      }
    );
    this.egresosServiciosMensualesList.forEach(
      (i)=>{
        if(i.anio==anioMin && i.mes<mesMin){
          mesMin=i.mes
        }
        if(i.anio==anioMax && i.mes>mesMax){
          mesMax=i.mes
        }
      }
    );


    // Agreacion de anio y mes de manera numerica y en texto a la lista anioMesValoresMensuales

   //Estructura de la lista
   ///anioMesValoresMensuales=[ [ [anio,mes],'Anio-Mes' ,[ingresos, egresosIncidecia, egresosServicios] ] ,...]
   for(let h= anioMin ;h<=anioMax ;h++){

      if(h==anioMin){
        for(let j=mesMin;j<=12;j++){
          anioMesValoresMensuales.push({anioMesNumero:[h,j],anioMesNombre:h+"-"+this.meses.get(j),ingesosEgresos:[0,0,0]});
        }

      }else if(h==anioMax){
        for(let j=1;j<=mesMax;j++){
          anioMesValoresMensuales.push({anioMesNumero:[h,j],anioMesNombre:h+"-"+this.meses.get(j),ingesosEgresos:[0,0,0]});
        }
      }else{
        for(let j=1;j<=12;j++){
          anioMesValoresMensuales.push({anioMesNumero:[h,j],anioMesNombre:h+"-"+this.meses.get(j),ingesosEgresos:[0,0,0]});
        }

      }

    }

    // Agregacion de ingresos y egresos a la lista anioMesValoresMensuales
    var auxAnioMesText="";
    for(let k=0; k<anioMesValoresMensuales.length; k++){
      auxAnioMesText=anioMesValoresMensuales[k].anioMesNumero[0]+"-"+anioMesValoresMensuales[k].anioMesNumero[1];


      anioMesValoresMensuales[k].ingesosEgresos[0]=ingresosMensualesMap.get(auxAnioMesText)===undefined?0:ingresosMensualesMap.get(auxAnioMesText);
      anioMesValoresMensuales[k].ingesosEgresos[1]=egresosIncidenciasMensualesMap.get(auxAnioMesText)===undefined?0:egresosIncidenciasMensualesMap.get(auxAnioMesText);
      anioMesValoresMensuales[k].ingesosEgresos[2]=egresosServiciosMensualesMap.get(auxAnioMesText)===undefined?0:egresosServiciosMensualesMap.get(auxAnioMesText);

    }
    
    anioMesValoresMensuales.forEach(
      (p)=>{
        this.labelsGraficoBarrasMensual.push(p.anioMesNombre);
        this.ingresosGraficoBarrasMensual.push(p.ingesosEgresos[0]);
        this.egresosIncidenciasGraficoBarrasMensual.push(p.ingesosEgresos[1]);
        this.egresosServicioGraficoBarrasMensual.push(p.ingesosEgresos[2]);
      }
    );
  }

  




  public inicializarDiagramaBarrasHorizontal(){
    this.basicData = {
      labels: this.labelsGraficoBarrasMensual,
      datasets: [
          {
              label: 'Ingresos',
              backgroundColor: '#42A5F5',
              data: this.ingresosGraficoBarrasMensual
          },
          {
              label: 'Egresos para solución de incidencias',
              backgroundColor: '#FFA726',
              data: this.egresosIncidenciasGraficoBarrasMensual
          },
          {
            label: 'Egresos por pago de servicios',
            backgroundColor: '#0DEA74 ',
            data: this.egresosServicioGraficoBarrasMensual
        }
      ]
  };
  this.horizontalOptions = {
    indexAxis: 'y',
    plugins: {
        legend: {
            labels: {
                color: '#495057'
            }
        }
    },
    scales: {
        x: {
            ticks: {
                color: '#495057'
            },
            grid: {
                color: '#ebedef'
            }
        },
        y: {
            ticks: {
                color: '#495057'
            },
            grid: {
                color: '#ebedef'
            }
        }
        
    }
  };
  }

}
