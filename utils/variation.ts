import { Idolares, IdolaresHistorico } from '@/interfaces/types';

export default function getDolarVariation(dataToday: Idolares[], dataYesterday: IdolaresHistorico[]): any {
  let variationByCasa = {};

  for (let i = 0; i < dataToday.length; i++) {
    for (let j = 0; j < dataYesterday.length; j++) {
      if (dataToday[i].casa == dataYesterday[j].casa) {
        const variation = (dataToday[i].venta / dataYesterday[j].venta - 1) * 100;
        variationByCasa = { ...variationByCasa, [dataToday[i].casa]: variation.toFixed(2) };
      }
    }
  }

  return variationByCasa;
}
