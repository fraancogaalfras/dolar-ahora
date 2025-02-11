import { BACKGROUND_COLOR } from '@/constants/constants';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { DollarProvider } from '@/context/DollarContext';
import { Try } from 'expo-router/build/views/Try';
import ErrorPage from '@/views/ErrorPage';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Platform } from 'react-native';

export default function RootLayout() {
  const insets = useSafeAreaInsets();
  const [queryClient] = useState<QueryClient>(() => new QueryClient());

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
      <StatusBar backgroundColor={BACKGROUND_COLOR} translucent={true} />
      <QueryClientProvider client={queryClient}>
        {Platform.OS == 'web' && <ReactQueryDevtools initialIsOpen={false} />}
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
