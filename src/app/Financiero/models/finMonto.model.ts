import { FinTipoDeudaModel } from "./finTipoDeuda.model";

export interface FinMontModel {
    monId?: number;
    monValor: number;
    monFechaAsignacion?: Date;
    monFechaFin?: String;
    tipoDeuda?: FinTipoDeudaModel;
}
