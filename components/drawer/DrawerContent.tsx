import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { colors } from '@/constants/theme';
import { Chrome as Home, User, Gift, Briefcase, CreditCard, Gauge, CircleAlert as AlertCircle, Users, CalendarClock, Bell, ChevronRight } from 'lucide-react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';

export function DrawerContent(props) {
  const navigation = useNavigation();

  const drawerItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: <Home color={colors.primary} size={22} />,
      description: '',
      onPress: () => navigation.dispatch(DrawerActions.closeDrawer()),
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: <User color={colors.primary} size={22} />,
      description: '',
      onPress: () => {},
    },
    {
      id: 'refer',
      label: 'Refer For Rewards',
      icon: <Gift color={colors.primary} size={22} />,
      description: 'Refer Code to get Rewards',
      onPress: () => {},
    },
    {
      id: 'complex',
      label: 'Complex',
      icon: <Briefcase color={colors.primary} size={22} />,
      description: 'Rules and management team',
      onPress: () => {},
    },
    {
      id: 'accounts',
      label: 'Accounts',
      icon: <CreditCard color={colors.primary} size={22} />,
      description: 'Bill, payment & recharge',
      onPress: () => {},
    },
    {
      id: 'energy',
      label: 'Energy consumptions',
      icon: <Gauge color={colors.primary} size={22} />,
      description: 'Meter status, reading consumption',
      onPress: () => {},
    },
    {
      id: 'service',
      label: 'Service request',
      icon: <AlertCircle color={colors.primary} size={22} />,
      description: 'Track Complaints',
      onPress: () => {},
    },
    {
      id: 'visits',
      label: 'Visits',
      icon: <CalendarClock color={colors.primary} size={22} />,
      description: 'Create pass, track visitors',
      onPress: () => {},
    },
    {
      id: 'staffs',
      label: 'Staffs',
      icon: <Users color={colors.primary} size={22} />,
      description: 'Manage domestic Staff, attendance',
      onPress: () => {},
    },
    {
      id: 'notices',
      label: 'Notices',
      icon: <Bell color={colors.primary} size={22} />,
      description: 'Announcements from your society',
      onPress: () => {},
    },
  ];

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image 
            source={{ uri: 'https://images.pexels.com/photos/2219972/pexels-photo-2219972.jpeg?auto=compress&cs=tinysrgb&w=600' }} 
            style={styles.backgroundImage} 
          />
          <View style={styles.overlay} />
          <View style={styles.logoContent}>
            <View style={styles.logo}>
              <Text style={styles.logoIcon}>C</Text>
            </View>
            <Text style={styles.appName}>ComplexEase</Text>
          </View>
        </View>
      </View>

      <ScrollView style={styles.drawerItems}>
        {drawerItems.map((item) => (
          <TouchableOpacity 
            key={item.id} 
            style={styles.drawerItem}
            onPress={item.onPress}
          >
            <View style={styles.drawerItemLeft}>
              <View style={styles.iconContainer}>{item.icon}</View>
              <View style={styles.labelContainer}>
                <Text style={styles.itemLabel}>{item.label}</Text>
                {item.description ? (
                  <Text style={styles.itemDescription}>{item.description}</Text>
                ) : null}
              </View>
            </View>
            <ChevronRight size={18} color={colors.textTertiary} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
        <Text style={styles.versionText}>Version 1.0.0</Text>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginBottom: 16,
  },
  logoContainer: {
    height: 150,
    position: 'relative',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 102, 204, 0.9)',
  },
  logoContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  logoIcon: {
    fontFamily: 'Poppins-Bold',
    fontSize: 26,
    color: colors.primary,
  },
  appName: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: colors.white,
  },
  drawerItems: {
    flex: 1,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  drawerItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    marginRight: 12,
    width: 30,
  },
  labelContainer: {
    flex: 1,
  },
  itemLabel: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 15,
    color: colors.textPrimary,
  },
  itemDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: colors.textTertiary,
    marginTop: 2,
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    alignItems: 'center',
  },
  logoutButton: {
    paddingVertical: 10,
    paddingHorizontal: 24,
    backgroundColor: colors.errorLight,
    borderRadius: 20,
    marginBottom: 16,
  },
  logoutText: {
    fontFamily: 'Inter-Medium',
    fontSize: 15,
    color: colors.error,
  },
  versionText: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: colors.textTertiary,
  },
});