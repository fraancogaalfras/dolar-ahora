import DolarPage from '@/views/DolarPage';
import { Image, StyleSheet, Text, View } from 'react-native';
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
    <LinearGradient colors={['#0a0e16', '#000000']} style={styles.mainWrapper} onLayout={hideSplashOnLayout}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} resizeMode="contain" source={require('@/assets/images/isologo.png')}></Image>
      </View>
      <DolarPage />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    flex: 1,
    height: '100%',
    width: '100%',
    rowGap: 20,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
  },
  logo: {
    width: 200,
    height: 200,
  },
  text: {
    color: '#fff',
    fontFamily: 'Rubik',
    fontSize: 35,
  },
});
