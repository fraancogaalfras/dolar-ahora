import { TCasa } from '@/types/TCasa';

export interface IHistoricDollar {
  casa: TCasa;
  compra: number;
  venta: number;
  fecha: string;
  variation?: number;
}
