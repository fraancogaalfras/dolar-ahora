import DolarPage from '@/views/DolarPage';
import { Image, Platform, StyleSheet, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Rubik_400Regular as Rubik } from '@expo-google-fonts/rubik';
import ErrorPage from '@/views/ErrorPage';
import { useCallback } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

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
          message: 'La aplicación no está soportada en tu dispositivo.',
          status: 400,
        }}
      />
    );
  }

  return (
    <LinearGradient colors={['#0a0e16', '#000000']} style={styles.mainWrapper} onLayout={hideSplashOnLayout}>
      <StatusBar backgroundColor="#0a0e16" />
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
    height: Platform.OS == 'web' ? 80 : 60,
  },
  logo: {
    width: Platform.OS == 'web' ? 225 : 200,
    height: Platform.OS == 'web' ? 225 : 200,
  },
  text: {
    color: '#fff',
    fontFamily: 'Rubik',
    fontSize: 35,
  },
});
