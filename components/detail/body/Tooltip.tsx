import { Circle, DashPathEffect, Group, Line, vec } from '@shopify/react-native-skia';
import { memo } from 'react';
import { SharedValue, useDerivedValue } from 'react-native-reanimated';

function ToolTip({ x, y, color, chartBounds }: { x: SharedValue<number>; y: SharedValue<number>; color: string; chartBounds: any }) {
  const p1 = useDerivedValue(() => vec(x.value, 0));
  const p2 = useDerivedValue(() => vec(x.value, chartBounds.bottom));

  return (
    <Group>
      <Line p1={p1} p2={p2} strokeWidth={0.4} color={color}>
        <DashPathEffect intervals={[6, 6]} />
      </Line>
      <Circle cx={x} cy={y} r={8} color={color} />
    </Group>
  );
}

export default memo(ToolTip);
