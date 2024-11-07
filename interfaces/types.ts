export interface Idolars {
  moneda: string;
  casa: string;
  nombre: string;
  compra: number;
  venta: number;
  fechaActualizacion: string;
}

export interface IhistoricDolars {
  casa: string;
  compra: number;
  venta: number;
  fecha: string;
}

export interface IdolarsBind {
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

export interface IdolarsDates {
  [fecha: string]: {
    compra: number;
    venta: number;
  };
}

export interface Ierror {
  message: string;
  status: number;
}

export interface Ivalues {
  oficial: string;
  blue: string;
  bolsa: string;
  contadoconliqui: string;
  mayorista: string;
  cripto: string;
  tarjeta: string;
}

export interface IColours {
  negative: string;
  positive: string;
  equal: string;
}
