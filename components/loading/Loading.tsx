import { StyleSheet, View } from 'react-native';
import SpinningBills from './SpinningBills';
import { memo } from 'react';

function Loading() {
  return (
    <View style={styles.loadingWrapper}>
      <SpinningBills />
    </View>
  );
}

const styles = StyleSheet.create({
  loadingWrapper: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 70,
  },
});

export default memo(Loading);
