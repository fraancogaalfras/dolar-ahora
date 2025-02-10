import { NetworkError } from '@/classes/customError';
import { HandleDate } from '@/classes/date';
import { Dollar } from '@/classes/dollar';
import { DOLLAR_API, HISTORIC_DOLLAR_API } from '@/constants/constants';
import { IDollar } from '@/interfaces/IDollar';

export const getDolarData = async () => {
  try {
    const date = new HandleDate();
    date.subtractDays(1);

    const todayResponse = await fetch(DOLLAR_API);
    const yesterdayResponse = await fetch(`${HISTORIC_DOLLAR_API}/${date.getFormattedDateBar()}`);

    if (!todayResponse.ok || !yesterdayResponse.ok) {
      throw new NetworkError('Servicio temporalmente inactivo.');
    }

    const todayResult: IDollar[] = await todayResponse.json();
    const yesterdayResult: IDollar[] = await yesterdayResponse.json();

    if (todayResult.length == 0 || yesterdayResult.length == 0) {
      throw new NetworkError('Servicio temporalmente inactivo.');
    }

    const data = new Dollar(todayResult);
    data.bindPreviousData(yesterdayResult);

    return data.getData();
  } catch (e: any) {
    if (e instanceof NetworkError) {
      throw new Error(e.message);
    }
    throw new Error('Compruebe su conexión e intente nuevamente');
  }
};
