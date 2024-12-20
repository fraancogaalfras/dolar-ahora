import { IconCoffee, IconGithub } from '@/assets/icons/Icons';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import * as Linking from 'expo-linking';

export default function Links() {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => Linking.openURL('https://cafecito.app/fraancogaalfras')}>
        <IconCoffee />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL('https://github.com/fraancogaalfras')}>
        <IconGithub />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
