import { TCasa } from "@/types/TCasa";

export interface IDollar {
  moneda: string;
  casa: TCasa;
  nombre: string;
  compra: number;
  variacion: number;
  venta: number;
  ventaAnterior: number;
  fechaActualizacion: string;
}
