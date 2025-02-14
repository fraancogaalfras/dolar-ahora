import { BACKGROUND_COLOR } from '@/constants/constants';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import { useState } from 'react';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { DollarProvider } from '@/context/DollarContext';
import { Try } from 'expo-router/build/views/Try';
import ErrorPage from '@/views/ErrorPage';

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
      <QueryClientProvider client={queryClient}>
        <Try catch={ErrorPage}>
          <DollarProvider>
            <Stack screenOptions={{ headerShown: false, statusBarBackgroundColor: BACKGROUND_COLOR, statusBarTranslucent: true }}>
              <Stack.Screen name="(tabs)" />
              <Stack.Screen name="detail/[dollar]" />
            </Stack>
          </DollarProvider>
        </Try>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
