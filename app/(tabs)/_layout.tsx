import { IconConverter, IconDollar } from '@/assets/icons/Icons';
import { BACKGROUND_COLOR, LINE_COLOR } from '@/constants/constants';
import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: BACKGROUND_COLOR,
          height: 70,
          position: 'absolute',
          justifyContent: 'space-between',
          paddingHorizontal: 50,
          borderColor: LINE_COLOR,
          borderTopWidth: StyleSheet.hairlineWidth,
        },
        tabBarIconStyle: {
          marginTop: 15,
        },
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => IconDollar({ opacity: focused ? 1 : 0.5 }),
        }}
      />
      <Tabs.Screen
        name="converter/index"
        options={{
          tabBarIcon: ({ focused }) => IconConverter({ opacity: focused ? 1 : 0.5 }),
        }}
      />
    </Tabs>
  );
}
