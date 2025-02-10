import { getDollarDetailData } from '@/api/getDollarDetailData';
import { CustomError } from '@/classes/customError';
import { HistoricDollar } from '@/classes/historicDollar';
import { IHistoricDollar } from '@/interfaces/IHistoricDollar';
import { TCasa } from '@/types/TCasa';
import { TRange } from '@/types/TRange';

export const handleDetailData = (data: IHistoricDollar[], range: TRange) => {
  try {
    const historicData = new HistoricDollar(data);
    historicData.filterByRange(range);
    return historicData;
  } catch (e: any) {
    throw new Error('Ha ocurrido un error inesperado.');
  }
};

export const getDollarDetail = async (dollarName: TCasa, range: TRange) => {
  try {
    const data = await getDollarDetailData(dollarName);
    return data;
  } catch (e: any) {
    if (e instanceof CustomError) {
      throw new CustomError(e.message);
    }
    throw new Error('Ha ocurrido un error inesperado.');
  }
};
