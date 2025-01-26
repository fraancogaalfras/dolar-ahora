import { StyleSheet, Text } from 'react-native';
import { COLOURS } from '@/constants/constants';

export default function Variation({ variation }: { variation: string }) {
  return (
    <Text style={[styles.text, parseFloat(variation) > 0 ? { color: COLOURS.positive } : parseFloat(variation) == 0 ? { color: COLOURS.equal } : { color: COLOURS.negative }]}>
      {parseFloat(variation) >= 0 && '+'}
      {variation}%
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 13,
    fontFamily: 'Rubik',
  },
});
