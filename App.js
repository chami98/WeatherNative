import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import Weather from './utilities/components/Weather';
import About from './utilities/components/About';
import Contact from './utilities/components/Contact';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Weather') {
              iconName = focused ? 'cloud-outline' : 'cloud-outline';
            } else if (route.name === 'About') {
              iconName = focused ? 'grid-outline' : 'grid-outline';
            } else if (route.name === 'Contact') {
              iconName = focused ? 'megaphone-outline' : 'megaphone-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}


        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Weather" component={Weather} options={{ headerShown: false }} />
        <Tab.Screen name="About" component={About} options={{ headerShown: false }} />
        <Tab.Screen name="Contact" component={Contact} options={{ headerShown: false }} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
