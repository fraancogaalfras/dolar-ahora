import { IconArrowRight, IconReverse } from '@/assets/icons/Icons';
import { CARD_BACKGROUND_COLOR, CARD_BORDER_RADIUS, CARD_BOX_SHADOW, LINE_COLOR } from '@/constants/constants';
import { ICurrency } from '@/interfaces/ICurrency';
import { IDollar } from '@/interfaces/IDollar';
import { TCurrency } from '@/types/TCurrency';
import { useCallback, useMemo, useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import WheelPicker from 'react-native-wheely';

export default function Converter({ data }: { data: IDollar[] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [arsCurrency, setArsCurrency] = useState<ICurrency>({
    amount: 1000,
    name: 'ARS',
  });
  const [usdCurrency, setUsdCurrency] = useState<ICurrency>({
    amount: arsCurrency.amount / data[selectedIndex].venta,
    name: data[selectedIndex].nombre,
  });
  const [exchangeRate, setExchangeRate] = useState(1 / data[selectedIndex].venta);
  const [isReverse, setIsReverse] = useState(false);

  const handleArsChange = useCallback(
    (value: string) => {
      if (value == '') {
        value = '0';
      }
      value = value.replace(/\D/g, '');
      const amount = parseFloat(value);
      setArsCurrency((prev) => ({
        ...prev,
        amount,
      }));
      setUsdCurrency((prev) => ({
        ...prev,
        amount: amount * exchangeRate,
      }));
    },
    [exchangeRate]
  );

  const handleUsdChange = useCallback(
    (value: string) => {
      if (value == '') {
        value = '0';
      }
      value = value.replace(/\D/g, '');
      const amount = parseFloat(value);
      setUsdCurrency((prev) => ({
        ...prev,
        amount,
      }));
      setArsCurrency((prev) => ({
        ...prev,
        amount: amount / exchangeRate,
      }));
    },
    [exchangeRate]
  );

  const handleSelectorChange = useCallback(
    (index: number) => {
      const newExchangeRate = 1 / data[index].venta;
      const newSelectedIndex = index;

      setSelectedIndex(newSelectedIndex);
      setExchangeRate(newExchangeRate);

      if (!isReverse) {
        setUsdCurrency((prev) => ({
          amount: arsCurrency.amount * newExchangeRate,
          name: data[newSelectedIndex].nombre,
        }));
      } else {
        setUsdCurrency((prev) => ({
          ...prev,
          name: data[newSelectedIndex].nombre,
        }));
        setArsCurrency((prev) => ({
          amount: usdCurrency.amount / newExchangeRate,
          name: 'ARS',
        }));
      }
    },
    [arsCurrency.amount, usdCurrency.amount, isReverse, data]
  );

  const handleReverse = useCallback(() => {
    setIsReverse((prev) => !prev);
  }, []);

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
    <ScrollView contentContainerStyle={styles.scrollViewWrapper} showsVerticalScrollIndicator={true}>
      <View style={styles.headContainer}>
        <Text style={styles.title}>{arsCurrency.name}</Text>
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
      <View style={styles.mainContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            inputMode="numeric"
            value={(isReverse ? usdCurrency.amount : arsCurrency.amount).toLocaleString('de-DE', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}
            onChangeText={isReverse ? handleUsdChange : handleArsChange}
          />
          <Text style={styles.currencyInsideInput}>{isReverse ? `${usdCurrency.name}` : `${arsCurrency.name}`}</Text>
        </View>
        <TouchableOpacity accessible={true} accessibilityLabel={'Cambiar orden de conversion'} onPress={handleReverse}>
          <IconReverse />
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            inputMode="numeric"
            value={(isReverse ? arsCurrency.amount : usdCurrency.amount).toLocaleString('de-DE', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}
            onChangeText={isReverse ? handleArsChange : handleUsdChange}
          />
          <Text style={styles.currencyInsideInput}>{isReverse ? `${arsCurrency.name}` : `${usdCurrency.name}`}</Text>
        </View>
        <View style={styles.conversionContainer}>
          <Text style={styles.textConversion}>
            1 USD {usdCurrency.name} = {data[selectedIndex].venta.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ARS
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewWrapper: {
    flexGrow: 1,
    width: '100%',
    gap: 30,
  },
  title: {
    fontFamily: 'Rubik_500Medium',
    color: '#fff',
    fontSize: 25,
  },
  headContainer: {
    marginTop: 30,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: 30,
  },
  arrowRight: {
    marginLeft: 20,
    marginRight: -2,
  },
  mainContainer: {
    alignItems: 'center',
    gap: 20,
  },
  inputContainer: {
    width: 300,
    backgroundColor: CARD_BACKGROUND_COLOR,
    borderRadius: CARD_BORDER_RADIUS,
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderWidth: 1,
    borderColor: LINE_COLOR,
    boxShadow: CARD_BOX_SHADOW,
    paddingLeft: 15,
  },
  input: {
    fontFamily: 'Rubik',
    fontSize: 16,
    color: '#fff',
    width: '70%',
    height: '100%',
  },
  currencyInsideInput: {
    fontFamily: 'Rubik_500Medium',
    color: '#fff',
    fontSize: 16,
    width: '30%',
    textAlign: 'center',
  },
  conversionContainer: {
    alignItems: 'center',
    width: 300,
    marginBottom: 20,
  },
  textConversion: {
    fontFamily: 'Rubik',
    color: '#fff',
    opacity: 0.5,
  },
});
