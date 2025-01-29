import { getLastUpdate } from '@/services/getDolarData';
import { useQuery } from '@tanstack/react-query';
import { StyleSheet, Text, View } from 'react-native';

export default function LastUpdate() {
  const { isPending, data: lastUpdate } = useQuery({ queryKey: ['lastUpdate'], queryFn: getLastUpdate, refetchInterval: 900000 });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Última actualización:{'\n'}
        <Text style={{ fontSize: 14 }}>{isPending ? 'Cargando información...' : lastUpdate}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingBottom: 20,
  },
  text: {
    color: '#9f9f9f',
    fontFamily: 'Rubik',
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 20,
  },
});
