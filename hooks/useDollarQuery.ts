import { getDollars } from '@/services/getDolarData';
import { useQuery, useQueryClient } from '@tanstack/react-query';

export const useDollarQuery = () => {
  const queryClient = useQueryClient();

  const retryFn = () => {
    queryClient.fetchQuery({ queryKey: ['dollars'] });
  };

  const query = useQuery({
    queryKey: ['dollars'],
    queryFn: getDollars,
    refetchInterval: 900000,
  });

  return { ...query, retryFn };
};
