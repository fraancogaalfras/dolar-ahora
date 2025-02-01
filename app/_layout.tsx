import { BACKGROUND_COLOR } from '@/constants/constants';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import '@/reanimatedConfig.js';
import { Platform } from 'react-native';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { DollarProvider } from '@/context/DollarContext';

export default function RootLayout() {
  const insets = useSafeAreaInsets();
  const [queryClient] = useState<QueryClient>(() => new QueryClient());

  return (
    <SafeAreaProvider
      style={{
        backgroundColor: BACKGROUND_COLOR,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <StatusBar backgroundColor={BACKGROUND_COLOR} translucent={true} />
      <QueryClientProvider client={queryClient}>
        <DollarProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false, presentation: 'card' }} />
          </Stack>
          {Platform.OS === 'web' && <ReactQueryDevtools initialIsOpen={false} />}
        </DollarProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
