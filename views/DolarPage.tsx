import { AppState, Platform, RefreshControl, SectionList, StyleProp, ViewStyle } from 'react-native';
import Card from '@/components/dolar/Card';
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { getDolarData } from '@/api/getDolarData';
import Loading from '@/components/loading/Loading';
import ErrorPage from '@/views/ErrorPage';
import { COLOURS, DOLAR_PAGE_COLOR, PADDING_TAB_BOTTOM } from '@/constants/constants';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import LastUpdate from '@/components/footer/LastUpdate';
import { HandleDate } from '@/classes/date';
import { IDollar } from '@/interfaces/IDollar';
import { router } from 'expo-router';

export default function DolarPage() {
  const currentState = useRef(AppState.currentState);
  const [appState, setAppState] = useState(currentState.current);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const queryClient = useQueryClient();

  useEffect(() => {
    const appStateListener = AppState.addEventListener('change', (changedState) => {
      currentState.current = changedState;
      setAppState(currentState.current);
    });

    return () => {
      appStateListener.remove();
    };
  }, []);

  useLayoutEffect(() => {
    if (appState == 'active') {
      if (Platform.OS != 'web') {
        queryClient.refetchQueries({ queryKey: ['dollars'] });
      }
    }
  }, [refreshing, appState]);

  const getLastUpdate = (data: IDollar[]) => {
    try {
      // Se toma el CCL como referencia.
      const lastUpdateFormatted = new HandleDate(new Date(data[3].fechaActualizacion)).getFormattedDateBarWithTime();
      router.setParams({ lastUpdate: lastUpdateFormatted });
    } catch (e: any) {
      router.setParams({ lastUpdate: 'Cargando información...' });
    }
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
  }, []);

  const getDollars = async () => {
    try {
      const data = await getDolarData();
      getLastUpdate(data);
      return data;
    } catch (e: any) {
      throw new Error(e.message);
    } finally {
      setRefreshing(false);
    }
  };

  const { isPending, isError, error, data } = useQuery({ queryKey: ['dollars'], queryFn: getDollars, retry: false, refetchInterval: 900000 });

  const renderItem = useCallback(({ item }: { item: IDollar }) => <Card data={item} />, [data]);
  const keyExtractor = useCallback((item: IDollar) => item.casa, []);
  const getItemLayout = useCallback((_: any, index: number) => ({ length: 125, offset: (125 + 30) * index, index }), []);
  const contentContainerStyle: StyleProp<ViewStyle> = useMemo(() => {
    return {
      alignItems: 'center',
      paddingBottom: PADDING_TAB_BOTTOM,
      paddingTop: 20,
      backgroundColor: DOLAR_PAGE_COLOR,
    };
  }, []);

  return isPending ? (
    <Loading />
  ) : isError ? (
    <ErrorPage error={{ message: error.message }} />
  ) : (
    <SectionList
      sections={[{ data: data as any }]}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      getItemLayout={getItemLayout}
      contentContainerStyle={contentContainerStyle}
      showsVerticalScrollIndicator={false}
      initialNumToRender={7}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={[COLOURS.positive, COLOURS.equal]} progressBackgroundColor={'#000'} tintColor={COLOURS.positive} />}
      ListFooterComponent={<LastUpdate />}
      ListFooterComponentStyle={{ marginTop: -5 }}
    />
  );
}
