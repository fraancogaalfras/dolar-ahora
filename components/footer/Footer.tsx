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
        <MadeBy />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    marginTop: Platform.OS == 'web' ? 10 : undefined,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: Platform.OS == 'web' ? 30 : 20,
  },
  container: {
    width: 'auto',
  },
});
