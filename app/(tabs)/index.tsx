import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Rubik_300Light as Rubik_Light, Rubik_400Regular as Rubik } from '@expo-google-fonts/rubik';
import { useCallback } from 'react';
import MainWrapper from '@/components/main/MainWrapper';
import DollarPage from '@/views/DollarPage';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    Rubik_Light,
    Rubik,
  });

  const hideSplashOnLayout = useCallback(() => {
    SplashScreen.hide();
  }, []);

  if (!loaded && !error) {
    return null;
  }

  return (
    <MainWrapper hideSplashOnLayout={hideSplashOnLayout}>
      <DollarPage />
    </MainWrapper>
  );
}
