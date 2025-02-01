import { HandleDate } from '@/classes/date';
import { useDollarQuery } from '@/hooks/useDollarQuery';
import { StyleSheet, Text, View } from 'react-native';

export default function LastUpdate() {
  const getLastUpdate = () => {
    try {
      // Se toma el CCL como referencia.
      if (!data) {
        throw new Error('Cargando...');
      }
      const todayDate = new HandleDate();
      const lastUpdate = new HandleDate(new Date(data[3].fechaActualizacion));
      return todayDate.getFormattedDateBar() === lastUpdate.getFormattedDateBar() ? `Hoy, ${lastUpdate.getTime()}` : lastUpdate.getFormattedDateBarWithTime();
    } catch (e: any) {
      return 'Cargando...';
    }
  };

  const { isPending, data } = useDollarQuery();

  return (
    <View>
      <Text style={styles.text}>
        Última actualización:{'\n'}
        <Text style={{ fontSize: 14.5 }}>{isPending ? 'Cargando...' : getLastUpdate()}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#9f9f9f',
    fontFamily: 'Rubik',
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 18,
  },
});
