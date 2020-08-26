import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import colors from './styles/colors';

import ComingSoon from './screens/ComingSoon';
import Following from './screens/ComingSoon';

const { Navigator, Screen } = createBottomTabNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
    <Navigator>
      <Screen
        component={Following}
        name="Following"
        options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <Ionicons
                name="md-heart"
                size={size}
                color={focused ? colors.purple : colors.black}
              />
            )
          }
        }}
      />

      <Screen
        component={ComingSoon}
        name="Discover"
        options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <MaterialCommunityIcons
                name="compass-outline"
                size={size}
                color={focused ? colors.purple : colors.black}
              />
            )
          }
        }}
      />

      <Screen
        component={ComingSoon}
        name="Browse"
        options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <Ionicons
                name="md-browsers"
                size={size}
                color={focused ? colors.purple : colors.black}
              />
            )
          }
        }}
      />

      <Screen
        component={ComingSoon}
        name="Esports"
        options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <MaterialCommunityIcons
                name="trophy-outline"
                size={size}
                color={focused ? colors.purple : colors.black}
              />
            )
          }
        }}
      />
    </Navigator>
  </NavigationContainer>
);

export default Routes;
