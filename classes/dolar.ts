import { IDollar } from '@/interfaces/IDollar';

export class Dollar {
  data: IDollar[];
  constructor(data: IDollar[]) {
    this.data = data;
  }

  public bindPreviousData(previousData: IDollar[]): void {
    for (let i = 0; i < this.data.length; i++) {
      for (let j = 0; j < previousData.length; j++) {
        if (this.data[i].casa == previousData[j].casa) {
          const variation = this.getVariation(this.data[i].venta, previousData[j].venta);
          this.data[i] = { ...this.data[i], variacion: variation, ventaAnterior: previousData[j].venta, nombre: this.formatName(this.data[i].nombre) };
          break;
        }
      }
    }
  }

  public static formatNumber(number: number, minimumFractionDigits = 1, maximumFractionDigits = 1): string {
    return number.toLocaleString('de-DE', { minimumFractionDigits: minimumFractionDigits, maximumFractionDigits: maximumFractionDigits });
  }

  public getData(): IDollar[] {
    return this.data;
  }

  private getVariation(priceToday: number, priceYesterday: number): number {
    return (priceToday / priceYesterday - 1) * 100;
  }

  private formatName(casa: string): string {
    return casa.replace('Contado con liquidación', 'CCL').replace('Bolsa', 'MEP').replace('Mayorista', 'MULC');
  }
}
