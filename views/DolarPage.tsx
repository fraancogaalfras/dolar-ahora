import { FlatList } from 'react-native';
import CardDolar from '@/components/dolar/CardDolar';
import { IdolarsBind, Ierror } from '@/interfaces/types';
import { useEffect, useState } from 'react';
import { getDolarData } from '@/api/getDolarData';
import Loading from '@/components/Loading';
import ErrorPage from '@/views/ErrorPage';

export default function DolarPage() {
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
          message: result.message,
          status: result.status,
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

  if (loading || !loading) {
    return <Loading />;
  }

  // if (error.message.length > 0) {
  //   return <ErrorPage error={error} />;
  // }

  // return <FlatList data={data} renderItem={({ item }) => <CardDolar data={item} />} contentContainerStyle={{ gap: 30, alignItems: 'center' }} showsVerticalScrollIndicator={false} />;
}
