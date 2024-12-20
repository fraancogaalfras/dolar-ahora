import MadeBy from './MadeBy';
import { StyleSheet, View } from 'react-native';
import Links from './Links';
import LastUpdate from './LastUpdate';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <LastUpdate />
      <View style={styles.container}>
        <Links />
        <MadeBy />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 20,
  },
  container: {
    width: 'auto',
  },
});
