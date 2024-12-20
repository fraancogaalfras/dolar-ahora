import { HandleDate } from '@/classes/date';
import { HandleDolarData } from '@/classes/dolar';
import { Idolars } from '@/interfaces/types';

export const getDolarData = async () => {
  const DOLLAR_API = 'https://dolarapi.com/v1/dolares';
  const HISTORIC_DOLLAR_API = 'https://api.argentinadatos.com/v1/cotizaciones/dolares';

  try {
    const date: HandleDate = new HandleDate();
    date.subtractDays(1);

    const todayResponse = await fetch(DOLLAR_API, { cache: 'no-store' });
    const yesterdayResponse = await fetch(`${HISTORIC_DOLLAR_API}/${date.getFormattedDateBar()}`, { cache: 'no-store' });

    if (!todayResponse.ok || !yesterdayResponse.ok) {
      return {
        ok: false,
        message: 'Servicio temporalmente inactivo.',
        status: 503,
      };
    }

    const todayResult: Idolars[] = await todayResponse.json();
    const yesterdayResult: Idolars[] = await yesterdayResponse.json();

    const data: HandleDolarData = new HandleDolarData(todayResult);
    data.bindPreviousData(yesterdayResult);

    return {
      ok: true,
      message: 'ok',
      status: 200,
      data: data.getData(),
    };
  } catch (error) {
    return {
      ok: false,
      message: 'Compruebe su conexión e intente nuevamente.',
      status: 408,
    };
  }
};
