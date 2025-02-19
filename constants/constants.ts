import { IColour } from '@/interfaces/IColour';
import { IRangeRecord } from '@/interfaces/IRangeRecord';
import { TCasa } from '@/types/TCasa';
import { TCurrency } from '@/types/TCurrency';
import { TRange } from '@/types/TRange';

export const DOLLAR_API = 'https://dolarapi.com/v1/dolares';
export const HISTORIC_DOLLAR_API = 'https://api.argentinadatos.com/v1/cotizaciones/dolares';

export const TAB_COLOR = 'rgba(9,9,11,1)';
export const BACKGROUND_COLOR = 'rgb(12, 13, 20)';
export const LINE_COLOR = '#2f3336';
export const MARGIN_TAB_BOTTOM = 70;

export const CARD_BACKGROUND_COLOR = 'rgb(34, 40, 51)';
export const CARD_BOX_SHADOW = '0px 4px 12px rgba(32, 32, 32, 0.5)';
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
  bolsa: 'MEP (Mercado Electrónico de Pagos)',
  contadoconliqui: 'CCL (Contado con liquidación)',
  mayorista: 'MULC (Mayorista)',
  cripto: 'cripto',
  tarjeta: 'tarjeta',
};

export const DOLLAR_MEANING: Record<TCasa, string> = {
  oficial: 'Es el tipo de cambio regulado y fijado por el Banco Central de la República Argentina (BCRA), utilizado como referencia para operaciones comerciales y financieras en el país.',
  blue: 'Es el tipo de cambio informal que surge del mercado paralelo y se negocia sin intervención del Banco Central de la República Argentina (BCRA).',
  bolsa: 'También conocido como dólar bolsa, es un tipo de cambio legal que se obtiene mediante la compra de bonos en pesos y su venta en dólares dentro del mercado financiero argentino.',
  contadoconliqui: 'Es un tipo de cambio financiero similar al MEP, pero con la diferencia de que permite transferir dólares al exterior.',
  mayorista: 'Es el tipo de cambio utilizado en transacciones mayoristas entre bancos, grandes empresas, exportadores e importadores.',
  cripto:
    'Es el tipo de cambio basado en la compra de stablecoins (criptomonedas estables) como USDT, DAI o USDC, que equivalen a un dólar y pueden adquirirse sin intervención del Banco Central de la República Argentina (BCRA).',
  tarjeta: 'Es el tipo de cambio que se aplica a compras y pagos en dólares realizados con tarjeta de crédito o débito en el exterior o en plataformas internacionales.',
};

export const DOLLAR_DESCRIPTIONS: Record<TCasa, string[]> = {
  oficial: [
    'Su cotización es determinada por el gobierno y se actualiza de manera controlada.',
    'Solo se puede comprar en bancos y casas de cambio autorizadas.',
    'Está sujeto a restricciones como el cepo cambiario, con un límite de USD 200 mensuales por persona.',
    'Es la base para otros tipos de cambio que incluyen impuestos adicionales.',
    'Se usa en operaciones de comercio exterior, importaciones y exportaciones.',
  ],
  blue: [
    'Su precio varía según oferta/demanda, contexto político o especulación.',
    'Se opera en efectivo, en cuevas o corredores informales.',
    'Surge por restricciones al acceso legal de divisas.',
    'Suele tener una cotización más alta que el oficial debido a la escasez de divisas y restricciones cambiarias.',
    'Es utilizado como un termómetro de la economía y la confianza en el peso argentino.',
  ],
  bolsa: [
    'Se opera a través de la Bolsa de Valores, sin intervención directa del Banco Central de la República Argentina (BCRA).',
    'No tiene restricciones de cantidad, lo que lo convierte en una opción para dolarizarse sin pasar por el mercado informal.',
    'Su valor fluctúa según la oferta y demanda de los bonos utilizados en la operación.',
    "Puede implicar costos adicionales, como comisiones y el 'parking' (plazo mínimo de tenencia del bono antes de venderlo en dólares).",
    'Es una alternativa segura y regulada para acceder a dólares sin cepo cambiario.',
  ],
  contadoconliqui: [
    'Se obtiene comprando bonos en pesos en Argentina y vendiéndolos en dólares en el extranjero.',
    'Es utilizado principalmente por empresas e inversores que desean dolarizarse y girar divisas fuera del país.',
    'Su cotización es generalmente más alta que la del MEP debido a la mayor demanda.',
    'Está sujeto a regulaciones que pueden afectar su disponibilidad y costo.',
    'Es una herramienta clave para el comercio internacional y la protección de capitales frente a la devaluación del peso.',
  ],
  mayorista: [
    'Es controlado directamente por el Banco Central de la República Argentina (BCRA) y su acceso está restringido a operadores financieros autorizados.',
    'Su cotización es más baja que la del dólar oficial minorista, ya que no incluye impuestos ni percepciones.',
    'No está disponible para la compra del público en general.',
    'Se usa como referencia para operaciones comerciales de gran volumen, como importaciones y exportaciones.',
    'Es una variable clave en la economía, ya que impacta en los costos de los productos y servicios del país.',
  ],
  cripto: [
    'Se opera en exchanges y plataformas de criptomonedas como Binance, Lemon Cash o Ripio.',
    'Su cotización fluctúa según la oferta y demanda, pero generalmente sigue el valor del dólar blue.',
    'No tiene restricciones de compra, lo que lo hace atractivo para dolarizarse sin cepo.',
    'Permite transferencias de dinero a nivel global sin pasar por bancos o entidades financieras.',
    'Es una opción cada vez más popular para quienes buscan estabilidad en un contexto de alta inflación y devaluación del peso.',
  ],
  tarjeta: [
    'Parte del dólar oficial, pero se le suma 30% en concepto de percepción a cuenta de Ganancias.',
    'Se aplica a pagos de servicios internacionales como Netflix, Spotify, Amazon, y también a compras en el extranjero.',
    'Puede ser más barato que el dólar blue dependiendo de la posibilidad de recuperar las percepciones en la declaración de impuestos.',
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
