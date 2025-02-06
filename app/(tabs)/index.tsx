import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Rubik_300Light as Rubik_Light, Rubik_400Regular as Rubik, Rubik_500Medium } from '@expo-google-fonts/rubik';
import { useCallback, useEffect, useState } from 'react';
import MainWrapper from '@/components/main/MainWrapper';
import DollarPage from '@/views/DollarPage';
import { View } from 'react-native';

SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

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
