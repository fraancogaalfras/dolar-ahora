import { getDolarData } from '@/api/getDolarData';
import { CustomError } from '@/classes/customError';
import { router } from 'expo-router';

export const getDollars = async () => {
  try {
    const data = await getDolarData();
    return data;
  } catch (e: any) {
    if (e instanceof CustomError) {
      throw new CustomError(e.message);
    }
    throw new Error('Ha ocurrido un error inesperado.');
  } finally {
    router.setParams({ refreshing: 'false' });
  }
};
