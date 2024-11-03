export interface Idolares {
  moneda: string;
  casa: string;
  nombre: string;
  compra: number;
  venta: number;
  fechaActualizacion: string;
}

export interface IdolaresHistorico {
  casa: string;
  compra: number;
  venta: number;
  fecha: string;
}

export interface IdolaresBind {
  moneda: string;
  casa: string;
  nombre: string;
  compra: number;
  venta: number;
  fechaActualizacion: string;
  variacion: any;
  historico: {
    [fecha: string]: {
      compra: number;
      venta: number;
    };
  };
}
