import { Component, OnInit } from '@angular/core';
import { FinMontModel } from '../../models/finMonto.model';
import { FinMontoService } from '../../services/finMonto/finMonto.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FinTipoDeudaModel } from '../../models/finTipoDeuda.model';
import { FinTipoDeudaService } from '../../services/finTipoDeuda/finTipoDeuda.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-finMonto',
  templateUrl: './finMonto.component.html',
  styleUrls: ['./finMonto.component.min.css'],

  providers: [ConfirmationService, MessageService]
})
export class FinMontoComponent implements OnInit {

  alicuotaActiva: FinMontModel = {monValor:0}
  multaActiva: FinMontModel = {monValor:0}
  montos: FinMontModel[] = [];
  tiposDeuda: FinTipoDeudaModel[] = [];
  monto: FinMontModel = {
    monValor: 0
  };
  montoDialog: boolean = false;
  submitted: boolean = false;

  swalMessage: any = {
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#22c55e',
    cancelButtonColor: '#ef4949e6',
    confirmButtonText: 'Crear',
    cancelButtonText: 'Cancelar',
    focusConfirm: true
  }

  constructor(
    private montoService: FinMontoService,
    private tipoDeudaService: FinTipoDeudaService
  ) { }

  public ngOnInit(): void {
    this.getAllMontos();
    this.getAllTiposDeuda();
    this.getAlicuotaActiva();
    this.getMultaActiva();
  }

  public getAllMontos() {
    this.montoService.getAllMontos().subscribe(
      (response: any) => {
        for (let i = 0; i < response.length; i++) {
          const element: FinMontModel = response[i];
          if (element.monFechaFin == null) {
            element.monFechaFin = 'Activo';
          }
        }

        this.montos = response;
      }, (error) => console.warn(error)
    )
  }

  public getAllTiposDeuda() {
    this.tipoDeudaService.getAllTiposDeuda().subscribe(
      (response: any) => {
        this.tiposDeuda = response;
      }, (error) => console.warn(error)
    )
  }

  public getAlicuotaActiva(){
    this.montoService.getActivosByTipo(1).subscribe({
      next: (response: any) => {
        this.alicuotaActiva=response;
      },
      error(error) {
        console.warn(error);
      }
    });
  }

  public getMultaActiva(){
    this.montoService.getActivosByTipo(2).subscribe({
      next: (response: any) => {
        this.multaActiva=response;
      },
      error(error) {
        console.warn(error);
      }
    });
  }

  public saveMonto() {
    //se realizo el envio del formulario
    this.submitted = true;
    //Evalua si los valores ingresados con correctos
    if ((this.monto.monValor > 0) && this.monto.tipoDeuda != null) {
      //estructura el mensaje de confirmacion
      let mensajeCreacion = this.swalMessage;
      mensajeCreacion.title = "Crear nuevo valor a cobrar.";
      mensajeCreacion.html = "Este será el valor de cobro por defecto.<br/>"
        + this.monto.tipoDeuda.tdeNombre + ": " + this.monto.monValor;
      //oculta el formulario
      this.montoDialog = false;
      Swal.fire(mensajeCreacion).then((result) => {
        if (result.isConfirmed) {
          //Crea el monto y lanza la alerta del resultado
          this.montoService.postNewMonto({
            monValor: this.monto.monValor,
            tdeId: this.monto.tipoDeuda?.tdeId
          }).subscribe({
            next: (response: any) => {
              Swal.fire({
                icon: "success",
                title: response.message,
                showConfirmButton: false,
                timer: 1500
              });
              this.getAllMontos();
              this.getMultaActiva();
              this.getAlicuotaActiva();
            }, error(err) {
              Swal.fire({
                icon: "error",
                title: "¡Error no fue posible crear el valor!",
                showConfirmButton: false,
                timer: 1500
              });
              console.warn(err);
            }
          });
        }
      });
    }
  }

  public hideDialog() {
    this.montoDialog = false;
    this.submitted = false;
  }

  public openNew() {
    this.monto = {
      monValor: 0
    };
    this.submitted = false;
    this.montoDialog = true;
  }

}
