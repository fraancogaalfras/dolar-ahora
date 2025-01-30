import { getDolarData } from '@/api/getDolarData';
import { HandleDate } from '@/classes/date';
import { router } from 'expo-router';

export const getLastUpdate = async () => {
  try {
    // Se toma el CCL como referencia.
    const data = await getDollars();
    const todayDate = new HandleDate();
    const lastUpdate = new HandleDate(new Date(data[3].fechaActualizacion));
    return todayDate.getFormattedDateBar() === lastUpdate.getFormattedDateBar() ? `Hoy, ${lastUpdate.getTime()}` : lastUpdate.getFormattedDateBarWithTime();
  } catch (e: any) {
    return 'Cargando información...';
  }
};

export const getDollars = async () => {
  try {
    const data = await getDolarData();
    return data;
  } catch (e: any) {
    throw new Error(e.message);
  } finally {
    router.setParams({ refreshing: 'false' });
  }
};
