export interface IDollars {
  moneda: string;
  casa: string;
  nombre: string;
  compra: number;
  variacion: string;
  venta: number;
  ventaAnterior: number;
  fechaActualizacion: string;
}

export interface Ierror {
  message: string;
  status: number;
}

export interface IColours {
  negative: string;
  positive: string;
  equal: string;
}
