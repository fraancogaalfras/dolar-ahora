import { Image, Platform, StyleSheet, View } from 'react-native';

export default function Logo() {
  return (
    <View style={styles.logoContainer}>
      <Image style={styles.logo} resizeMode="contain" source={require('@/assets/images/isologo.png')}></Image>
    </View>
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
});
