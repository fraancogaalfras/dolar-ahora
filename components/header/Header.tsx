import { StyleSheet, View } from 'react-native';
import Logo from '../logo/Logo';
import { LINE_COLOR } from '@/constants/constants';
import Links from '../footer/Links';

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
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomColor: LINE_COLOR,
    height: 70,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
