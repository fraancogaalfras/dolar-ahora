import { IColours } from '@/interfaces/types';
import { Stack } from 'expo-router';
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
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaProvider>
  );
}
