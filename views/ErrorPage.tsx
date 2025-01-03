import { StyleSheet, Text, View } from 'react-native';

export default function ErrorPage({ error }: { error: { message: string; status: number } }) {
  return (
    <View style={styles.errorWrapper}>
      <Text style={styles.text}>{error.message}</Text>
      <Text style={styles.text}>Error {error.status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  errorWrapper: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    rowGap: 10,
  },
  text: {
    fontSize: 15,
    fontFamily: 'Rubik',
    color: '#fff',
  },
});
