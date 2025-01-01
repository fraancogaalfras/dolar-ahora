import { AppState, FlatList, Platform, RefreshControl, SectionList, StyleProp, useWindowDimensions, ViewStyle } from 'react-native';
import CardDolar from '@/components/dolar/CardDolar';
import { Idolars, Ierror } from '@/interfaces/types';
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { getDolarData } from '@/api/getDolarData';
import Loading from '@/components/loading/Loading';
import ErrorPage from '@/views/ErrorPage';
import { colours } from '@/app/_layout';
import Footer from '@/components/footer/Footer';

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
      if (Platform.OS != 'web') {
        setLoading(true);
      }
      getFetch();
    }
  }, [refreshing, appState]);

  const renderItem = useCallback(({ item }: { item: Idolars }) => <CardDolar data={item} />, [data]);
  const keyExtractor = useCallback((item: Idolars) => item.casa, []);
  const getNumColumns = useMemo(() => {
    return width > 1000 ? 3 : width > 675 ? 2 : 1;
  }, [width]);
  const getItemLayout = useCallback((_: any, index: number) => ({ length: 125, offset: (125 + 30) * index, index }), []);
  const contentContainerStyle: StyleProp<ViewStyle> = [
    {
      alignItems: 'center',
    },
    height > 1000 && {
      justifyContent: 'center',
      height: '100%',
      width: '100%',
    },
  ];
  const columnWrapperStyle = width > 675 && { columnGap: 30 };

  return loading ? (
    <Loading />
  ) : error ? (
    <ErrorPage error={error} />
  ) : width > 675 ? (
    <FlatList
      data={data}
      renderItem={renderItem}
      key={getNumColumns}
      keyExtractor={keyExtractor}
      getItemLayout={getItemLayout}
      contentContainerStyle={contentContainerStyle}
      numColumns={getNumColumns}
      columnWrapperStyle={columnWrapperStyle}
      showsVerticalScrollIndicator={false}
      initialNumToRender={7}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={[colours.positive, colours.equal]} progressBackgroundColor={'#000'} tintColor={colours.positive} />}
      ListFooterComponent={<Footer />}
    />
  ) : (
    <SectionList
      sections={[{ data: data as Idolars[] }]}
      renderItem={renderItem}
      key={getNumColumns}
      keyExtractor={keyExtractor}
      getItemLayout={getItemLayout}
      contentContainerStyle={contentContainerStyle}
      showsVerticalScrollIndicator={false}
      initialNumToRender={7}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={[colours.positive, colours.equal]} progressBackgroundColor={'#000'} tintColor={colours.positive} />}
      ListFooterComponent={<Footer />}
    />
  );
}
