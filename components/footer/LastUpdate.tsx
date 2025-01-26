import { StyleSheet, Text } from 'react-native';

export default function LastUpdate({ lastUpdate }: { lastUpdate: string }) {
  return (
    <Text style={styles.text}>
      Última actualización:{'\n'}
      <Text style={{ fontSize: 14 }}>{lastUpdate}</Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#9f9f9f',
    fontFamily: 'Rubik',
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 20,
  },
});
