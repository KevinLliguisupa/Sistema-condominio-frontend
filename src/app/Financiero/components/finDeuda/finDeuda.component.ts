import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { FinDeudaModel } from '../../models/finDeuda.model';
import { FinReciboModel } from '../../models/finRecibo.model';
import { FinDeudaPagoService } from '../../services/finDeudaPago/finDeudaPago.service';
import { FinPagoService } from '../../services/finPago/finPago.service';

@Component({
  selector: 'app-finDeuda',
  templateUrl: './finDeuda.component.html',
  styleUrls: ['./finDeuda.component.css']
})
export class FinDeudaComponent implements OnInit {

  usuarioEnSesion: string = "1728848373";
  valorAdeudado: number = 0;
  proximaDeuda: any = {
    monto: {
      monValor: 0,
      tipoDeuda: {
        tdeNombre: ""
      }
    }
  }

  //Informacion de pagos del usuario
  pagosRealizados: FinReciboModel[] = [];
  pagoDetalle: FinReciboModel = {
    pagId: 0,
    usuCedula: "",
    usuApellidos: "",
    usuNombres: "",
    usuCorreo: "",
    pagValor: 0,
    cedTesorero: "",
    detalles: [{}]
  };
  size: number = 5;
  page: number = 0;
  totalRecords: number = 0;
  loading: boolean = true;
  detallesDialog: boolean = false;

  //informacion de las deudas del usuario
  deudasConsultadas: FinDeudaModel[] = [];
  deudasSize=6;

  constructor(
    private dudaPagoService: FinDeudaPagoService,
    private pagoService: FinPagoService,
    private currencyPipe: CurrencyPipe
  ) { }

  ngOnInit() {
    this.getProximaDeuda();
    this.getDeudaActual();
    // this.getPagosByPage(5, 0);
  }

  public getDeudaActual() {
    this.dudaPagoService.getValorAdeudado(this.usuarioEnSesion).subscribe({
      next: (response: any) => {
        this.valorAdeudado = response.valorAdeudado;
      }, error(err) {
        console.error(err);
      },
    })
  }

  public getProximaDeuda() {
    this.dudaPagoService.getProximaDeuda(this.usuarioEnSesion).subscribe({
      next: (response: any) => {
        this.proximaDeuda = response;
      }, error(err) {
        console.error(err);
      },
    })
  }

  nextPage(event: LazyLoadEvent) {
    this.loading = true;
    let size = event.rows!
    let page: number = event.first! / event.rows!

    this.pagoService.getPagosByInquilino(this.usuarioEnSesion, size, page).subscribe({
      next: (response: any) => {
        this.pagosRealizados = response.content;
        this.totalRecords = response.totalElements;
      }, error(err) {
        console.error(err);
      }
    })
    setTimeout(() => {
      this.loading = false;
    }, 175);
  }

  public openDialog(pagoId: number) {
    this.detallesDialog = true;

    this.pagoService.getPagoById(pagoId).subscribe({
      next: (response: any) => {
        this.pagoDetalle = response;
      }, error(err) {
        console.error(err);
      },
    })

  }

  public hideDialog() {
    this.detallesDialog = false;
    this.pagoDetalle = {
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

  public nextPageDeudas(event: LazyLoadEvent) {
    this.loading = true;
    let size = event.rows!;
    let page: number = event.first! / event.rows!;

    this.dudaPagoService.getDeudaByInquilino(this.usuarioEnSesion, size, page).subscribe({
      next: (response: any) => {
        for (let i = 0; i < response.content.length; i++) {
          const element: FinDeudaModel = response.content[i];
          if (element.deuSaldo == 0) {
            element.deuSaldoView = 'Cancelado';
          } else {
            element.deuSaldoView = this.currencyPipe.transform(element.deuSaldo, 'USD')!.toString();
          }
        }
        this.deudasConsultadas = response.content;
        this.totalRecords = response.totalElements;
      }, error(err) {
        console.error(err);
      }
    });

    setTimeout(() => {
      this.loading = false;
    }, 175);
  }

}
