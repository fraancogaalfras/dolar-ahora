import { CARD_BACKGROUND_COLOR, CARD_BORDER_RADIUS, CARD_BOX_SHADOW, LINE_COLOR } from '@/constants/constants';
import { ICurrency } from '@/interfaces/ICurrency';
import { IDollar } from '@/interfaces/IDollar';
import { memo, useCallback, useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import ConverterHeader from './header/ConverterHeader';
import ConverterBody from './body/ConverterBody';
import ConverterFooter from './footer/ConverterFooter';

function Converter({ data }: { data: IDollar[] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isReverse, setIsReverse] = useState(false);
  const [arsCurrency, setArsCurrency] = useState<ICurrency>({
    amount: 1000,
    name: 'ARS',
  });
  const [usdCurrency, setUsdCurrency] = useState<ICurrency>({
    amount: arsCurrency.amount / data[selectedIndex].venta,
    name: data[selectedIndex].nombre,
  });
  const [exchangeRate, setExchangeRate] = useState(1 / data[selectedIndex].venta);

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

  return (
    <ScrollView contentContainerStyle={styles.scrollViewWrapper} showsVerticalScrollIndicator={true} keyboardShouldPersistTaps="always">
      <ConverterHeader data={data} arsCurrencyName={arsCurrency.name} isReverse={isReverse} selectedIndex={selectedIndex} handleSelectorChange={handleSelectorChange} />
      <ConverterBody arsCurrency={arsCurrency} usdCurrency={usdCurrency} isReverse={isReverse} handleArsChange={handleArsChange} handleUsdChange={handleUsdChange} handleReverse={handleReverse} />
      <ConverterFooter data={data} selectedIndex={selectedIndex} usdCurrencyName={usdCurrency.name} />
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
    marginTop: 50,
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

export default memo(Converter);
