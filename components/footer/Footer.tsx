import { StyleSheet, View } from 'react-native';
import Links from './Links';

export default function Footer() {
  return (
    <View style={styles.footer}>
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
