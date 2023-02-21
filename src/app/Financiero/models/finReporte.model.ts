export interface FinResumenEgresoIncidenciasModel {
    anio: number;
    mes: number;
    codigo: number;
    servicio: string;
    valor: number;
    incidencias: number;
}
export interface FinResumenEgresoServiciosModel {
    anio: number;
    mes: number;
    codigo: number;
    servicio: string;
    valor: number;
}

export interface FinValorMensualModel {
    anio: number;
    mes: number;
    valor: number;
}

export interface FinValorTotalModel {
    valor: number;
}

export interface FinAnioMesValoresMensualesModel {
    anioMesNumero: [number, number];
    anioMesNombre: string;
    ingesosEgresos: [number,number,number]
}

export interface FinResumenEgresoIncidenciasTablaModel{
    tipoServicio:string;
    valor:number;
    numIncidencias:number;
}

export interface FinResumenEgresoServiciosTablaModel {
    tipoServicio:string;
    valor:number;
}
