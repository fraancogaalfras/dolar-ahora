import { IconArrowRight, IconReverse } from '@/assets/icons/Icons';
import { CARD_BACKGROUND_COLOR, CARD_BORDER_RADIUS, CARD_BOX_SHADOW, CARD_SHADOW_COLOR, LINE_COLOR } from '@/constants/constants';
import { ICurrency } from '@/interfaces/ICurrency';
import { IDollar } from '@/interfaces/IDollar';
import { TCurrency } from '@/types/TCurrency';
import { useMemo, useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
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

  const handleArsChange = (value: string) => {
    if (value == '') {
      value = '0';
    }
    value = value.replace(/\D/g, '');
    setArsCurrency({
      ...arsCurrency,
      amount: parseFloat(value),
    });
    setUsdCurrency({
      ...usdCurrency,
      amount: parseFloat(value) * exchangeRate,
    });
  };

  const handleUsdChange = (value: string) => {
    if (value == '') {
      value = '0';
    }
    value = value.replace(/\D/g, '');
    setUsdCurrency({
      ...usdCurrency,
      amount: parseFloat(value),
    });
    setArsCurrency({
      ...arsCurrency,
      amount: parseFloat(value) / exchangeRate,
    });
  };

  const handleSelectorChange = (index: number) => {
    const newExchangeRate = 1 / data[index].venta;
    const newSelectedIndex = index;

    setSelectedIndex(newSelectedIndex);
    setExchangeRate(newExchangeRate);

    if (!isReverse) {
      setUsdCurrency({
        amount: arsCurrency.amount * newExchangeRate,
        name: data[newSelectedIndex].nombre,
      });
    } else {
      setUsdCurrency({
        ...usdCurrency,
        name: data[newSelectedIndex].nombre,
      });
      setArsCurrency({
        amount: usdCurrency.amount / newExchangeRate,
        name: 'ARS',
      });
    }
  };

  const handleReverse = () => {
    setIsReverse(!isReverse);
  };

  const wheelOptions = useMemo(() => {
    const options: TCurrency[] = data.map((dollar) => dollar.nombre as TCurrency);
    return options;
  }, []);

  const staticWheelProps = useMemo(
    () => ({
      visibleRest: 2,
      itemHeight: 40,
      itemStyle: { backgroundColor: 'rgba(0,0,0,0)', padding: 0 },
      itemTextStyle: { fontSize: 25, color: '#fff', fontFamily: 'Rubik_500Medium', padding: 0, margin: 0 },
      containerStyle: { padding: 0, margin: 0 },
      selectedIndicatorStyle: { backgroundColor: 'rgba(0,0,0,0)', borderRadius: 0, padding: 0, margin: 0 },
      options: wheelOptions,
    }),
    []
  );

  return (
    <View style={styles.wrapper}>
      <View style={styles.headContainer}>
        <Text style={styles.title}>{arsCurrency.name}</Text>
        <View style={[{ marginLeft: 20, marginRight: 0 }, isReverse ? { transform: [{ rotate: '180deg' }] } : undefined]}>
          <IconArrowRight />
        </View>
        <WheelPicker {...staticWheelProps} onChange={handleSelectorChange} selectedIndex={selectedIndex} />
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
        <TouchableOpacity onPress={handleReverse}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    gap: 30,
    width: '100%',
  },
  title: {
    fontFamily: 'Rubik',
    color: '#fff',
    fontSize: 25,
  },
  headContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: 20,
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
  },
  currencyInsideInput: {
    fontFamily: 'Rubik_500Medium',
    color: '#fff',
    fontSize: 14,
    width: '30%',
    textAlign: 'center',
  },
  conversionContainer: {
    alignItems: 'center',
    width: 300,
  },
  textConversion: {
    fontFamily: 'Rubik',
    color: '#fff',
    opacity: 0.5,
  },
});
