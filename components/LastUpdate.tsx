import { StyleSheet, Text } from 'react-native';

export default function LastUpdate() {
  const lastUpdate = new Date().toLocaleString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  return <Text style={styles.text}>Última actualización: {lastUpdate}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: '#9f9f9f',
    fontFamily: 'Rubik',
    fontSize: 13,
    paddingBottom: 5,
  },
});
