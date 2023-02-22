import { Component, OnInit } from '@angular/core';
import { ConfirmationService, Message, MessageService } from 'primeng/api';
import { validateForm } from 'src/utils/FormValidation';
import { CtrAnuncioModel, CtrAnuncioModelCreate } from '../../models/ctrAnuncio.model';
import { CtrTipoAnuncioModel } from '../../models/ctrTipoAnuncio.model';
import { CtrAnuncioService } from '../../services/ctrAnuncio/ctrAnuncio.service'
import { CtrTipoAnuncioService } from '../../services/ctrTipoAnuncio/ctrTipoAnuncio.service';

@Component({
  selector: 'app-ctrAnuncio',
  templateUrl: './ctrAnuncio.component.html',
  styleUrls: ['./ctrAnuncio.component.css']
})
export class CtrAnuncioComponent implements OnInit {
  anuncios: CtrAnuncioModel[] = [];
  tiposAnuncios: CtrTipoAnuncioModel[] = [];
  msgs: Message[] = [];
  display = "none";
  isEdit: boolean = false;
  newAnuncio: CtrAnuncioModelCreate = {
    ancId: undefined,
    usuCedula: '',
    ancTitulo: '',
    ancDescripcion: '',
    ancFechaPublicacion: new Date(),
    ancPrioridad: '',
    ancEstado: false,
    tanId: 0,
  };
  validationRules = {
    required: ['ancTitulo', 'ancDescripcion', 'ancPrioridad', 'tanId'],
  };
  errors = {
    ancTitulo: null,
    ancDescripcion: null,
    ancPrioridad: null,
    tanId: null
  };

  constructor(
    private _ctrAnuncioService: CtrAnuncioService,
    private _ctrTipoAnuncioService: CtrTipoAnuncioService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.getAnuncios();
    this.getTipoAnuncios();
  }
  validForm = () => {
    const errors = validateForm(
      {
        ancTitulo: this.newAnuncio.ancTitulo,
        ancDescripcion: this.newAnuncio.ancDescripcion,
        ancPrioridad: this.newAnuncio.ancPrioridad,
        tanId: this.newAnuncio.tanId
      },
      this.validationRules,
    );
    const validForm = Object.keys(errors).length;
    this.errors = { ...errors };
    return !validForm;
  };

  getAnuncios() {
    this._ctrAnuncioService.getAllAnuncios().subscribe(result => {
      this.anuncios = result;
    })
  }
  getTipoAnuncios() {
    this._ctrTipoAnuncioService.getAllTipoAnuncios().subscribe(result => {
      this.tiposAnuncios = result;
    })
  }

  openAddModal() {
    this.newAnuncio = {
      ancId: undefined,
      usuCedula: '',
      ancTitulo: '',
      ancDescripcion: '',
      ancFechaPublicacion: new Date(),
      ancPrioridad: '',
      ancEstado: false,
      tanId: 0,
    };
    this.clearErrors();
    this.isEdit = false;
    this.display = "block";
  }

  openEditModal(data: CtrAnuncioModel) {
    this.newAnuncio = { ...data, tanId: data.tanId.tanId };
    this.isEdit = true;
    this.clearErrors();
    this.display = "block";
  }

  delete(id?: number): void {
    if (!id) return;
    this.confirmationService.confirm({
      message: '¿Estás seguro de eliminar este registro?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Aceptar',
      acceptButtonStyleClass: 'btn btn-danger',
      rejectLabel: 'Cancelar',
      rejectButtonStyleClass: 'btn btn-secondary',
      accept: () => {
        this._ctrAnuncioService.deleteAnuncio(id).subscribe((result) => {
          this.getAnuncios();
          this.messageService.add({ severity: 'success', summary: 'Felicitaciones', detail: 'La acción finalizó con éxito. ' });
        }, error => {
          this.messageService.add({ severity: 'error', summary: 'Lo sentimos', detail: 'Tuvimos un problema en finalizar tu acción. ' });
        });
      }
    });
  }
  onCloseHandled() {
    this.display = "none";
  }
  onSave() {
    const isValidForm = this.validForm();
    if (!isValidForm) {
      return;
    }
    if (this.isEdit) {
      this._ctrAnuncioService.updateAnuncio({
        ancId: this.newAnuncio.ancId ? this.newAnuncio.ancId : 0,
        ancTitulo: this.newAnuncio.ancTitulo,
        ancDescripcion: this.newAnuncio.ancDescripcion,
        ancPrioridad: this.newAnuncio.ancPrioridad,
        tanId: this.newAnuncio.tanId,
      }).subscribe(result => {
        this.messageService.add({ severity: 'success', summary: 'Felicitaciones', detail: 'La acción finalizó con éxito. ' });
        this.onCloseHandled();
        this.getAnuncios();
      }, error => {
        this.messageService.add({ severity: 'error', summary: 'Lo sentimos', detail: 'Tuvimos un problema en finalizar tu acción. ' });
      })
    } else {
      this._ctrAnuncioService.addAnuncio({
        usuCedula: '0850055237',
        ancTitulo: this.newAnuncio.ancTitulo,
        ancDescripcion: this.newAnuncio.ancDescripcion,
        ancPrioridad: this.newAnuncio.ancPrioridad,
        tanId: this.newAnuncio.tanId,
      }).subscribe(result => {
        this.messageService.add({ severity: 'success', summary: 'Felicitaciones', detail: 'La acción finalizó con éxito. ' });
        this.onCloseHandled();
        this.getAnuncios();
      }, error => {
        this.messageService.add({ severity: 'error', summary: 'Lo sentimos', detail: 'Tuvimos un problema en finalizar tu acción. ' });
      })
    }
  }

  clearErrors() {
    this.errors = {
      ancTitulo: null,
      ancDescripcion: null,
      ancPrioridad: null,
      tanId: null
    };
  }
}
