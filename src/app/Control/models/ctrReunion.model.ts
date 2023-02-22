import { CtrLugarModel } from "./ctrLugar.model";

export interface CtrReunionModel {
    reuId: number;
    usuCedula: string;
    reuFecha: Date;
    reuEstado: boolean;
    lugId: CtrLugarModel;
}

export interface CtrReunionModelSave {
    usuCedula?: string;
    reuFecha: Date;
    lugId: number;
    reuId?: number;
}

