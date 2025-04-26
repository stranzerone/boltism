import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

import CustomDrawerContent from '../components/CustomDrawerContent';
import BottomTabBar from '../components/BottomTabBar';

// Screens
import DashboardScreen from '../screens/DashboardScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ReferScreen from '../screens/ReferScreen';
import ComplexScreen from '../screens/ComplexScreen';
import AccountsScreen from '../screens/AccountsScreen';
import EnergyScreen from '../screens/EnergyScreen';
import ServiceRequestScreen from '../screens/ServiceRequestScreen';
import VisitsScreen from '../screens/VisitsScreen';
import StaffsScreen from '../screens/StaffsScreen';
import NoticesScreen from '../screens/NoticesScreen';

// Tab Screens
import MyHoodScreen from '../screens/tabs/MyHoodScreen';
import ForumScreen from '../screens/tabs/ForumScreen';
import ServicesScreen from '../screens/tabs/ServicesScreen';
import HomesScreen from '../screens/tabs/HomesScreen';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <BottomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#1E88E5',
        tabBarInactiveTintColor: '#757575',
      }}
    >
<Tab.Screen 
  name="MyHood" 
  component={MyHoodScreen} 
  options={{
    tabBarLabel: 'My Hood',
    tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={24} color={color} />,
  }}
/>


      <Tab.Screen 
        name="Forum" 
        component={ForumScreen}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="forum-outline" size={24} color={color} />,
        }}
      />
      <Tab.Screen 
        name="Services" 
        component={ServicesScreen}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="tools" size={24} color={color} />,
        }}
      />
      <Tab.Screen 
        name="Homes" 
        component={HomesScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="business-outline" size={24} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1E88E5',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        drawerActiveTintColor: '#1E88E5',
        drawerInactiveTintColor: '#424242',
      }}
    >
      <Drawer.Screen 
        name="Dashboard" 
        component={TabNavigator}
        options={{
          drawerIcon: ({ color }) => <Ionicons name="grid-outline" size={22} color={color} />,
        }}
      />
      <Drawer.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{
          drawerIcon: ({ color }) => <Ionicons name="person-outline" size={22} color={color} />,
        }}
      />
      <Drawer.Screen 
        name="Refer For Rewards" 
        component={ReferScreen}
        options={{
          drawerIcon: ({ color }) => <FontAwesome5 name="gift" size={18} color={color} />,
        }}
      />
      <Drawer.Screen 
        name="Complex" 
        component={ComplexScreen}
        options={{
          drawerIcon: ({ color }) => <Ionicons name="business-outline" size={22} color={color} />,
        }}
      />
      <Drawer.Screen 
        name="Accounts" 
        component={AccountsScreen}
        options={{
          drawerIcon: ({ color }) => <Ionicons name="card-outline" size={22} color={color} />,
        }}
      />
      <Drawer.Screen 
        name="Energy consumptions" 
        component={EnergyScreen}
        options={{
          drawerIcon: ({ color }) => <Ionicons name="flash-outline" size={22} color={color} />,
        }}
      />
      <Drawer.Screen 
        name="Service request" 
        component={ServiceRequestScreen}
        options={{
          drawerIcon: ({ color }) => <Ionicons name="construct-outline" size={22} color={color} />,
        }}
      />
      <Drawer.Screen 
        name="Visits" 
        component={VisitsScreen}
        options={{
          drawerIcon: ({ color }) => <Ionicons name="enter-outline" size={22} color={color} />,
        }}
      />
      <Drawer.Screen 
        name="Staffs" 
        component={StaffsScreen}
        options={{
          drawerIcon: ({ color }) => <Ionicons name="people-outline" size={22} color={color} />,
        }}
      />
      <Drawer.Screen 
        name="Notices" 
        component={NoticesScreen}
        options={{
          drawerIcon: ({ color }) => <Ionicons name="notifications-outline" size={22} color={color} />,
        }}
      />
    </Drawer.Navigator>
  );
};

export default MainNavigator;
