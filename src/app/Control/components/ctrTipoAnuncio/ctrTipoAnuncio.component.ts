import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { validateForm } from 'src/utils/FormValidation';
import { CtrTipoAnuncioModel, CtrTipoAnuncioModelAdd } from '../../models/ctrTipoAnuncio.model';
import { CtrTipoAnuncioService } from '../../services/ctrTipoAnuncio/ctrTipoAnuncio.service';

@Component({
  selector: 'app-ctrTipoAnuncio',
  templateUrl: './ctrTipoAnuncio.component.html',
  styleUrls: ['./ctrTipoAnuncio.component.css']
})
export class CtrTipoAnuncioComponent implements OnInit {
  tiposAnuncios: CtrTipoAnuncioModel[] = [];
  display = "none";
  newTipoAnuncio: CtrTipoAnuncioModelAdd = {
    tanNombre: '',
  };
  validationRules = {
    required: ['tanNombre'],
  };
  errors = {
    tanNombre: null,
  };

  constructor(
    private _ctrTipoAnuncioService: CtrTipoAnuncioService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.getTipoAnuncios();
  }
  validForm = () => {
    const errors = validateForm(
      {
        tanNombre: this.newTipoAnuncio.tanNombre,
      },
      this.validationRules,
    );
    const validForm = Object.keys(errors).length;
    this.errors = { ...errors };
    return !validForm;
  };

  getTipoAnuncios() {
    this._ctrTipoAnuncioService.getAllTipoAnuncios().subscribe(result => {
      this.tiposAnuncios = result;
    })
  }

  openAddModal() {
    this.newTipoAnuncio = {
      tanNombre: '',
    };
    this.clearErrors();
    this.display = "block";
  }

  openEditModal(data: CtrTipoAnuncioModel) {
    this.newTipoAnuncio = { ...data };
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
        this._ctrTipoAnuncioService.deleteTipoAnuncio(id).subscribe(() => {
          this.messageService.add({ severity: 'success', summary: 'Felicitaciones', detail: 'La acción finalizó con éxito. ' });
          this.getTipoAnuncios();
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
    this._ctrTipoAnuncioService.addTipoAnuncio({
      tanNombre: this.newTipoAnuncio.tanNombre,
    }).subscribe(result => {
      this.messageService.add({ severity: 'success', summary: 'Felicitaciones', detail: 'La acción finalizó con éxito. ' });
      this.onCloseHandled();
      this.getTipoAnuncios();
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Lo sentimos', detail: 'Tuvimos un problema en finalizar tu acción. ' });
    })
  }

  clearErrors() {
    this.errors = {
      tanNombre: null,
    };
  }

}
