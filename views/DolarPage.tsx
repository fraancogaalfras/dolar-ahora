import { Dimensions, FlatList, StyleSheet } from 'react-native';
import CardDolar from '@/components/dolar/CardDolar';
import { IdolarsBind, Ierror } from '@/interfaces/types';
import { useCallback, useEffect, useState } from 'react';
import { getDolarData } from '@/api/getDolarData';
import Loading from '@/components/Loading';
import ErrorPage from '@/views/ErrorPage';

export default function DolarPage() {
  const windowWidth = Dimensions.get('window').width;

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

  const renderItem = useCallback(({ item }: { item: IdolarsBind }) => <CardDolar data={item} />, [data]);

  return loading ? (
    <Loading />
  ) : error.message.length > 0 ? (
    <ErrorPage error={error} />
  ) : (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.nombre}
      getItemLayout={(data, index) => ({ length: 125, offset: 125 * index, index })}
      contentContainerStyle={{
        gap: 30,
        alignItems: 'center',
      }}
      numColumns={windowWidth > 1000 ? 3 : windowWidth > 500 ? 2 : 1}
      columnWrapperStyle={windowWidth > 600 ? { columnGap: 30 } : null}
      showsVerticalScrollIndicator={false}
      initialNumToRender={7}
    />
  );
}
