import { IconConverter, IconDollar } from '@/assets/icons/Icons';
import Header from '@/components/header/Header';
import { LINE_COLOR, MARGIN_TAB_BOTTOM, TAB_COLOR } from '@/constants/constants';
import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: TAB_COLOR,
          height: MARGIN_TAB_BOTTOM,
          position: 'absolute',
          justifyContent: 'space-between',
          paddingHorizontal: 50,
          borderColor: LINE_COLOR,
          borderTopWidth: StyleSheet.hairlineWidth,
        },
        tabBarIconStyle: {
          marginTop: 15,
        },
        // headerShown: false,
        header: () => <Header />,
        headerStyle: {
          height: 70,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => IconDollar({ opacity: focused ? 1 : 0.5 }),
          tabBarLabel: 'Inicio',
          tabBarAccessibilityLabel: 'Inicio',
        }}
      />
      <Tabs.Screen
        name="converter/index"
        options={{
          tabBarIcon: ({ focused }) => IconConverter({ opacity: focused ? 1 : 0.5 }),
          tabBarLabel: 'Conversor',
          tabBarAccessibilityLabel: 'Conversor',
        }}
      />
    </Tabs>
  );
}
