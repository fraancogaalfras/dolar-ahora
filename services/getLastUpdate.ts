import { HandleDate } from '@/classes/date';

// Se toma el CCL como referencia.

export const getLastUpdate = (data: any) => {
  try {
    if (!data) {
      return 'Cargando...';
    }
    const todayDate = new HandleDate();
    const lastUpdate = new HandleDate(new Date(data[3].fechaActualizacion));
    const areDatesEquals = todayDate.getFormattedDateBar() === lastUpdate.getFormattedDateBar();
    return areDatesEquals ? `Hoy, ${lastUpdate.getTime()}` : lastUpdate.getFormattedDateBarWithTime();
  } catch (e: any) {
    return 'Cargando...';
  }
};
