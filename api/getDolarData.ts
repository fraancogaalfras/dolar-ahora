import { HandleDolarData } from '@/classes/dolar';

export const getDolarData = async () => {
  try {
    const todayResponse = await fetch('https://dolarapi.com/v1/dolares', {cache: "no-store"});
    const allResponse = await fetch(`https://api.argentinadatos.com/v1/cotizaciones/dolares/`, {cache: "no-store"});

    if (!todayResponse.ok || !allResponse.ok) {
      return {
        ok: false,
        message: 'Error de conexión',
        status: 408,
      };
    }

    const todayResult = await todayResponse.json();
    const allResult = await allResponse.json();

    const data = new HandleDolarData(todayResult);
    data.bindPreviousData(allResult);

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
