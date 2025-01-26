import { HandleDate } from '@/classes/date';
import { HandleDolarData } from '@/classes/dolar';
import { IDollars } from '@/interfaces/types';

export const getDolarData = async () => {
  const DOLLAR_API = 'https://dolarapi.com/v1/dolares';
  const HISTORIC_DOLLAR_API = 'https://api.argentinadatos.com/v1/cotizaciones/dolares';

  try {
    const date: HandleDate = new HandleDate();
    date.subtractDays(1);

    const todayResponse = await fetch(DOLLAR_API, { cache: 'no-store' });
    const yesterdayResponse = await fetch(`${HISTORIC_DOLLAR_API}/${date.getFormattedDateBar()}`, { cache: 'no-store' });

    if (!todayResponse.ok || !yesterdayResponse.ok) {
      throw new Error('Servicio temporalmente inactivo.');
    }

    const todayResult: IDollars[] = await todayResponse.json();
    const yesterdayResult: IDollars[] = await yesterdayResponse.json();

    const data: HandleDolarData = new HandleDolarData(todayResult);
    data.bindPreviousData(yesterdayResult);

    return data.getData();
  } catch (e: any) {
    throw new Error('Compruebe su conexión e intente nuevamente.');
  }
};
