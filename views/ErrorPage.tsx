import { StyleSheet, Text, View } from 'react-native';

export default function ErrorPage({ error, hideSplashOnLayout }: { error: { message: string; status: number }; hideSplashOnLayout?: VoidFunction }) {
  return (
    <View style={styles.errorWrapper} onLayout={hideSplashOnLayout}>
      <Text style={styles.text}>{error.message}</Text>
      <Text style={styles.text}>{error.status}</Text>
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
    rowGap: 5,
  },
  text: {
    fontFamily: 'Rubik',
    color: '#fff',
  },
});
