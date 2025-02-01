import Loading from '@/components/loading/Loading';
import { keepPreviousData, useQuery, useQueryClient } from '@tanstack/react-query';
import { AppState, Platform, Text, View } from 'react-native';
import ErrorPage from './ErrorPage';
import { PADDING_TAB_BOTTOM } from '@/constants/constants';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { getDollars } from '@/services/getDolarData';
import Converter from '@/components/converter/Converter';
import { useDollarQuery } from '@/hooks/useDollarQuery';

export default function ConverterPage() {
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
  }, [appState]);

  const { isPending, isError, error, data, retryFn } = useDollarQuery();

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
