import { Idolars, IdolarsBind, IhistoricDolars } from '@/interfaces/types';
import { HandleDate } from './date';

export class HandleDolarData {
  data: Idolars[] | IdolarsBind[];
  constructor(data: Idolars[]) {
    this.data = data;
  }

  public bindPreviousData(previousData: IhistoricDolars[]) {
    let newDataMap = new Map<string, any>();
    const yesterday = new HandleDate();
    yesterday.subtractDays(5);

    for (let i = 0; i < this.data.length; i++) {
      const currentCasa = this.data[i].casa;

      if (!newDataMap.has(currentCasa)) {
        newDataMap.set(currentCasa, {
          ...this.data[i],
          historico: {},
        });
      }

      const currentCasaData = newDataMap.get(currentCasa);
      for (let j = 0; j < previousData.length; j++) {
        if (previousData[j].casa === currentCasa) {
          if (previousData[j].fecha === yesterday.getFormattedDateDash()) {
            currentCasaData['variacion'] = this.getVariation(this.data[i].venta, previousData[j].venta);
          }
          currentCasaData.historico[previousData[j].fecha] = {
            compra: previousData[j].compra,
            venta: previousData[j].venta,
          };
        }
      }
    }

    this.data = Array.from(newDataMap.values());
  }

  public getData(): IdolarsBind[] {
    return this.data as IdolarsBind[];
  }

  private getVariation(priceToday: number, priceYesterday: number): string {
    return ((priceToday / priceYesterday - 1) * 100).toFixed(2);
  }
}
