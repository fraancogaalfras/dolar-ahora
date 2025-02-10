import { useDetailQuery } from '@/hooks/useDetailQuery';
import { TRange } from '@/types/TRange';
import { useLocalSearchParams } from 'expo-router';
import ErrorPage from './ErrorPage';
import Loading from '@/components/loading/Loading';
import DetailComponent from '@/components/detail/DetailComponent';
import { TCasa } from '@/types/TCasa';

export default function DetailPage() {
  const { dollar, range = '5d' } = useLocalSearchParams<{ dollar: TCasa; range: TRange }>();

  const { data, isError, error, retryFn } = useDetailQuery(dollar, range);

  return data ? (
    <DetailComponent data={data} dollar={dollar} range={range} />
  ) : isError ? (
    <ErrorPage customError={{ name: 'Error en detalle de dólares', message: error.message }} retry={retryFn} />
  ) : (
    <Loading />
  );
}
