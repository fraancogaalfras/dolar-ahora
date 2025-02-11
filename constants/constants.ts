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
  grey: 'rgba(255,255,255,0.7)',
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
  '5d': 10,
  '1mo': -12,
  '6mo': -12,
  '1y': -12,
  '5y': -12,
};

export const TRANSLATE_HOUSE: Record<TCasa, TCurrency> = {
  oficial: 'Oficial',
  blue: 'Blue',
  bolsa: 'MEP',
  contadoconliqui: 'CCL',
  mayorista: 'MULC',
  cripto: 'Cripto',
  tarjeta: 'Tarjeta',
};

export const TRANSLATE_HOUSE_DESCRIPTION: Record<TCasa, string> = {
  oficial: 'oficial',
  blue: 'blue',
  bolsa: 'MEP',
  contadoconliqui: 'CCL',
  mayorista: 'MULC',
  cripto: 'cripto',
  tarjeta: 'tarjeta',
};

export const DOLLAR_DESCRIPTIONS: Record<TCasa, string[]> = {
  oficial: [
    'Es el tipo de cambio establecido por el Banco Central de la República Argentina (BCRA).',
    'Se usa para operaciones legales y comercio exterior, pero está sujeto a restricciones y regulaciones.',
  ],

  blue: [
    'Es el tipo de cambio informal que se negocia en el mercado paralelo, sin intervención del BCRA',
    'Suele ser más alto que el oficial debido a la demanda de dólares fuera del sistema regulado.',
  ],
  bolsa: ['Se obtiene comprando bonos en pesos y vendiéndolos en dólares dentro del mercado local.', 'Es legal y no requiere autorización del BCRA.'],
  contadoconliqui: [
    'Es un tipo de cambio legal que permite comprar dólares en el exterior mediante la compra y venta de bonos o acciones entre mercados locales e internacionales.',
    'Es usado por empresas e inversores para girar divisas al extranjero.',
  ],
  mayorista: ['Es el dólar que se negocia en el mercado interbancario bajo regulación del BCRA.', 'Se usa para operaciones comerciales y pagos de importaciones.'],
  cripto: [
    'Es el precio del dólar basado en la compra de criptomonedas (como USDT o DAI) con pesos.',
    'Suele estar en línea con el blue o el CCL, y permite acceder a dólares sin restricciones oficiales.',
  ],
  tarjeta: ['Es el tipo de cambio que se aplica a compras en dólares con tarjetas de crédito o débito en el exterior.', 'Se calcula sumando impuestos al dólar oficial (Percepción de Ganancias).'],
};
