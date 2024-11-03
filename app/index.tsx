import DolarPage from '@/components/DolarPage';
import Error from '@/components/Error';
import Loading from '@/components/Loading';
import { Idolares, IdolaresHistorico } from '@/interfaces/types';
import { HandleDate } from '@/utils/date';
import { HandleDolarData } from '@/utils/dolarData';
import { useEffect, useState } from 'react';

export default function App() {
  const [dataToday, setDataToday] = useState<Idolares[]>([
    {
      moneda: '',
      casa: '',
      nombre: '',
      compra: 0,
      venta: 0,
      fechaActualizacion: '',
    },
  ]);
  const [dataYesterday, setDataYesterday] = useState<IdolaresHistorico[]>([
    {
      casa: '',
      compra: 0,
      venta: 0,
      fecha: '',
    },
  ]);
  const [error, setError] = useState<String>('');
  const [loading, setLoading] = useState<Boolean>(true);

  const getDolarData = async () => {
    try {
      const todayResponse = await fetch('https://dolarapi.com/v1/dolares');

      const yesterdayDate = new HandleDate();

      yesterdayDate.subtractDays(4);

      const yesterdayResponse = await fetch(`https://api.argentinadatos.com/v1/cotizaciones/dolares/${yesterdayDate.getFormattedDateBar()}`);

      if (!todayResponse.ok || !yesterdayResponse.ok) {
        setError('Error de conexion');
        setLoading(false);
        return;
      }

      const todayResult = await todayResponse.json();
      const yesterdayResult = await yesterdayResponse.json();

      const test = new HandleDolarData(todayResult);

      test.bindPreviousData(yesterdayResult)

      setDataToday(todayResult);
      setDataYesterday(yesterdayResult);

      setLoading(false);
    } catch (error) {
      setError('Error interno');
      setLoading(false);
    }
  };

  useEffect(() => {
    getDolarData();
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    if (error) {
      return <Error error={error} />;
    }
    return <DolarPage dataToday={dataToday} dataYesterday={dataYesterday} />;
  }
}
