import { IColour } from '@/interfaces/IColour';
import { IRangeRecord } from '@/interfaces/IRangeRecord';
import { TCasa } from '@/types/TCasa';
import { TCurrency } from '@/types/TCurrency';
import { TRange } from '@/types/TRange';

export const DOLLAR_API = 'https://dolarapi.com/v1/dolares';
export const HISTORIC_DOLLAR_API = 'https://api.argentinadatos.com/v1/cotizaciones/dolares';

export const TAB_COLOR = 'rgba(9,9,11,1)';
export const BACKGROUND_COLOR = 'rgba(8, 9, 14, 1)';
export const LINE_COLOR = '#2f3336';
export const MARGIN_TAB_BOTTOM = 70;

export const CARD_BACKGROUND_COLOR = '#191d27';
export const CARD_SHADOW_COLOR = 'rgba(47, 51, 54, 0.3)';
export const CARD_BOX_SHADOW = '0px 0px 10px ' + CARD_SHADOW_COLOR;
export const CARD_BORDER_RADIUS = 20;
export const CARD_WIDTH = 325;
export const CARD_HEIGHT = 95;

export const COLOURS: IColour = {
  negative: '#ef4444',
  positive: '#22c55e',
  equal: 'rgba(255,255,255,0.6)',
};

export const VALID_DOLLAR_HOUSES: TCasa[] = ['oficial', 'blue', 'contadoconliqui', 'bolsa', 'mayorista', 'cripto', 'tarjeta'];

export const RANGES: IRangeRecord = {
  '5d': '5 días',
  '1mo': '1 mes',
  '6mo': '6 meses',
  '1y': '1 año',
  '5y': '5 años',
};

export const RANGE_WIDTH: Record<TRange, number> = {
  '5d': 15,
  '1mo': -10,
  '6mo': -10,
  '1y': -10,
  '5y': -10,
};
