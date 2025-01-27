import { StyleSheet, Text, View } from 'react-native';

export default function LastUpdate({ lastUpdate }: { lastUpdate: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Última actualización:{'\n'}
        <Text style={{ fontSize: 14 }}>{lastUpdate}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 25,
  },
  text: {
    color: '#9f9f9f',
    fontFamily: 'Rubik',
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 20,
  },
});
