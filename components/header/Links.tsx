import { IconCoffee, IconGithub } from '@/assets/icons/Icons';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import * as Linking from 'expo-linking';

export default function Links() {
  return (
    <View style={styles.container}>
      <TouchableOpacity accessible={true} accessibilityLabel={'Comprame un cafecito'} onPress={() => Linking.openURL('https://cafecito.app/fraancogaalfras')}>
        <IconCoffee />
      </TouchableOpacity>
      <TouchableOpacity accessible={true} accessibilityLabel={'Mira mi github y mis proyectos'} onPress={() => Linking.openURL('https://github.com/fraancogaalfras')}>
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
