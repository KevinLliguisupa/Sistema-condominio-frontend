import { CtrTipoAnuncioModel } from "./ctrTipoAnuncio.model";

export interface CtrAnuncioModel {
    ancId?: number;
    usuCedula: string;
    ancTitulo: string;
    ancDescripcion: string;
    ancFechaPublicacion: Date;
    ancPrioridad: string;
    ancEstado: boolean;
    tanId: CtrTipoAnuncioModel;
}

export interface CtrAnuncioModelCreate {
    ancId?: number;
    usuCedula: string;
    ancTitulo: string;
    ancDescripcion: string;
    ancFechaPublicacion: Date;
    ancPrioridad: string;
    ancEstado: boolean;
    tanId: number;
}

export interface CtrAnuncioModelAdd {
    usuCedula: string;
    ancTitulo: string;
    ancDescripcion: string;
    ancPrioridad: string;
    tanId: number;
}
export interface CtrAnuncioModelUpdate {
    ancId: number;
    ancTitulo: string;
    ancDescripcion: string;
    ancPrioridad: string;
    tanId: number;
}