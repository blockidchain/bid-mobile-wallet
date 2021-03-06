import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { BottomTabBarComponent } from 'app/components';
import { Route, MainTabNavigatorParams } from 'app/consts';
import { ContactListScreen, DashboardScreen, SettingsScreen, LogoutScreen } from 'app/screens';

const i18n = require('../../loc');

const Tab = createBottomTabNavigator<MainTabNavigatorParams>();

export const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={props => <BottomTabBarComponent {...props} />}
      tabBarOptions={{
        keyboardHidesTabBar: true,
      }}
    >
      <Tab.Screen
        name={Route.Dashboard}
        component={DashboardScreen}
        options={() => ({
          tabBarLabel: i18n.tabNavigator.dashboard,
        })}
      />
      <Tab.Screen
        name={Route.ContactList}
        component={ContactListScreen}
        options={() => ({
          tabBarLabel: i18n.tabNavigator.addressBook,
        })}
      />
      <Tab.Screen
        name={Route.Settings}
        component={SettingsScreen}
        options={() => ({
          tabBarLabel: i18n.tabNavigator.settings,
        })}
      />
      <Tab.Screen
        name={Route.Logout}
        component={LogoutScreen}
        options={() => ({
          tabBarLabel: 'Logout',
        })}
      />
    </Tab.Navigator>
  );
};
