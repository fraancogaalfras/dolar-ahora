import { AppState, FlatList, RefreshControl, useWindowDimensions } from 'react-native';
import CardDolar from '@/components/dolar/CardDolar';
import { Idolars, Ierror } from '@/interfaces/types';
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { getDolarData } from '@/api/getDolarData';
import Loading from '@/components/loading/Loading';
import ErrorPage from '@/views/ErrorPage';
import { colours } from '@/app/_layout';

export default function DolarPage() {
  const currentState = useRef(AppState.currentState);

  const [appState, setAppState] = useState(currentState.current);
  const { width, height } = useWindowDimensions();
  const [data, setData] = useState<Idolars[]>();
  const [error, setError] = useState<Ierror>();
  const [loading, setLoading] = useState<Boolean>(true);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
  }, []);

  useEffect(() => {
    const handleChange = AppState.addEventListener('change', (changedState) => {
      currentState.current = changedState;
      setAppState(currentState.current);
    });

    return () => {
      handleChange.remove();
    };
  }, []);

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

  useLayoutEffect(() => {
    if (appState == 'active') {
      setLoading(true);
      getFetch();
    }
  }, [refreshing, appState]);

  const renderItem = useCallback(({ item }: { item: Idolars }) => <CardDolar data={item} />, [data]);
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
      keyExtractor={(item) => item.casa}
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
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={[colours.positive, colours.equal]} progressBackgroundColor={'#000'} tintColor={colours.positive} />}
    />
  );
}
