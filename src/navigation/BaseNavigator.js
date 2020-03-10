import React, { useMemo } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MultiBar, MultiBarToggle } from 'react-native-multibar';

import { Bookmarks, Likes, Private, Profile, Settings } from '../components';
import { Routes } from './Routes';

const TabsNavigator = () => {
  const Tabs = useMemo(() => createBottomTabNavigator(), []);

  return (
    <Tabs.Navigator
      tabBar={MultiBar}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#F8F8F8',
        inactiveTintColor: '#586589',
        style: {
          backgroundColor: '#171F33'
        },
        tabStyle: {}
      }}
    >
      <Tabs.Screen
        name={Routes.TabsBookmarks}
        component={Bookmarks}
        options={{
          tabBarIcon: ({ tintColor }) => (
            <Icon
              name="bookmark"
              color={tintColor}
              size={24}
            />
          )
        }}
      />
      <Tabs.Screen
        name={Routes.TabsLikes}
        component={Likes}
        options={{
          tabBarIcon: ({ tintColor }) => (
            <Icon
              name="heart"
              color={tintColor}
              size={24}
            />
          )
        }}
      />
      <Tabs.Screen
        name="MultiBar"
        component={() => (<View />)}
        options={({ navigation }) => ({
          tabBarIcon: () => (
            <MultiBarToggle
              navigation={navigation}
              actionSize={30}
              routes={[
                {
                  routeName: Routes.OtherScreen,
                  color: '#FF8360',
                  icon: (
                    <Icon
                      name="rocket"
                      color="#333333"
                      size={15}
                    />
                  )
                },
                {
                  routeName: Routes.OtherScreen,
                  color: '#E8E288',
                  icon: (
                    <Icon
                      name="dashboard"
                      color="#333333"
                      size={15}
                    />
                  )
                },
                {
                  routeName: Routes.OtherScreen,
                  color: '#7DCE82',
                  icon: (
                    <Icon
                      name="gears"
                      color="#333333"
                      size={15}
                    />
                  )
                }
              ]}
              icon={(
                <Icon
                  name="plus"
                  color="#FFFFFF"
                  size={24}
                />
              )}
            />
          )
        })}
      />
      <Tabs.Screen
        name={Routes.TabsPrivate}
        component={Private}
        options={{
          tabBarIcon: ({ tintColor }) => (
            <Icon
              name="lock"
              color={tintColor}
              size={24}
            />
          )
        }}
      />
      <Tabs.Screen
        name={Routes.TabsProfile}
        component={Profile}
        options={{
          tabBarIcon: ({ tintColor }) => (
            <Icon
              name="user"
              color={tintColor}
              size={24}
            />
          )
        }}
      />
    </Tabs.Navigator>
  );
};

export const BaseNavigator = () => {
  const Stack = useMemo(() => createStackNavigator(), []);

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name={Routes.Tabs}
          component={TabsNavigator}
        />
        <Stack.Screen
          name={Routes.OtherScreen}
          component={Settings}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
