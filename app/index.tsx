import DolarPage from '@/views/DolarPage';
import { StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Rubik_400Regular as Rubik } from '@expo-google-fonts/rubik';
import ErrorPage from '@/views/ErrorPage';
import { useCallback } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    Rubik,
  });

  const hideSplashOnLayout = useCallback(() => {
    SplashScreen.hide();
  }, []);

  if (!loaded && !error) {
    return (
      <ErrorPage
        hideSplashOnLayout={hideSplashOnLayout}
        error={{
          message: 'Error al cargar la fuente.',
          status: 500,
        }}
      />
    );
  }

  return (
    <LinearGradient colors={['#070a10', '#000000']} style={styles.mainWrapper} onLayout={hideSplashOnLayout}>
      <DolarPage />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    paddingVertical: 30,
    paddingHorizontal: 10,
    flex: 1,
    height: '100%',
    width: '100%',
  },
});
