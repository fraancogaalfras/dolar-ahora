import { StyleSheet, Text } from 'react-native';

export default function LastUpdate({ lastUpdate }: { lastUpdate: string }) {
  return (
    <Text style={styles.text}>
      Última actualización:<br></br>
      {lastUpdate}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#9f9f9f',
    fontFamily: 'Rubik',
    fontSize: 13,
    paddingBottom: 5,
    textAlign: 'center',
    lineHeight: 18,
  },
});
