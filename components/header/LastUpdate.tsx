import { useDollarContext } from '@/context/DollarContext';
import { getLastUpdate } from '@/services/getLastUpdate';
import { StyleSheet, Text, View } from 'react-native';

export default function LastUpdate() {
  const { data, isPending } = useDollarContext();
  const lastUpdate = getLastUpdate(data);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Última actualización:</Text>
      <Text style={styles.text}>{isPending ? 'Cargando...' : lastUpdate}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: -10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    color: '#fff',
    fontFamily: 'Rubik',
    fontSize: 13.5,
    lineHeight: 20,
    opacity: 0.5,
  },
});
