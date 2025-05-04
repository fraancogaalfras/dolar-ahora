import { IconCoffee, IconGithub } from '@/assets/icons/Icons';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import * as Linking from 'expo-linking';
import { memo, useCallback } from 'react';

function Links() {
  const handleCafecitoPress = useCallback(() => {
    Linking.openURL('https://cafecito.app/fraancogaalfras');
  }, []);

  const handleGithubPress = useCallback(() => {
    Linking.openURL('https://github.com/fraancogaalfras');
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity accessible={true} accessibilityLabel={'Comprame un cafecito'} onPress={handleCafecitoPress}>
        <IconCoffee />
      </TouchableOpacity>
      <TouchableOpacity accessible={true} accessibilityLabel={'Mira mi github y mis proyectos'} onPress={handleGithubPress}>
        <IconGithub />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5,
    marginTop: 2,
  },
});

export default memo(Links);
