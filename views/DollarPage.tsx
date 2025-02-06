import { AppState, Platform, RefreshControl, SectionList, StyleProp, ViewStyle } from 'react-native';
import Card from '@/components/dolar/Card';
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import Loading from '@/components/loading/Loading';
import ErrorPage from '@/views/ErrorPage';
import { COLOURS, PADDING_TAB_BOTTOM, TAB_COLOR } from '@/constants/constants';
import { IDollar } from '@/interfaces/IDollar';
import { router, useLocalSearchParams } from 'expo-router';
import { useDollarContext } from '@/context/DollarContext';
import LastUpdate from '@/components/header/LastUpdate';

export default function DollarPage() {
  const { refreshing = false } = useLocalSearchParams<{ refreshing: string }>();
  const currentState = useRef(AppState.currentState);
  const [appState, setAppState] = useState(currentState.current);

  const { data, isPending, isError, error, retryFn, refetchFn } = useDollarContext();

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
        refetchFn();
      }
    }
  }, [refreshing, appState]);

  const onRefresh = useCallback(() => {
    router.setParams({ refreshing: 'true' });
  }, []);

  const renderItem = useCallback(({ item }: { item: IDollar }) => <Card data={item} />, [data]);
  const keyExtractor = useCallback((item: IDollar) => item.casa, []);
  const getItemLayout = useCallback((_: any, index: number) => ({ length: 125, offset: (125 + 30) * index, index }), []);
  const contentContainerStyle: StyleProp<ViewStyle> = useMemo(() => {
    return {
      alignItems: 'center',
      paddingBottom: PADDING_TAB_BOTTOM,
      paddingTop: 20,
    };
  }, []);

  return isPending ? (
    <Loading />
  ) : isError ? (
    <ErrorPage error={{ message: error.message, retry: retryFn }} />
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
        <RefreshControl refreshing={refreshing === 'true'} onRefresh={onRefresh} colors={[COLOURS.positive, COLOURS.equal]} progressBackgroundColor={TAB_COLOR} tintColor={COLOURS.positive} />
      }
      ListFooterComponent={<LastUpdate />}
    />
  );
}
