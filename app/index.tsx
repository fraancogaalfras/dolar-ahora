import DolarPage from '@/views/DolarPage';
import { ImageBackground, StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <ImageBackground source={require('../assets/images/background.png')} resizeMode="cover" style={styles.image_container}>
      <View style={styles.main_wrapper}>
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
