import { StyleSheet, Text, View } from 'react-native';
import Logo from './Logo';
import { LINE_COLOR } from '@/constants/constants';
import { HandleDate } from '@/classes/date';
import LastUpdate from './LastUpdate';

export default function Header() {
  const todayDate = new HandleDate().getFormattedDateDot();

  return (
    <View style={styles.header}>
      <Logo />
      {/* <Text style={styles.dateText}>{todayDate}</Text> */}
      <LastUpdate />
      {/* <Links /> */}
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
  dateText: {
    color: '#fff',
    fontFamily: 'Rubik',
    fontSize: 16,
    marginTop: 12,
    opacity: 0.7,
  },
});
