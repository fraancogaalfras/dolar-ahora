import { IconConverter, IconDollar } from '@/assets/icons/Icons';
import Header from '@/components/header/Header';
import { LINE_COLOR, DOLAR_PAGE_COLOR, PADDING_TAB_BOTTOM } from '@/constants/constants';
import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: DOLAR_PAGE_COLOR,
          height: PADDING_TAB_BOTTOM,
          position: 'absolute',
          justifyContent: 'space-between',
          paddingHorizontal: 50,
          borderColor: LINE_COLOR,
          borderTopWidth: StyleSheet.hairlineWidth,
        },
        tabBarIconStyle: {
          marginTop: 15,
        },
        header: () => <Header />,
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          shadowColor: 'transparent',
          borderBottomWidth: 0,
          borderBottomColor: 'transparent',
        },
        headerShadowVisible: false,
        // headerShown: false,
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
