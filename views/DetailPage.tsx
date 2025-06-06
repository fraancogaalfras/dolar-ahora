import { useDetailQuery } from '@/hooks/useDetailQuery';
import { TRange } from '@/types/TRange';
import { useLocalSearchParams } from 'expo-router';
import ErrorPage from './ErrorPage';
import Loading from '@/components/loading/Loading';
import DetailComponent from '@/components/detail/DetailComponent';
import { TCasa } from '@/types/TCasa';
import { View } from 'react-native';
import { memo } from 'react';

function DetailPage() {
  const { dollar, range = '5d' } = useLocalSearchParams<{ dollar: TCasa; range: TRange }>();

  const { data, isError, error, retryFn } = useDetailQuery(dollar, range);

  return data ? (
    <View style={{ flex: 1 }}>
      <DetailComponent data={data} dollar={dollar} range={range} />
    </View>
  ) : isError ? (
    <ErrorPage customError={{ name: 'Error en detalle de dólares', message: error.message }} retry={retryFn} />
  ) : (
    <Loading />
  );
}

export default memo(DetailPage);
