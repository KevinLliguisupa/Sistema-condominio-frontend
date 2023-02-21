export interface FinResumenEgresoIncidencias {
    anio: number;
    mes: number;
    codigo: number;
    servicio: string;
    valor: number;
    incidencias: number;
}
export interface FinResumenEgresoServicios {
    anio: number;
    mes: number;
    codigo: number;
    servicio: string;
    valor: number;
}

export interface FinValorMensual {
    anio: number;
    mes: number;
    valor: number;
}

export interface FinValorTotal {
    valor: number;
}
