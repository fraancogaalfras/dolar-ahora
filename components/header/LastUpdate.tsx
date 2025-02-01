import { HandleDate } from '@/classes/date';
import { IDollar } from '@/interfaces/IDollar';
import { getDollars } from '@/services/getDolarData';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function LastUpdate() {
  const queryClient = useQueryClient();
  const [lastUpdate, setLastUpdate] = useState('Cargando información...');

  const getLastUpdate = async () => {
    try {
      // Se toma el CCL como referencia.
      const data: IDollar[] = await queryClient.ensureQueryData({ queryKey: ['dollars'], queryFn: getDollars, retry: 3 });
      const todayDate = new HandleDate();
      const lastUpdate = new HandleDate(new Date(data[3].fechaActualizacion));
      setLastUpdate(todayDate.getFormattedDateBar() === lastUpdate.getFormattedDateBar() ? `Hoy, ${lastUpdate.getTime()}` : lastUpdate.getFormattedDateBarWithTime());
    } catch (e: any) {
      setLastUpdate('Error al obtener información...');
    }
  };

  useEffect(() => {
    getLastUpdate();
  }, []);

  return (
    <View>
      <Text style={styles.text}>
        Última actualización:{'\n'}
        <Text style={{ fontSize: 14.5 }}>{lastUpdate}</Text>
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
    lineHeight: 20,
  },
});
