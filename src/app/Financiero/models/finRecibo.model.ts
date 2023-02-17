import { FinReciboDetalleModel } from "./finReciboDetalle.model";

export interface FinReciboModel {
    pagId: number,
    usuCedula: string,
    usuApellidos: string,
    usuNombres: string,
    usuCorreo: string,
    pagFecha?: Date,
    pagValor: number,
    cedTesorero: string,
    detalles: [FinReciboDetalleModel]

}