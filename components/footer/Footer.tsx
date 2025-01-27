import MadeBy from './MadeBy';
import { Platform, StyleSheet, View } from 'react-native';
import Links from './Links';
import LastUpdate from './LastUpdate';

export default function Footer({ lastUpdate }: { lastUpdate: string }) {
  return (
    <View style={styles.footer}>
      <LastUpdate lastUpdate={lastUpdate} />
      <View style={styles.container}>
        <Links />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 5,
  },
  container: {
    width: 'auto',
  },
});
