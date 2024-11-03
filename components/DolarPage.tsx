import { FlatList, StyleSheet, View } from 'react-native';
import { Idolares, IdolaresHistorico } from '@/interfaces/types';
import CardDolar from './dolar/CardDolar';
import getDolarVariation from '@/utils/variation';
import { LinearGradient } from 'expo-linear-gradient';

export default function DolarPage({ dataToday, dataYesterday }: { dataToday: Idolares[]; dataYesterday: IdolaresHistorico[] }) {
  const variations = getDolarVariation(dataToday, dataYesterday);

  return (
    <LinearGradient colors={['rgba(0,0,0,0.8)', 'transparent']} style={styles.main_wrapper}>
      <View style={{ width: '100%', height: '100%' }}>
        <FlatList
          data={dataToday}
          renderItem={({ item }) => <CardDolar data={item} variation={variations[item.casa]} />}
          contentContainerStyle={{ gap: 30, alignItems: 'center' }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  main_wrapper: {
    paddingVertical: 50,
    padding: 10,
    fontFamily: 'Virgil',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(25 25 25)',
  },
});
