import { Image, Platform, StyleSheet, View } from 'react-native';

export default function Logo() {
  return (
    <View style={styles.logoContainer}>
      <Image style={styles.logo} resizeMode="contain" source={require('@/assets/images/isologo.png')}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: Platform.OS == 'web' ? 80 : 60,
  },
  logo: {
    width: Platform.OS == 'web' ? 225 : 200,
    height: Platform.OS == 'web' ? 225 : 200,
  },
});
