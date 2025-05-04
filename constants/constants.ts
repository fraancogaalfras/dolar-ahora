import { IColour } from '@/interfaces/IColour';
import { IRangeRecord } from '@/interfaces/IRangeRecord';
import { TCasa } from '@/types/TCasa';
import { TCurrency } from '@/types/TCurrency';
import { TRange } from '@/types/TRange';

export const DOLLAR_API = 'https://dolarapi.com/v1/dolares';
export const HISTORIC_DOLLAR_API = 'https://api.argentinadatos.com/v1/cotizaciones/dolares';

export const TAB_COLOR = 'rgba(9,9,11,1)';
export const BACKGROUND_COLOR = '#1f2630';
export const LINE_COLOR = '#2f3336';
export const MARGIN_TAB_BOTTOM = 70;

export const CARD_BACKGROUND_COLOR = 'rgba(41, 49, 60, 1)';
export const CARD_BOX_SHADOW = '0px 8px 15px rgba(15, 15, 15, 0.2)';
export const CARD_BORDER_RADIUS = 20;
export const CARD_WIDTH = 325;
export const CARD_HEIGHT = 95;

export const COLOURS: IColour = {
  negative: '#ef4444',
  positive: '#22c55e',
  equal: 'rgba(255,255,255,0.6)',
  grey: 'rgba(255,255,255,0.7)',
  areaPositive: 'rgba(34, 197, 94, 0.2)',
  areaPositiveLow: 'rgba(34, 197, 94, 0)',
  areaNegative: 'rgba(239, 68, 68, 0.2)',
  areaNegativeLow: 'rgba(239, 68, 68, 0)',
  areaEqual: 'rgba(255,255,255, 0.2)',
  areaEqualLow: 'rgba(255,255,255, 0)',
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

export const DOLLAR_MEANING: Record<TCasa, string> = {
  oficial: 'Es el tipo de cambio regulado por el Banco Central de la República Argentina (BCRA), utilizado como referencia para operaciones comerciales y financieras.',
  blue: 'Es el tipo de cambio informal que surge del mercado paralelo y se negocia sin intervención del BCRA.',
  bolsa:
    'Es un tipo de cambio legal que se obtiene mediante la compra de bonos en pesos y su venta en dólares dentro del mercado financiero argentino. Permite acceder a divisas sin restricciones y sin intervención del BCRA.',
  contadoconliqui:
    'Es un tipo de cambio financiero que se obtiene comprando bonos en pesos en Argentina y vendiéndolos en dólares en el extranjero. Es utilizado principalmente por empresas e inversores que desean dolarizarse y girar divisas fuera del país.',
  mayorista:
    'Es el tipo de cambio utilizado en transacciones mayoristas entre bancos, grandes empresas, exportadores e importadores.',
  cripto:
    'Es el tipo de cambio basado en la compra de stablecoins (criptomonedas estables) como USDT, DAI o USDC, que equivalen a un dólar y pueden adquirirse sin intervención del BCRA. Su cotización suele seguir de cerca al dólar blue.',
  tarjeta:
    'Es el tipo de cambio que se aplica a compras y pagos en dólares realizados con tarjeta de crédito o débito en el exterior o en plataformas internacionales.',
};

export const DOLLAR_DESCRIPTIONS: Record<TCasa, string[]> = {
  oficial: [
    'Opera dentro de una banda de flotación entre $1.000 y $1.400 por dólar, establecida en abril de 2025.',
    'El BCRA interviene solo si la cotización alcanza alguno de los extremos de la banda.',
    'Se eliminó el límite mensual de USD 200 para la compra de dólares por personas físicas.',
    'Disponible para la compra en bancos y casas de cambio autorizadas sin restricciones.',
    'Utilizado como referencia para operaciones comerciales, importaciones y exportaciones.',
  ],
  blue: [
    'Cotiza en el mercado informal sin intervención del BCRA.',
    'Tras la eliminación del cepo cambiario, su brecha con el dólar oficial se ha reducido significativamente.',
    'Se opera en efectivo, en cuevas o corredores informales.',
    'Refleja la percepción del mercado sobre la economía y la confianza en el peso argentino.',
    'Su cotización puede variar según la oferta y demanda, y el contexto político y económico.',
  ],
  bolsa: [
    'Se obtiene mediante la compra de bonos en pesos y su venta en dólares dentro del mercado financiero argentino.',
    'Permite acceder a dólares sin restricciones y sin intervención del BCRA.',
    'No tiene límites de compra ni percepciones impositivas adicionales.',
    'Su valor fluctúa según la oferta y demanda de los bonos utilizados en la operación.',
    'Es una alternativa legal y segura para dolarizarse sin pasar por el mercado informal.',
  ],
  contadoconliqui: [
    'Se obtiene comprando bonos en pesos en Argentina y vendiéndolos en dólares en el extranjero.',
    'Utilizado principalmente por empresas e inversores para girar divisas fuera del país.',
    'No está sujeto a restricciones ni percepciones impositivas adicionales.',
    'Su cotización puede ser más alta que la del MEP debido a la demanda para transferencias al exterior.',
    'Es una herramienta clave para el comercio internacional y la protección de capitales frente a la devaluación del peso.',
  ],
  mayorista: [
    'Tipo de cambio utilizado en transacciones mayoristas entre bancos, grandes empresas, exportadores e importadores.',
    'Opera dentro de la banda de flotación establecida por el gobierno desde abril de 2025.',
    'No está disponible para la compra del público en general.',
    'Su cotización es más baja que la del dólar oficial minorista, ya que no incluye impuestos ni percepciones.',
    'Impacta en los costos de los productos y servicios del país, siendo una variable clave en la economía.',
  ],
  cripto: [
    'Se opera en exchanges y plataformas de criptomonedas como Binance, Lemon Cash o Ripio.',
    'Su cotización fluctúa según la oferta y demanda, pero generalmente sigue el valor del dólar blue.',
    'No tiene restricciones de compra ni percepciones impositivas adicionales.',
    'Permite transferencias de dinero a nivel global sin pasar por bancos o entidades financieras.',
    'Es una opción cada vez más popular para quienes buscan estabilidad en un contexto de alta inflación y devaluación del peso.',
  ],
  tarjeta: [
    'Se aplica a compras y pagos en dólares realizados con tarjeta de crédito o débito en el exterior o en plataformas internacionales.',
    'Desde abril de 2025, se eliminó el Impuesto PAIS, pero se mantiene una percepción del 30% a cuenta de los impuestos a las Ganancias y Bienes Personales.',
    'Si los consumos en dólares se pagan con dólares propios en cuenta, no se aplica la percepción impositiva.',
    'Es importante considerar esta percepción al calcular el costo total de las compras en dólares.',
    'Afecta a quienes viajan fuera del país o realizan compras en moneda extranjera sin tener dólares en efectivo.',
  ],
};

export const TRANSLATE_MONTHS: Record<string, string> = {
  Jan: '01',
  Feb: '02',
  Mar: '03',
  Apr: '04',
  May: '05',
  Jun: '06',
  Jul: '07',
  Aug: '08',
  Sep: '09',
  Oct: '10',
  Nov: '11',
  Dec: '12',
};
