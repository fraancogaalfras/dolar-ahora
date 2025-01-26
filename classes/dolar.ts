import { IDollars } from '@/interfaces/types';

export class HandleDolarData {
  data: IDollars[];
  constructor(data: IDollars[]) {
    this.data = data;
  }

  public bindPreviousData(previousData: IDollars[]): void {
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

  public getData(): IDollars[] {
    return this.data;
  }

  private getVariation(priceToday: number, priceYesterday: number): string {
    return ((priceToday / priceYesterday - 1) * 100).toFixed(2);
  }
}
