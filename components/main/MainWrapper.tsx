import { StyleSheet, View } from 'react-native';
import { BACKGROUND_COLOR } from '@/constants/constants';
import { memo } from 'react';

function MainWrapper({ children }: { children: React.ReactNode }) {
  return <View style={styles.mainWrapper}>{children}</View>;
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: BACKGROUND_COLOR,
  },
});

export default memo(MainWrapper);
