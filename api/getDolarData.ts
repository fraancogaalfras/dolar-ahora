import { HandleDate } from '@/classes/date';
import { HandleDolarData } from '@/classes/dolar';
import { Idolars } from '@/interfaces/types';

export const getDolarData = async () => {
  try {
    const date: HandleDate = new HandleDate();
    date.subtractDays(1);

    const todayResponse: Response = await fetch('https://dolarapi.com/v1/dolares', { cache: 'no-store' });
    const yesterdayResponse: Response = await fetch(`https://api.argentinadatos.com/v1/cotizaciones/dolares/${date.getFormattedDateBar()}`, { cache: 'no-store' });

    if (!todayResponse.ok || !yesterdayResponse.ok) {
      return {
        ok: false,
        message: 'Error de conexión',
        status: 408,
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
      message: 'Error interno',
      status: 503,
    };
  }
};
