import Loading from '@/components/loading/Loading';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { AppState, Platform, Text, View } from 'react-native';
import ErrorPage from './ErrorPage';
import Converter from '@/components/converter/Converter';
import { PADDING_TAB_BOTTOM } from '@/constants/constants';
import { router, useLocalSearchParams } from 'expo-router';
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { getDollars } from '@/services/getDolarData';

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

  const { isPending, isError, error, data } = useQuery({ queryKey: ['dollars'], queryFn: getDollars, refetchInterval: 900000 });

  return isPending ? (
    <Loading />
  ) : isError ? (
    <ErrorPage error={{ message: error.message }} />
  ) : (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingBottom: PADDING_TAB_BOTTOM }}>
      <Converter data={data} />
    </View>
  );
}
