import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import Swal from 'sweetalert2';
import { FinDeudaModel } from '../../models/finDeuda.model';
import { FinReciboModel } from '../../models/finRecibo.model';
import { FinDeudaPagoService } from '../../services/finDeudaPago/finDeudaPago.service';
import { FinPagoService } from '../../services/finPago/finPago.service';


@Component({
  selector: 'app-finDeudaPago',
  templateUrl: './finDeudaPago.component.html',
  styleUrls: ['./finDeudaPago.component.css'],
})
export class FinDeudaPagoComponent implements OnInit {

  usuarioEnSesion: string = "0102116381";

  dudasConsultadas: FinDeudaModel[] = [];
  inquilinoBuscado: string = ""
  size: number = 5;
  page: number = 0;
  totalRecords: number = 0;
  loading: boolean = true;
  tipoBoton: string = "success";
  pagarVariasActive: boolean = false;
  pagarActive: boolean = false;
  detallesDialog: boolean = false;

  pago: any = {};

  confirmationMessage: any = {
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#22c55e',
    cancelButtonColor: '#ef4949e6',
    confirmButtonText: 'Cobrar',
    cancelButtonText: 'Cancelar',
    focusConfirm: true
  }

  detallesPago: FinReciboModel = {
    pagId: 0,
    usuCedula: "",
    usuApellidos: "",
    usuNombres: "",
    usuCorreo: "",
    pagValor: 0,
    cedTesorero: "",
    detalles: [{}]
  };

  pagarVariasDialog: boolean = false;
  submitted: boolean = false;

  constructor(
    private dudaPagoService: FinDeudaPagoService,
    private pagoService: FinPagoService,
    private currencyPipe: CurrencyPipe
  ) { }

  ngOnInit() {
  }

  public getDeudasPendientesByInquilino(cedulaInquilino: string, size: number, page: number) {
    this.dudaPagoService.getDeudasPendientesByInquilino(cedulaInquilino, size, page).subscribe({
      next: (response: any) => {
        if (response.content.length > 0) {
          const element: FinDeudaModel = response.content[0]
          element.deuPagoActivo = page === 0 ? true : false;
          if (response.content.length > 1 && this.pagarVariasActive === false) {
            this.pagarVariasActive = true;
          }
          this.dudasConsultadas = response.content;
          this.totalRecords = response.totalElements;
        } else {
          this.dudasConsultadas = [];
          this.pagarVariasActive = false;
          Swal.fire({
            icon: "error",
            title: "¡Inquilino no encontrado o no posee deudas!",
            showConfirmButton: false,
            timer: 1500
          });
        }

      }, error(err) {
        console.error(err);
      }
    });
  }

  public buscarInquilino() {
    this.loading = true;
    this.dudasConsultadas = [];
    this.pagarVariasActive = false;
    // this.size = 5;
    // this.page = 0;
    this.getDeudasPendientesByInquilino(this.inquilinoBuscado, this.size, this.page);
    setTimeout(() => {
      this.loading = false;
    }, 175);
    // const event: LazyLoadEvent = {
    //   rows: 5,
    //   first:0,
    // }
    // this.nextPage(event)
  }

  public nextPage(event: LazyLoadEvent) {
    this.loading = true;
    if (this.inquilinoBuscado != "") {
      let size = event.rows!;
      let page: number = event.first! / event.rows!;
      this.size = size
      this.getDeudasPendientesByInquilino(this.inquilinoBuscado, size, page);
    }
    setTimeout(() => {
      this.loading = false;
    }, 175);
  }

  public pruebas(event: any) {
    console.log(event)
  }

  public cobrarUnaDeuda(deuda: FinDeudaModel) {
    //estructura el mensaje de confirmacion
    let mensajePago = this.confirmationMessage;
    mensajePago.title = "¿Realizar el cobro?";
    mensajePago.html = " Deuda Numero: " + deuda.deuId + " (" + deuda.monto.tipoDeuda?.tdeNombre +
      ") <br/> El valor a cobrar es de: " + this.currencyPipe.transform(deuda.deuSaldo);
    Swal.fire(mensajePago).then((result) => {
      if (result.isConfirmed) {
        this.pagoService.postPagarDeudaById({
          deuId: deuda.deuId,
          cedTesorero: this.usuarioEnSesion
        }).subscribe({
          next: (response: any) => {
            Swal.fire({
              icon: "success",
              title: response.message,
              showConfirmButton: false,
              timer: 1500
            }).then(() => {
              this.detallesPago = response.data
              this.detallesDialog = true;
              this.getDeudasPendientesByInquilino(this.inquilinoBuscado, this.size, 0)
            });
          }, error(err) {
            Swal.fire({
              icon: "error",
              title: "¡Error no fue posible cobrar la deuda!",
              showConfirmButton: false,
              timer: 1500
            });
            console.warn(err);
          }
        })
      }
    });
  }


  public pagarVariasDeudas() {
    //se realizo el envio del formulario
    this.submitted = true;
    //Evalua si los valores ingresados con correctos
    if ((this.pago.pagValor > 0) && this.pago.pagValor != null) {
      //estructura el mensaje de confirmacion
      let mensajePago = this.confirmationMessage;
      mensajePago.title = "¿Realizar el cobro?";
      mensajePago.html = "Se pagará todas las deudas posibles con esta cantidad <br/> El valor a cobrar es: "
        + this.currencyPipe.transform(this.pago.pagValor);

      this.pagarVariasDialog = false;
      Swal.fire(mensajePago).then((result) => {
        if (result.isConfirmed) {
          this.pago.usuCedula = this.inquilinoBuscado;
          this.pago.cedTesorero = this.usuarioEnSesion
          this.pagoService.postPagarVariasDeudas(this.pago).subscribe({
            next: (response: any) => {
              Swal.fire({
                icon: "success",
                title: response.message,
                showConfirmButton: false,
                timer: 1500
              }).then(() => {
                this.detallesPago = response.data
                this.detallesDialog = true;
                this.pago = {}
                this.getDeudasPendientesByInquilino(this.inquilinoBuscado, this.size, 0)
              });
            }, error(err) {
              Swal.fire({
                icon: "error",
                title: "¡Error no fue posible cobrar la deuda!",
                showConfirmButton: false,
                timer: 1500
              });
              console.warn(err);
            }
          })
        }
      });
    }






    // this.pagoService.postPagarDeudaById({
    //   deuId: deuda.deuId,
    //   cedTesorero: this.usuarioEnSesion
    // }).subscribe({
    //   next: (response: any) => {
    //     Swal.fire({
    //       icon: "success",
    //       title: response.message,
    //       showConfirmButton: false,
    //       timer: 1500
    //     }).then(() => {
    //       this.detallesPago = response.data
    //       this.detallesDialog = true;
    //       this.getDeudasPendientesByInquilino(this.inquilinoBuscado, this.size, 0)
    //     });
    //   }, error(err) {
    //     Swal.fire({
    //       icon: "error",
    //       title: "¡Error no fue posible cobrar la deuda!",
    //       showConfirmButton: false,
    //       timer: 1500
    //     });
    //     console.warn(err);
    //   }
    // })




    //   {
    //     "usuCedula": "1728848373",
    //     "pagValor": 150,
    //     "cedTesorero": "0102116381"
    // }

  }


  public hideDialog() {
    this.detallesDialog = false;
    this.detallesPago = {
      pagId: 0,
      usuCedula: "",
      usuApellidos: "",
      usuNombres: "",
      usuCorreo: "",
      pagValor: 0,
      cedTesorero: "",
      detalles: [{}]
    };
  }


  public hidePagarVariasDialog() {
    this.pagarVariasDialog = false;
    this.submitted = false;
  }

  public openPagarVarias() {
    this.pago = {}
    this.submitted = false;
    this.pagarVariasDialog = true;
  }



}
