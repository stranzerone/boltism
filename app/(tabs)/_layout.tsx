import { Tabs } from 'expo-router';
import { StyleSheet, View, Text } from 'react-native';
import { colors } from '@/constants/theme';
import { Chrome as Home, MessageCircle, Wrench, Building2, CirclePlus as PlusCircle } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textTertiary,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "My Complex",
          tabBarIcon: ({ color, size }) => (
            <Home color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="forum"
        options={{
          title: "Forum",
          tabBarIcon: ({ color, size }) => (
            <MessageCircle color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="services"
        options={{
          title: "Services",
          tabBarIcon: ({ color, size }) => (
            <Wrench color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="homes"
        options={{
          title: "Homes",
          tabBarIcon: ({ color, size }) => (
            <Building2 color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="actions"
        options={{
          title: "Actions",
          tabBarIcon: ({ color, size }) => (
            <View style={styles.actionButton}>
              <PlusCircle color={colors.white} size={size} />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={[
              styles.tabBarLabel, 
              { color: focused ? colors.primary : colors.textTertiary }
            ]}>
              Action
            </Text>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 60,
    paddingBottom: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    backgroundColor: colors.white,
  },
  tabBarLabel: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
  },
  actionButton: {
    backgroundColor: colors.primary,
    borderRadius: 50,
    padding: 8,
  },
});