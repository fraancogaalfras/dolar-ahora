import DolarPage from '@/views/DolarPage';
import { StyleSheet, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import ErrorPage from '@/views/ErrorPage';
import { useCallback } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    Virgil: require('../assets/fonts/Virgil.otf'),
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
    <LinearGradient colors={['rgb(5 5 5)', 'rgb(20 20 20)']} style={styles.mainWrapper} onLayout={hideSplashOnLayout}>
      <DolarPage />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    paddingVertical: 30,
    paddingHorizontal: 10,
    fontFamily: 'Virgil',
    flex: 1,
    height: '100%',
    width: '100%',
  },
});
