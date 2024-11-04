import { FlatList, StyleSheet, View } from 'react-native';
import CardDolar from './dolar/CardDolar';
import { LinearGradient } from 'expo-linear-gradient';
import { Idolars, IdolarsBind } from '@/interfaces/types';

export default function DolarPage({ data }: { data: IdolarsBind[]}) {
  return (
    <LinearGradient colors={['rgba(0,0,0,0.8)', 'transparent']} style={styles.main_wrapper}>
      <View style={{ width: '100%', height: '100%' }}>
        <FlatList data={data} renderItem={({ item }) => <CardDolar data={item} />} contentContainerStyle={{ gap: 30, alignItems: 'center' }} showsVerticalScrollIndicator={false} />
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
