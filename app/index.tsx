import DolarPage from '@/components/DolarPage';
import Error from '@/components/Error';
import Loading from '@/components/Loading';
import { IdolarsBind, Ierror } from '@/interfaces/types';
import { getDolarData } from '@/utils/getDolarData';
import { useEffect, useState } from 'react';

export default function App() {
  const [data, setData] = useState<IdolarsBind[]>([
    {
      moneda: '',
      casa: '',
      nombre: '',
      compra: 0,
      venta: 0,
      fechaActualizacion: '',
      variacion: '',
      historico: {
        '': {
          compra: 0,
          venta: 0,
        },
      },
    },
  ]);
  const [error, setError] = useState<Ierror>({
    message: '',
    status: 0,
  });
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    const getFetch = async () => {
      const result = await getDolarData();
      if (!result.ok) {
        setError({
          message: error.message,
          status: error.status,
        });
        setLoading(false);
        return;
      }
      if (result.data) {
        setData(result.data);
        setLoading(false);
      }
    };
    getFetch();
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    if (error.status) {
      return <Error error={error} />;
    }
    return <DolarPage data={data} />;
  }
}
