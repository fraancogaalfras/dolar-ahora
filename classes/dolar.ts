import { Idolars, IdolarsBind, IhistoricDolars, Ivalues } from '@/interfaces/types';
import { HandleDate } from './date';

export const valuesToShow: Ivalues = {
  oficial: 'venta',
  blue: 'venta',
  bolsa: 'venta',
  contadoconliqui: 'venta',
  mayorista: 'venta',
  cripto: 'venta',
  tarjeta: 'venta',
};

export class HandleDolarData {
  data: Idolars[] | IdolarsBind[];
  constructor(data: Idolars[]) {
    this.data = data;
  }

  public static getCorrectValue(casa: string): keyof Idolars {
    return valuesToShow[casa as keyof Ivalues] as keyof Idolars;
  }

  public bindPreviousData(previousData: IhistoricDolars[]) {
    let newDataMap = new Map<string, any>();
    const yesterday = new HandleDate();
    yesterday.subtractDays(1);

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
            const correctValue = HandleDolarData.getCorrectValue(this.data[i].casa);
            currentCasaData['variacion'] = this.getVariation(this.data[i][correctValue as keyof Idolars] as number, previousData[j][correctValue as keyof IhistoricDolars] as number);
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
