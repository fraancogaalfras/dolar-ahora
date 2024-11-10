import { FlatList, useWindowDimensions } from 'react-native';
import CardDolar from '@/components/dolar/CardDolar';
import { IdolarsBind, Ierror } from '@/interfaces/types';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { getDolarData } from '@/api/getDolarData';
import Loading from '@/components/Loading';
import ErrorPage from '@/views/ErrorPage';

export default function DolarPage() {
  const { width, height } = useWindowDimensions();

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
  const getNumColumns = useMemo(() => {
    return width > 1000 ? 3 : width > 500 ? 2 : 1;
  }, [width]);

  return loading ? (
    <Loading />
  ) : error.message.length > 0 ? (
    <ErrorPage error={error} />
  ) : (
    <FlatList
      data={data}
      renderItem={renderItem}
      key={getNumColumns}
      keyExtractor={(item) => item.nombre}
      getItemLayout={(data, index) => ({ length: 125, offset: 125 * index, index })}
      contentContainerStyle={[
        {
          gap: 30,
          alignItems: 'center',
        },
        height > 800 && {
          justifyContent: 'center',
          height: '100%',
          width: '100%'
        },
      ]}
      numColumns={getNumColumns}
      columnWrapperStyle={width > 600 ? { columnGap: 30 } : null}
      showsVerticalScrollIndicator={false}
      initialNumToRender={7}
    />
  );
}

// const style = StyleSheet.create({
//     list_style_h: {
//       gap: 30,
//       alignItems: 'center',
//       justifyContent: 'center'
//     },
//     list_style_v: {
//       gap: 30,
//       alignItems: 'center',
//     }
// })
