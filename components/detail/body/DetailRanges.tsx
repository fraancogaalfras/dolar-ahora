import { RANGES } from '@/constants/constants';
import { TRange } from '@/types/TRange';
import { router } from 'expo-router';
import { memo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function DetailRanges({ rangeSelected }: { rangeSelected: TRange }) {
  const handleOnPress = (range: TRange) => {
    router.setParams({ range: range });
  };

  return (
    <View style={styles.container}>
      {Object.keys(RANGES).map((range) => (
        <TouchableOpacity onPress={() => handleOnPress(range as TRange)} style={[styles.rangeTextContainer, range === rangeSelected && { borderColor: '#fff' }]} key={range}>
          <Text style={[styles.rangeText, range === rangeSelected && { fontFamily: 'Rubik_500Medium' }]}>{RANGES[range as TRange]}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 2,
    paddingVertical: 10,
    flexDirection: 'row',
    gap: 20,
    paddingHorizontal: 9,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgb(65, 70, 73)',
    justifyContent: 'space-evenly'
  },
  rangeTextContainer: {
    paddingVertical: 5,
    borderColor: 'transparent',
    borderBottomWidth: 3,
  },
  rangeText: {
    fontFamily: 'Rubik',
    color: 'rgba(255,255,255, 0.8)',
    fontSize: 16,
  },
});

export default memo(DetailRanges);
