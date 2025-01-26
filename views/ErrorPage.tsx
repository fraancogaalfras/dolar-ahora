import { StyleSheet, Text, View } from 'react-native';

export default function ErrorPage({ error }: { error: string }) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{error}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 70,
  },
  text: {
    fontSize: 17,
    fontFamily: 'Rubik',
    color: '#fff',
  },
});
