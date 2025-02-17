import { Circle } from '@shopify/react-native-skia';
import { SharedValue } from 'react-native-reanimated';

export default function ToolTip({ x, y, color }: { x: SharedValue<number>; y: SharedValue<number>; color: string }) {
  return <Circle cx={x} cy={y} r={8} color={color} />;
}
