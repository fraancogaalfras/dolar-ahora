import { IColours } from '@/interfaces/types';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

export const colours: IColours = {
  negative: '#ef4444',
  positive: '#22c55e',
  equal: '#fff',
};

export default function RootLayout() {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaProvider
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <StatusBar backgroundColor="#0a0e16" translucent={true} />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaProvider>
  );
}
