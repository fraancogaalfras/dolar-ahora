import { StyleSheet, View } from 'react-native';
import { BACKGROUND_COLOR, TAB_COLOR } from '@/constants/constants';
import { LinearGradient } from 'expo-linear-gradient';

export default function MainWrapper({ children, hideSplashOnLayout }: { children: React.ReactNode; hideSplashOnLayout?: () => void }) {
  return (
    <LinearGradient colors={[BACKGROUND_COLOR, TAB_COLOR, TAB_COLOR]} style={styles.mainWrapper} onLayout={hideSplashOnLayout ? hideSplashOnLayout : undefined}>
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
});
