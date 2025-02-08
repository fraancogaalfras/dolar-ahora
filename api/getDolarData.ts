import { NetworkError } from '@/classes/customError';
import { HandleDate } from '@/classes/date';
import { Dollar } from '@/classes/dolar';
import { IDollar } from '@/interfaces/IDollar';

export const getDolarData = async () => {
  const DOLLAR_API = 'https://dolarapi.com/v1/dolares';
  const HISTORIC_DOLLAR_API = 'https://api.argentinadatos.com/v1/cotizaciones/dolares';

  try {
    const date: HandleDate = new HandleDate();
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

    const data: Dollar = new Dollar(todayResult);
    data.bindPreviousData(yesterdayResult);

    return data.getData();
  } catch (e: any) {
    if (e instanceof NetworkError) {
      throw new Error(e.message);
    }
    throw new Error('Compruebe su conexión e intente nuevamente');
  }
};
