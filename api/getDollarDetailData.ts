import { CustomError, NetworkError } from '@/classes/customError';
import { Dollar } from '@/classes/dollar';
import { HISTORIC_DOLLAR_API } from '@/constants/constants';
import { IHistoricDollar } from '@/interfaces/IHistoricDollar';
import { TCasa } from '@/types/TCasa';

export const getDollarDetailData = async (dollarName: TCasa) => {
  try {
    if (!Dollar.isValidHouse(dollarName)) {
      throw new CustomError('Dólar no encontrado.');
    }

    const response = await fetch(`${HISTORIC_DOLLAR_API}/${dollarName}`);

    if (!response.ok) {
      throw new NetworkError('Servicio temporalmente inactivo.');
    }

    const result: IHistoricDollar[] = await response.json();

    if (result.length == 0) {
      throw new NetworkError('Servicio temporalmente inactivo.');
    }

    return result;
  } catch (e: any) {
    if (e instanceof CustomError) {
      throw new CustomError(e.message);
    }
    throw new Error('Compruebe su conexión e intente nuevamente');
  }
};
