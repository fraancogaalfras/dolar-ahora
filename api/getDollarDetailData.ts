import { NetworkError } from '@/classes/customError';
import { Dollar } from '@/classes/dollar';
import { HISTORIC_DOLLAR_API } from '@/constants/constants';
import { IHistoricDollar } from '@/interfaces/IHistoricDollar';
import { TCasa } from '@/types/TCasa';

export const getDollarDetailData = async (dollarName: TCasa) => {
  try {
    if (!Dollar.isValidHouse(dollarName)) {
      throw new Error('Dólar no encontrado.');
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
    if (e instanceof NetworkError) {
      throw new Error(e.message);
    }
    throw new Error('Compruebe su conexión e intente nuevamente');
  }
};
