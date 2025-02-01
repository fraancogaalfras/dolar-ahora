import { getDolarData } from '@/api/getDolarData';
import { router } from 'expo-router';

export const getDollars = async () => {
  try {
    const data = await getDolarData();
    return data;
  } catch (e: any) {
    throw new Error(e.message);
  } finally {
    router.setParams({ refreshing: 'false' });
  }
};
