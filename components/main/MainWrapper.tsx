import { StyleSheet } from 'react-native';
import { BACKGROUND_COLOR, TAB_COLOR } from '@/constants/constants';
import { LinearGradient } from 'expo-linear-gradient';

export default function MainWrapper({ children }: { children: React.ReactNode }) {
  return (
    <LinearGradient colors={[BACKGROUND_COLOR, TAB_COLOR]} style={styles.mainWrapper}>
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
