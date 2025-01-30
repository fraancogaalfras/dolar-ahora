import { AppState, Platform, RefreshControl, SectionList, StyleProp, ViewStyle } from 'react-native';
import Card from '@/components/dolar/Card';
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import Loading from '@/components/loading/Loading';
import ErrorPage from '@/views/ErrorPage';
import { COLOURS, DOLAR_PAGE_COLOR, PADDING_TAB_BOTTOM } from '@/constants/constants';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { IDollar } from '@/interfaces/IDollar';
import { router, useLocalSearchParams } from 'expo-router';
import { getDollars } from '@/services/getDolarData';

export default function DolarPage() {
  const { refreshing = false } = useLocalSearchParams<{ refreshing: string }>();
  const currentState = useRef(AppState.currentState);
  const [appState, setAppState] = useState(currentState.current);

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

  const onRefresh = useCallback(() => {
    router.setParams({ refreshing: 'true' });
  }, []);

  const { isPending, isError, error, data } = useQuery({ queryKey: ['dollars'], queryFn: getDollars, refetchInterval: 900000 });

  const renderItem = useCallback(({ item }: { item: IDollar }) => <Card data={item} />, [data]);
  const keyExtractor = useCallback((item: IDollar) => item.casa, []);
  const getItemLayout = useCallback((_: any, index: number) => ({ length: 125, offset: (125 + 30) * index, index }), []);
  const contentContainerStyle: StyleProp<ViewStyle> = useMemo(() => {
    return {
      alignItems: 'center',
      paddingBottom: PADDING_TAB_BOTTOM - 8,
      paddingTop: 20,
      backgroundColor: DOLAR_PAGE_COLOR,
    };
  }, []);

  console.log(data);

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
      refreshControl={
        <RefreshControl refreshing={refreshing === 'true'} onRefresh={onRefresh} colors={[COLOURS.positive, COLOURS.equal]} progressBackgroundColor={'#000'} tintColor={COLOURS.positive} />
      }
    />
  );
}
