import { AppState, FlatList, Platform, RefreshControl, SectionList, StyleSheet, View } from 'react-native';
import { memo, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import Loading from '@/components/loading/Loading';
import ErrorPage from '@/views/ErrorPage';
import { CARD_HEIGHT, COLOURS, MARGIN_TAB_BOTTOM, TAB_COLOR } from '@/constants/constants';
import { IDollar } from '@/interfaces/IDollar';
import { router, useLocalSearchParams } from 'expo-router';
import { useDollarContext } from '@/context/DollarContext';
import LastUpdate from '@/components/header/LastUpdate';
import Card from '@/components/dolar/Card';

function DollarPage() {
  const { refreshing = false } = useLocalSearchParams<{ refreshing: string }>();
  const currentState = useRef(AppState.currentState);
  const [appState, setAppState] = useState(currentState.current);

  const { data, isError, error, retryFn, refetchFn } = useDollarContext();

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

  const renderItem = useCallback(({ item }: { item: IDollar }) => <Card nombre={item.nombre} casa={item.casa} venta={item.venta} variacion={item.variacion} />, [data]);
  const keyExtractor = useCallback((item: IDollar) => item.nombre, [data]);
  const getItemLayout = useCallback((_: any, index: number) => ({ length: CARD_HEIGHT, offset: (CARD_HEIGHT + 15) * index, index }), []);

  return data ? (
    <View style={styles.wrapper}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        getItemLayout={getItemLayout}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing === 'true'} onRefresh={onRefresh} colors={[COLOURS.positive, COLOURS.equal]} progressBackgroundColor={TAB_COLOR} tintColor={COLOURS.positive} />
        }
        ListFooterComponent={<LastUpdate />}
      />
    </View>
  ) : isError ? (
    <ErrorPage customError={{ name: 'Error en pestaña de dólares', message: error.message }} retry={retryFn} />
  ) : (
    <Loading />
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginBottom: MARGIN_TAB_BOTTOM,
  },
  contentContainerStyle: {
    alignItems: 'center',
    paddingTop: 20,
    gap: 15,
  },
});

export default memo(DollarPage);
