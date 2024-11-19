import DolarPage from '@/views/DolarPage';
import { ImageBackground, StyleSheet, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import ErrorPage from '@/views/ErrorPage';
import { useCallback } from 'react';

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
    <ImageBackground source={require('../assets/images/background.png')} resizeMode="cover" style={styles.image_container}>
      <View style={styles.main_wrapper} onLayout={hideSplashOnLayout}>
        <DolarPage />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image_container: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  main_wrapper: {
    paddingVertical: 30,
    paddingHorizontal: 10,
    fontFamily: 'Virgil',
    flex: 1,
    height: '100%',
    width: '100%',
  },
});
