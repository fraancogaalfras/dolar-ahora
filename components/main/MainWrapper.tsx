import { StyleSheet, View } from 'react-native';
import { TAB_COLOR } from '@/constants/constants';

export default function MainWrapper({ children, hideSplashOnLayout }: { children: React.ReactNode; hideSplashOnLayout?: () => void }) {
  return (
    <View style={styles.mainWrapper} onLayout={hideSplashOnLayout ? hideSplashOnLayout : undefined}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: TAB_COLOR,
  },
});
