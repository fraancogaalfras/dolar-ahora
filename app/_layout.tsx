import { BACKGROUND_COLOR } from '@/constants/constants';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import { useFonts, Rubik_300Light as Rubik_Light, Rubik_400Regular as Rubik, Rubik_500Medium } from '@expo-google-fonts/rubik';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { DollarProvider } from '@/context/DollarContext';
import { Try } from 'expo-router/build/views/Try';
import ErrorPage from '@/views/ErrorPage';
import { SplashScreen } from 'expo-router';
import * as SystemUI from 'expo-system-ui';

SplashScreen.preventAutoHideAsync();

SystemUI.setBackgroundColorAsync(BACKGROUND_COLOR);

export default function RootLayout() {
  const insets = useSafeAreaInsets();
  const [queryClient] = useState<QueryClient>(() => new QueryClient());

  const [appIsReady, setAppIsReady] = useState(false);
  const [loaded, error] = useFonts({
    Rubik_Light,
    Rubik,
    Rubik_500Medium,
  });

  useEffect(() => {
    if (loaded || error) {
      setAppIsReady(true);
      SplashScreen.hide();
    }
  }, [loaded, error]);

  if (!appIsReady) {
    return null;
  }

  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaProvider
      style={{
        backgroundColor: BACKGROUND_COLOR,
        paddingTop: insets.top + 3,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <QueryClientProvider client={queryClient}>
        <Try catch={ErrorPage}>
          <DollarProvider>
            <Stack screenOptions={{ headerShown: false, presentation: 'card' }}>
              <Stack.Screen name="(tabs)" />
              <Stack.Screen name="detail/[dollar]" />
            </Stack>
          </DollarProvider>
        </Try>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
