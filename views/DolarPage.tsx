import { FlatList, RefreshControl, useWindowDimensions } from 'react-native';
import CardDolar from '@/components/dolar/CardDolar';
import { IdolarsBind, Ierror } from '@/interfaces/types';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { getDolarData } from '@/api/getDolarData';
import Loading from '@/components/Loading';
import ErrorPage from '@/views/ErrorPage';
import { colours } from '@/app/_layout';

export default function DolarPage() {
  const { width, height } = useWindowDimensions();
  const [data, setData] = useState<IdolarsBind[]>();
  const [error, setError] = useState<Ierror>();
  const [loading, setLoading] = useState<Boolean>(true);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
  }, []);

  useEffect(() => {
    const getFetch = async () => {
      const result = await getDolarData();
      if (!result.ok) {
        setError({
          message: result.message,
          status: result.status,
        });
        setLoading(false);
        setRefreshing(false);
        return;
      }
      if (result.data) {
        setData(result.data);
        setLoading(false);
        setRefreshing(false);
      }
    };
    getFetch();
  }, [refreshing]);

  const renderItem = useCallback(({ item }: { item: IdolarsBind }) => <CardDolar data={item} />, [data]);
  const getNumColumns = useMemo(() => {
    return width > 1000 ? 3 : width > 500 ? 2 : 1;
  }, [width]);

  return loading ? (
    <Loading />
  ) : error ? (
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
        height > 1000 && {
          justifyContent: 'center',
          height: '100%',
          width: '100%',
        },
      ]}
      numColumns={getNumColumns}
      columnWrapperStyle={width > 600 ? { columnGap: 30 } : null}
      showsVerticalScrollIndicator={false}
      initialNumToRender={7}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={[colours.positive, colours.equal]}
          progressBackgroundColor={'#000'}
          tintColor={colours.positive}
          title={'Buscando información...'}
        />
      }
    />
  );
}
