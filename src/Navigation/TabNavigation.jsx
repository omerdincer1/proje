import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/Dashboard/Home/HomeScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CalendarScreen from '../Screens/Dashboard/Calendar/CalendarScreen';
import ProfileScreen from '../Screens/Dashboard/Profile/ProfileScreen';

const Tab = createBottomTabNavigator();

export function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{headerShown: true }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Ana Sayfa',
          headerTitle:"Ana Sayfa",
          tabBarIcon: ({focused, size}) => (
            <Icon
              name="home"
              color={focused ? '#06BF77' : 'grey'}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          headerTitle:"Takvim",
          tabBarLabel: 'Takvim',
          tabBarIcon: ({focused, size}) => (
            <Icon
              name="calendar-month"
              color={focused ? '#06BF77' : 'grey'}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerTitle:"Profil",
          tabBarLabel: 'Profil',
          tabBarIcon: ({size, focused}) => (
            <Icon
              name="person"
              color={focused ? '#06BF77' : 'grey'}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
