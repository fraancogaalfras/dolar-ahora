import { COLOURS } from '@/constants/constants';
import { useAnimatedStyle, useDerivedValue } from 'react-native-reanimated';
import { ChartPressState } from 'victory-native';

export const useAnimatedHeader = ({
  chartPressState,
  chartPressIsActive,
  minPriceData,
  maxPrice,
  variationData,
  minDate,
}: {
  minPriceData: number;
  maxPrice: number;
  variationData: number;
  chartPressState: ChartPressState<{
    x: number;
    y: {
      value: number;
    };
  }>;
  chartPressIsActive: boolean;
  minDate: string;
}) => {
  const date = useDerivedValue(() => (chartPressIsActive ? `${chartPressState.x.value.value}` : minDate));

  const minPrice = useDerivedValue(() =>
    chartPressIsActive
      ? '$' + chartPressState.y.value.value.value.toLocaleString('de-DE', { minimumFractionDigits: 1, maximumFractionDigits: 1 })
      : '$' + minPriceData.toLocaleString('de-DE', { minimumFractionDigits: 1, maximumFractionDigits: 1 })
  );

  const diffPrice = useDerivedValue(() =>
    chartPressIsActive
      ? `$(${maxPrice - chartPressState.y.value.value.value > 0 ? '+' : ''}` +
        (maxPrice - chartPressState.y.value.value.value).toLocaleString('de-DE', { minimumFractionDigits: 1, maximumFractionDigits: 1 }) +
        ')'
      : `$(${maxPrice - minPriceData > 0 ? '+' : ''}` + (maxPrice - minPriceData).toLocaleString('de-DE', { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + ')'
  );

  const variation = useDerivedValue(() =>
    chartPressIsActive
      ? `${(maxPrice / chartPressState.y.value.value.value - 1) * 100 > 0 ? '+' : ''}${((maxPrice / chartPressState.y.value.value.value - 1) * 100).toLocaleString('de-DE', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}%`
      : `${variationData > 0 ? '+' : ''}${variationData.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%`
  );

  const animatedStyles = useAnimatedStyle(() => ({
    color:
      parseFloat(variation.value.replace(',', '.').replace('%', '').replace('+', '')) > 0
        ? COLOURS.positive
        : parseFloat(variation.value.replace(',', '.').replace('%', '').replace('+', '')) == 0
        ? COLOURS.equal
        : COLOURS.negative,
  }));

  return { minPrice, diffPrice, date, variation, animatedStyles };
};
