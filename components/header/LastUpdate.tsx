import { HandleDate } from '@/classes/date';
import { useDollarContext } from '@/context/DollarContext';
import { StyleSheet, Text, View } from 'react-native';

export default function LastUpdate() {
  const getLastUpdate = () => {
    try {
      // Se toma el CCL como referencia.
      if (!data) {
        return 'Cargando...';
      }
      const todayDate = new HandleDate();
      const lastUpdate = new HandleDate(new Date(data[3].fechaActualizacion));
      return todayDate.getFormattedDateBar() === lastUpdate.getFormattedDateBar() ? `Hoy, ${lastUpdate.getTime()}` : lastUpdate.getFormattedDateBarWithTime();
    } catch (e: any) {
      return 'Cargando...';
    }
  };

  const { data, isPending } = useDollarContext();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Última actualización:</Text>
      <Text style={[styles.text, { fontSize: 14.5 }]}>{isPending ? 'Cargando...' : getLastUpdate()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 5,
    marginTop: 2,
  },
  text: {
    color: '#9f9f9f',
    fontFamily: 'Rubik',
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 18,
  },
});
