import Loading from '@/components/loading/Loading';
import { useQuery } from '@tanstack/react-query';
import { Text, View } from 'react-native';
import ErrorPage from './ErrorPage';
import Converter from '@/components/converter/Converter';
import { PADDING_TAB_BOTTOM } from '@/constants/constants';

export default function ConverterPage() {
  const { isPending, isError, error, data }: { isPending: boolean; isError: boolean; error: any; data: any } = useQuery({ queryKey: ['dollars'] });

  return isPending ? (
    <Loading />
  ) : isError ? (
    <ErrorPage error={{ message: error.message }} />
  ) : (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingBottom: PADDING_TAB_BOTTOM }}>
      <Converter data={data} />
    </View>
  );
}
