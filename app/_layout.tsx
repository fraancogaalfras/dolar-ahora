import { IColours } from '@/interfaces/types';
import { Stack } from 'expo-router';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

export const colours: IColours = {
  negative: 'rgb(255 0 0)',
  positive: 'rgb(0 255 49)',
  equal: 'rgb(255 255 255)',
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
