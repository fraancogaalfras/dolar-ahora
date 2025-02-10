import { StyleProp, StyleSheet, Text } from 'react-native';
import { COLOURS } from '@/constants/constants';
import { Dollar } from '@/classes/dollar';

export default function Variation({ variation = 0, textStyle }: { variation: number | undefined; textStyle?: StyleProp<any> }) {
  return (
    <Text style={[textStyle ? textStyle : styles.text, variation > 0 ? { color: COLOURS.positive } : variation == 0 ? { color: COLOURS.equal } : { color: COLOURS.negative }]}>
      {`${variation >= 0 ? '+' : ''}${Dollar.formatNumber(variation, 2, 2)}%`}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 13,
    fontFamily: 'Rubik',
  },
});
