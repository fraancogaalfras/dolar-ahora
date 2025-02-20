import * as SplashScreen from 'expo-splash-screen';
import { AppState, Platform, RefreshControl, SectionList, StyleSheet, View } from 'react-native';
import Card from '@/components/dolar/Card';
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import Loading from '@/components/loading/Loading';
import ErrorPage from '@/views/ErrorPage';
import { COLOURS, MARGIN_TAB_BOTTOM, TAB_COLOR } from '@/constants/constants';
import { IDollar } from '@/interfaces/IDollar';
import { router, useLocalSearchParams } from 'expo-router';
import { useDollarContext } from '@/context/DollarContext';
import LastUpdate from '@/components/header/LastUpdate';

export default function DollarPage({ appIsReady }: { appIsReady: boolean }) {
  const { refreshing = false } = useLocalSearchParams<{ refreshing: string }>();
  const currentState = useRef(AppState.currentState);
  const [appState, setAppState] = useState(currentState.current);

  const { data, isError, error, retryFn, refetchFn } = useDollarContext();

  useEffect(() => {
    const hideSplash = async () => {
      await SplashScreen.hideAsync();
    };
    if (appIsReady) {
      hideSplash();
    }
  }, [appIsReady]);

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
  const getItemLayout = useCallback((_: any, index: number) => ({ length: 95, offset: (95 + 30) * index, index }), []);

  return data ? (
    <View style={styles.wrapper}>
      <SectionList
        sections={[{ data: data as IDollar[] }]}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        getItemLayout={getItemLayout}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
        initialNumToRender={7}
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
  },
});
