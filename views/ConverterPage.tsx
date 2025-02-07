import Loading from '@/components/loading/Loading';
import { AppState, KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';
import ErrorPage from './ErrorPage';
import { MARGIN_TAB_BOTTOM } from '@/constants/constants';
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
    <KeyboardAvoidingView style={styles.wrapper}>
      <Converter data={data} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginBottom: MARGIN_TAB_BOTTOM,
  },
});
