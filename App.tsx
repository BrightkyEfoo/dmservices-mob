/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Views/Home';
import MyTabBar from './Components/TabBar';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Contact from './Views/Contact';
import Settings from './Views/Settings';
import SettingsAbout from './Views/SettingsAbout';
import About from './Views/About';
import Services from './Views/Services';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName='home'
        screenOptions={{
          headerShown: false,
        }}
        tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen name="home" component={Home} />
        <Tab.Screen name="about" component={About} />
        <Tab.Screen name="services" component={Services} />
        <Tab.Screen name="contact" component={Contact} />
        <Tab.Screen name="more" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
