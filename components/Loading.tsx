import { StyleSheet, View } from 'react-native';
import SpinningBills from './SpinningBills';

export default function Loading() {
  return (
    <View style={styles.loading_wrapper}>
      <SpinningBills />
    </View>
  );
}

const styles = StyleSheet.create({
  loading_wrapper: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
