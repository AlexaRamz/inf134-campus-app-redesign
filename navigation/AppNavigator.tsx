import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import ARCScreen from '../screens/ARCScreen';
import DiningScreen from '../screens/DiningScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

import HomeIcon from '../assets/icons/home-icon.png';
import DiningIcon from '../assets/icons/dining-icon.png';
import ARCIcon from '../assets/icons/arc-icon.png';
import ProfileIcon from '../assets/icons/profile-icon.png';

const Tab = createBottomTabNavigator()

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarStyle: {
            backgroundColor: '#255799',
        },
        tabBarActiveTintColor: '#FECC07',
        tabBarInactiveTintColor: 'white', 
        tabBarShowLabel: false,
      }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image
                source={HomeIcon}
                style={{
                  width: size,
                  height: size,
                  tintColor: color,
                }}
              />
            ),
          }}
        />
        <Tab.Screen 
          name="Dining" 
          component={DiningScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image
                source={DiningIcon}
                style={{
                  width: size,
                  height: size,
                  tintColor: color,
                  resizeMode: 'contain',
                }}
              />
            ),
          }}
        />
        <Tab.Screen 
          name="ARC" 
          component={ARCScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image
                source={ARCIcon}
                style={{
                  width: size,
                  height: size,
                  tintColor: color,
                  resizeMode: 'contain',
                }}
              />
            ),
          }}
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image
                source={ProfileIcon}
                style={{
                  width: size,
                  height: size,
                  tintColor: color,
                  resizeMode: 'contain',
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
