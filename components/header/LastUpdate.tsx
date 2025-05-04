import { useDollarContext } from '@/context/DollarContext';
import { getLastUpdate } from '@/services/getLastUpdate';
import { memo, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

function LastUpdate() {
  const { data, isPending } = useDollarContext();

  const lastUpdate = useMemo(() => {
    return getLastUpdate(data);
  }, [data]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Última actualización:</Text>
      <Text style={styles.text}>{isPending ? 'Cargando...' : lastUpdate}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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

export default memo(LastUpdate);
