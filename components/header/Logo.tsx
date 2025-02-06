import { Image, StyleSheet, View } from 'react-native';

export default function Logo() {
  return (
    <View style={styles.logoContainer}>
      <Image style={styles.logo} resizeMode="cover" source={require('@/assets/images/isologo.png')}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    borderWidth: 1,
    width: 140,
    height: 50,
  },
});
