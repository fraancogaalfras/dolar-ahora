import { getDolarData } from '@/api/getDolarData';
import { HandleDate } from '@/classes/date';
import { router } from 'expo-router';

export const getLastUpdate = async () => {
  try {
    // Se toma el CCL como referencia.
    const data = await getDollars();
    const lastUpdateFormatted = new HandleDate(new Date(data[3].fechaActualizacion)).getFormattedDateBarWithTime();
    return lastUpdateFormatted;
  } catch (e: any) {
    return 'Cargando información...';
  }
};

export const getDollars = async () => {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 1000000));
    const data = await getDolarData();
    return data;
  } catch (e: any) {
    throw new Error(e.message);
  } finally {
    router.setParams({ refreshing: 'false' });
  }
};
