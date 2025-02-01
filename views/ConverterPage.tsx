import Loading from '@/components/loading/Loading';
import { AppState, Platform, View } from 'react-native';
import ErrorPage from './ErrorPage';
import { PADDING_TAB_BOTTOM } from '@/constants/constants';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Converter from '@/components/converter/Converter';
import { useDollarContext } from '@/context/DollarContext';

export default function ConverterPage() {
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
  }, [appState]);

  return isPending ? (
    <Loading />
  ) : isError ? (
    <ErrorPage error={{ message: error.message, retry: retryFn }} />
  ) : (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingBottom: PADDING_TAB_BOTTOM }}>
      <Converter data={data} />
    </View>
  );
}
