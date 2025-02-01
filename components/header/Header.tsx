import { StyleSheet, Text, View } from 'react-native';
import Logo from './Logo';
import { BACKGROUND_COLOR, LINE_COLOR, TAB_COLOR } from '@/constants/constants';
import LastUpdate from './LastUpdate';

export default function Header() {
  return (
    <View style={styles.header}>
      <Logo />
      <LastUpdate />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomColor: LINE_COLOR,
    backgroundColor: BACKGROUND_COLOR,
    height: 70,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateText: {
    color: '#fff',
    fontFamily: 'Rubik',
    fontSize: 16,
    marginTop: 12,
    opacity: 0.7,
  },
});
