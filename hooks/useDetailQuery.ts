import { getDollarDetail } from '@/services/getDollarDetail';
import { TCasa } from '@/types/TCasa';
import { TRange } from '@/types/TRange';
import { keepPreviousData, useQuery, useQueryClient } from '@tanstack/react-query';

export const useDetailQuery = (dollarName: TCasa, range: TRange) => {
  const queryClient = useQueryClient();

  const retryFn = () => {
    queryClient.fetchQuery({ queryKey: ['detail', dollarName] });
  };

  const query = useQuery({
    queryKey: ['detail', dollarName],
    queryFn: () => getDollarDetail(dollarName, range),
    refetchInterval: 900000,
  });

  return { ...query, retryFn };
};
