import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { BottomTabBarWrapper, MultiBarButton, MultiBarProvider } from 'react-native-multibar';

import { TouchIcon } from './src/components';
import { BlankScreen } from './src/screens';

export default function App() {
  const Tab = React.useRef<ReturnType<typeof createBottomTabNavigator>>(createBottomTabNavigator()).current;

  return (
    <NavigationContainer>
      <MultiBarProvider
        data={[
          ({ navigation }) => (
            <TouchIcon
              name="chevron-left"
              color="#E24E1B"
              size={20}
              onPress={() => {
                if (navigation.canGoBack()) {
                  navigation.goBack();
                }
              }}
            />
          ),
          ({ navigation }) => (
            <TouchIcon
              name="flag"
              color="#E24E1B"
              size={20}
              onPress={() => {
              }}
            />
          ),
          ({ navigation }) => (
            <TouchIcon
              name="headphones"
              color="#E24E1B"
              size={20}
              onPress={() => {
              }}
            />
          ),
          ({ navigation }) => (
            <TouchIcon
              name="heart"
              color="#E24E1B"
              size={20}
              onPress={() => {
              }}
            />
          ),
          ({ navigation }) => (
            <TouchIcon
              name="star"
              color="#E24E1B"
              size={20}
              onPress={() => {
              }}
            />
          ),
          ({ navigation }) => (
            <TouchIcon
              name="music"
              color="#E24E1B"
              size={20}
              onPress={() => {
              }}
            />
          ),
        ]}
        iconSize={40}
        overlayRadius={100}
        initialExtrasVisible={false}
      >
        <Tab.Navigator
          tabBar={(props) => (
            <BottomTabBarWrapper navigation={props.navigation}>
              <BottomTabBar {...props} />
            </BottomTabBarWrapper>
          )}
        >
          <Tab.Screen
            name="Home"
            component={BlankScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons
                  name="home"
                  style={{
                    fontSize: size,
                    color: color
                  }}
                />
              )
            }}
          />
          <Tab.Screen
            name="Likes"
            component={BlankScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons
                  name="star"
                  style={{
                    fontSize: size,
                    color: color
                  }}
                />
              )
            }}
          />
          <Tab.Screen
            name="Center"
            component={BlankScreen}
            options={{
              tabBarLabel: '',
              tabBarButton: () => (
                <MultiBarButton
                  style={{
                    backgroundColor: '#E24E1B'
                  }}
                >
                  <MaterialIcons
                    name="add"
                    style={{
                      fontSize: 32,
                      color: '#EDF2F4'
                    }}
                  />
                </MultiBarButton>
              )
            }}
          />
          <Tab.Screen
            name="Posts"
            component={BlankScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons
                  name="message"
                  style={{
                    fontSize: size,
                    color: color
                  }}
                />
              )
            }}
          />
          <Tab.Screen
            name="Settings"
            component={BlankScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons
                  name="settings"
                  style={{
                    fontSize: size,
                    color: color
                  }}
                />
              )
            }}
          />
        </Tab.Navigator>
      </MultiBarProvider>
    </NavigationContainer>
  );
}
