import { StyleSheet, Text } from 'react-native';
import { COLOURS } from '@/constants/constants';

export default function Variation({ variation }: { variation: string }) {
  const floatVariation = parseFloat(variation);
  return (
    <Text style={[styles.text, floatVariation > 0 ? { color: COLOURS.positive } : floatVariation == 0 ? { color: COLOURS.equal } : { color: COLOURS.negative }]}>
      {`${floatVariation >= 0 ? '+' : ''}${variation}%`}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 13,
    fontFamily: 'Rubik',
  },
});
