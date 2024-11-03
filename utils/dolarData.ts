import { Idolares, IdolaresBind, IdolaresHistorico } from '@/interfaces/types';

export class HandleDolarData {
  data: Idolares[] | IdolaresBind[];
  constructor(data: Idolares[]) {
    this.data = data;
  }

  public bindPreviousData(previousData: IdolaresHistorico[]) {
    let newData = [];
    for (let i = 0; i < this.data.length; i++) {
      for (let j = 0; j < previousData.length; j++) {
        if (this.data[i].casa == previousData[j].casa) {
          newData.push({
            ...this.data[i],
            variacion: this.getVariation(this.data[i].venta, previousData[j].venta),
            historico: {
              [previousData[j].fecha]: {
                compra: previousData[j].compra,
                venta: previousData[j].venta,
              },
            },
          });
        }
      }
    }

    this.data = newData;
  }

  private getVariation(priceToday: number, priceYesterday: number): string {
    return ((priceToday / priceYesterday - 1) * 100).toFixed(2);
  }
}
