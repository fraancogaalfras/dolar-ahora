import { StyleSheet, Text, View } from 'react-native';

export default function Error({ error }: { error: { message: string; status: number } }) {
  return (
    <View style={styles.error_wrapper}>
      <Text>
        {error.message} {error.status}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  error_wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(25 25 25)',
  },
});
