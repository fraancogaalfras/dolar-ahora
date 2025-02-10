import { getDollarDetail } from '@/services/getDollarDetail';
import { TCasa } from '@/types/TCasa';
import { TRange } from '@/types/TRange';
import { keepPreviousData, useQuery, useQueryClient } from '@tanstack/react-query';

export const useDetailQuery = (dollarName: TCasa, range: TRange) => {
  const queryClient = useQueryClient();

  const retryFn = () => {
    queryClient.fetchQuery({ queryKey: ['detail', dollarName, range] });
  };

  const query = useQuery({
    queryKey: ['detail', dollarName, range],
    queryFn: () => getDollarDetail(dollarName, range),
    refetchInterval: 900000,
    placeholderData: keepPreviousData,
  });

  return { ...query, retryFn };
};
