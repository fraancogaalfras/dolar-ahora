import * as SplashScreen from 'expo-splash-screen';
import MainWrapper from '@/components/main/MainWrapper';
import DollarPage from '@/views/DollarPage';
import { useFonts, Rubik_300Light as Rubik_Light, Rubik_400Regular as Rubik, Rubik_500Medium } from '@expo-google-fonts/rubik';
import { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import * as SystemUI from 'expo-system-ui';
import { BACKGROUND_COLOR } from '@/constants/constants';

SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({
  fade: true,
});

SystemUI.setBackgroundColorAsync(BACKGROUND_COLOR);

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [loaded, error] = useFonts({
    Rubik_Light,
    Rubik,
    Rubik_500Medium,
  });

  useEffect(() => {
    if (loaded || error) {
      setAppIsReady(true);
    }
  }, [loaded, error]);

  const onLayoutRootView = useCallback(() => {
    if (appIsReady) {
      SplashScreen.hide();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  if (!loaded && !error) {
    return null;
  }

  return (
    <MainWrapper>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <DollarPage />
      </View>
    </MainWrapper>
  );
}
