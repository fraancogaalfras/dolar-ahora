import { router } from 'expo-router';
import { useCallback } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function Logo() {
  const handleOnClick = useCallback(() => {
    router.navigate('/');
  }, []);

  return (
    <View style={styles.logoContainer}>
      <TouchableOpacity accessible={true} accessibilityLabel={'Dolar ahora'} onPress={handleOnClick}>
        <Image style={styles.logo} resizeMode="cover" source={require('@/assets/images/isologo.png')}></Image>
      </TouchableOpacity>
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
