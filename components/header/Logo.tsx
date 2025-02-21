import { Image, StyleSheet, View } from 'react-native';

export default function Logo() {
  return (
    <View style={styles.logoContainer}>
      <View>
        <Image style={styles.logo} resizeMode="cover" source={require('@/assets/images/isologo.png')}></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 140,
    height: 50,
  },
});
