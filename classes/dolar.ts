import { IDollar } from '@/interfaces/IDollar';
import { HandleDate } from './date';

export class HandleDolarData {
  data: IDollar[];
  constructor(data: IDollar[]) {
    this.data = data;
  }

  public bindPreviousData(previousData: IDollar[]): void {
    for (let i = 0; i < this.data.length; i++) {
      for (let j = 0; j < previousData.length; j++) {
        if (this.data[i].casa == previousData[j].casa) {
          const variation: string = this.getVariation(this.data[i].venta, previousData[j].venta);
          this.data[i] = { ...this.data[i], variacion: variation, ventaAnterior: previousData[j].venta };
          break;
        }
      }
    }
  }

  public static formatPrice(price: number): string {
    return price.toString().replace('.', ',');
  }

  public static formatName(name: string): string {
    return name.replace('Contado con liquidación', 'CCL').replace('Bolsa', 'MEP').replace('Mayorista', 'MULC');
  }

  public getData(): IDollar[] {
    return this.data;
  }

  private getVariation(priceToday: number, priceYesterday: number): string {
    return ((priceToday / priceYesterday - 1) * 100).toFixed(2);
  }
}
