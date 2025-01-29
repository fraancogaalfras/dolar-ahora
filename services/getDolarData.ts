import { getDolarData } from '@/api/getDolarData';
import { HandleDate } from '@/classes/date';
import { IDollar } from '@/interfaces/IDollar';
import { router } from 'expo-router';

const getLastUpdate = (data: IDollar[]) => {
  try {
    // Se toma el CCL como referencia.
    const lastUpdateFormatted = new HandleDate(new Date(data[3].fechaActualizacion)).getFormattedDateBarWithTime();
    router.setParams({ lastUpdate: lastUpdateFormatted });
  } catch (e: any) {
    router.setParams({ lastUpdate: 'Cargando información...' });
  }
};

export const getDollars = async () => {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 1000000));
    const data = await getDolarData();
    getLastUpdate(data);
    return data;
  } catch (e: any) {
    throw new Error(e.message);
  } finally {
    router.setParams({ refreshing: 'false' });
  }
};
