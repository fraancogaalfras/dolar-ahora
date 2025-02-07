import { StyleSheet, View } from 'react-native';
import Logo from './Logo';
import { BACKGROUND_COLOR, LINE_COLOR } from '@/constants/constants';
import Links from './Links';

export default function Header() {
  return (
    <View style={styles.header}>
      <Logo />
      <Links />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: LINE_COLOR,
    backgroundColor: BACKGROUND_COLOR,
    height: 70,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
});
