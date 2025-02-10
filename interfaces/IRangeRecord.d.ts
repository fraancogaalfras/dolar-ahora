import { TInterval } from '@/types/TInterval';
import { TRange } from '@/types/TRange';
'5d' | '1mo' | '6mo' | '1y' | '5y';

type TRangeValue = '5 días' | '1 mes' | '6 meses' | '1 año' | '5 años';

export interface IRangeRecord extends Record<TRange, TRangeValue> {}
