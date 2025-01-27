import { AppState, Platform, RefreshControl, SectionList, StyleProp, ViewStyle } from 'react-native';
import Card from '@/components/dolar/Card';
import { IDollars } from '@/interfaces/types';
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { getDolarData } from '@/api/getDolarData';
import Loading from '@/components/loading/Loading';
import ErrorPage from '@/views/ErrorPage';
import { COLOURS } from '@/constants/constants';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import LastUpdate from '@/components/footer/LastUpdate';
import { HandleDate } from '@/classes/date';

export default function DolarPage() {
  const currentState = useRef(AppState.currentState);
  const [appState, setAppState] = useState(currentState.current);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [lastUpdate, setLastUpdate] = useState<string>('');
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

  const getLastUpdate = async (data: IDollars[]) => {
    try {
      // Se toma el CCL como referencia.
      const lastUpdate = data[3].fechaActualizacion;

      const lastUpdateFormatted = new HandleDate(new Date(lastUpdate)).getFormattedDateBarWithTime();
      setLastUpdate(lastUpdateFormatted);
    } catch (e: any) {
      setLastUpdate('Cargando información...');
    }
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
  }, []);

  const getDollars = async () => {
    try {
      const data = await getDolarData();
      await getLastUpdate(data);
      return data;
    } catch (e: any) {
      throw new Error(e.message);
    } finally {
      setRefreshing(false);
    }
  };

  const { isPending, isError, error, data } = useQuery({ queryKey: ['dollars'], queryFn: getDollars, refetchInterval: 900000 });

  const renderItem = useCallback(({ item }: { item: IDollars }) => <Card data={item} />, [data]);
  const keyExtractor = useCallback((item: IDollars) => item.casa, []);
  const getItemLayout = useCallback((_: any, index: number) => ({ length: 125, offset: (125 + 30) * index, index }), []);
  const contentContainerStyle: StyleProp<ViewStyle> = useMemo(() => {
    return {
      alignItems: 'center',
      paddingBottom: 70,
      paddingTop: 25,
      backgroundColor: '#08090e',
    };
  }, []);

  return isPending ? (
    <Loading />
  ) : isError ? (
    <ErrorPage error={error.message} />
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
      ListFooterComponent={<LastUpdate lastUpdate={lastUpdate} />}
      ListFooterComponentStyle={{ marginTop: -5 }}
    />
  );
}
