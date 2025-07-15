import { Image, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Montserrat_700Bold, Montserrat_500Medium, Montserrat_400Regular } from '@expo-google-fonts/montserrat';

import DiningScreen from '../screens/DiningScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

import HomeIcon from '../assets/icons/home_icon.png';
import DiningIcon from '../assets/icons/dining_icon.png';
import ARCIcon from '../assets/icons/arc_icon.png';
import ProfileIcon from '../assets/icons/profile_icon.png';
import ARCStackScreen from './ARCStackScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator()

const ADDITIONAL_BOTTOM_PADDING = 10;
const TOP_PADDING = 10;
const BASE_TAB_BAR_HEIGHT = 68;

export default function AppNavigator() {
  const insets = useSafeAreaInsets();
  const totalBottomPadding = Math.max(ADDITIONAL_BOTTOM_PADDING, insets.bottom);

  const [fontsLoaded] = useFonts({
    Montserrat_700Bold: Montserrat_700Bold,
    Montserrat_500Medium: Montserrat_500Medium,
    Montserrat_400Regular: Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarStyle: {
            backgroundColor: '#255799',
            paddingTop: TOP_PADDING,
            paddingBottom: totalBottomPadding,
            height: BASE_TAB_BAR_HEIGHT + totalBottomPadding,
        },
        tabBarActiveTintColor: '#FECC07',
        tabBarInactiveTintColor: 'white', 
      }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Image
                source={HomeIcon}
                style={{
                  width: size +6,
                  height: size +6,
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
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Image
                source={DiningIcon}
                style={{
                  width: size +6,
                  height: size +6,
                  tintColor: color,
                  resizeMode: 'contain',
                }}
              />
            ),
          }}
        />
        <Tab.Screen 
          name="ARC" 
          component={ARCStackScreen} 
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Image
                source={ARCIcon}
                style={{
                  width: size +6,
                  height: size +6,
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
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Image
                source={ProfileIcon}
                style={{
                  width: size +6,
                  height: size +6,
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
