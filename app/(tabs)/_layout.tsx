import { IconConverter, IconDollar } from '@/assets/icons/Icons';
import Header from '@/components/header/Header';
import { BACKGROUND_COLOR, LINE_COLOR, MARGIN_TAB_BOTTOM } from '@/constants/constants';
import { Tabs } from 'expo-router';
import { Pressable } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: BACKGROUND_COLOR,
          height: MARGIN_TAB_BOTTOM,
          position: 'absolute',
          justifyContent: 'space-between',
          paddingHorizontal: 50,
          borderColor: LINE_COLOR,
          borderTopWidth: 1,
        },
        tabBarIconStyle: {
          marginTop: 10,
        },
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
          tabBarButton: (props) => <Pressable {...props} android_ripple={{ color: 'transparent' }} />,
          tabBarLabel: 'Inicio',
          tabBarAccessibilityLabel: 'Inicio',
        }}
      />
      <Tabs.Screen
        name="converter/index"
        options={{
          tabBarIcon: ({ focused }) => IconConverter({ opacity: focused ? 1 : 0.5 }),
          tabBarButton: (props) => <Pressable {...props} android_ripple={{ color: 'transparent' }} />,
          tabBarLabel: 'Conversor',
          tabBarAccessibilityLabel: 'Conversor',
        }}
      />
    </Tabs>
  );
}
