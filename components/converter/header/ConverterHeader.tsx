import { IconArrowRight } from '@/assets/icons/Icons';
import { IDollar } from '@/interfaces/IDollar';
import { TCurrency } from '@/types/TCurrency';
import React, { useMemo } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import WheelPicker from 'react-native-wheely';

export default function ConverterHeader({
  data,
  arsCurrencyName,
  selectedIndex,
  isReverse,
  handleSelectorChange,
}: {
  data: IDollar[];
  arsCurrencyName: string;
  selectedIndex: number;
  isReverse: boolean;
  handleSelectorChange: (index: number) => void;
}) {
  const wheelOptions = useMemo(() => {
    return data.map((dollar) => dollar.nombre as TCurrency);
  }, [data]);

  const staticWheelProps = useMemo(
    () => ({
      itemStyle: { backgroundColor: 'rgba(0,0,0,0)', padding: 0 },
      itemTextStyle: { fontSize: 25, color: '#fff', fontFamily: 'Rubik_500Medium', padding: 0, margin: 0 },
      containerStyle: { padding: 0, margin: 0 },
      selectedIndicatorStyle: { backgroundColor: 'rgba(0,0,0,0)', borderRadius: 0, padding: 0, margin: 0 },
      flatListProps: { nestedScrollEnabled: true },
      options: wheelOptions,
    }),
    [wheelOptions]
  );

  const emptyArray = useMemo(() => [], []);

  return (
    <View style={styles.headContainer}>
      <Text style={styles.title}>{arsCurrencyName}</Text>
      <View style={[styles.arrowRight, isReverse ? { transform: [{ rotate: '180deg' }] } : undefined]}>
        <IconArrowRight />
      </View>
      <FlatList
        scrollEnabled={false}
        horizontal
        data={emptyArray}
        renderItem={null}
        ListEmptyComponent={<WheelPicker {...staticWheelProps} onChange={handleSelectorChange} selectedIndex={selectedIndex} />}
        style={{ flexGrow: 0 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headContainer: {
    marginTop: 50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: 30,
  },
  title: {
    fontFamily: 'Rubik_500Medium',
    color: '#fff',
    fontSize: 25,
  },
  arrowRight: {
    marginLeft: 20,
    marginRight: -2,
  },
});
