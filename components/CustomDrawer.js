import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS, SIZES } from '../constants/theme';

const CustomDrawer = props => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.drawerContent}>
        <View style={styles.header}>
          <Image
            source={require('../assets/logo.png')}
            style={styles.logo}
          />
          <Text style={styles.logoText}>FacTech QA</Text>
        </View>
        
        <View style={styles.userInfo}>
          <Image
            source={require('../assets/user-profile.png')}
            style={styles.userImage}
          />
          <View style={styles.userTextContainer}>
            <Text style={styles.userName}>John Smith</Text>
            <Text style={styles.userEmail}>johnsmith@example.com</Text>
          </View>
        </View>
        
        <View style={styles.separator} />
        
        <View style={styles.drawerItemsContainer}>
          <DrawerItemList {...props} />
        </View>
        
        <View style={styles.separator} />
        
        <View style={styles.drawerBottom}>
          <TouchableOpacity style={styles.bottomDrawerItem}>
            <Ionicons name="settings-outline" size={SIZES.iconMD} color={COLORS.textMedium} />
            <Text style={styles.bottomDrawerItemText}>Settings</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.bottomDrawerItem}>
            <Ionicons name="help-circle-outline" size={SIZES.iconMD} color={COLORS.textMedium} />
            <Text style={styles.bottomDrawerItemText}>Help & Support</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.signOutButton}>
            <Ionicons name="log-out-outline" size={SIZES.iconMD} color={COLORS.textWhite} />
            <Text style={styles.signOutText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerContent: {
    backgroundColor: COLORS.white,
    paddingTop: 0,
  },
  header: {
    backgroundColor: COLORS.primary,
    padding: SIZES.padding,
    paddingBottom: SIZES.padding * 1.5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: SIZES.margin / 2,
  },
  logoText: {
    ...FONTS.h2,
    color: COLORS.white,
    fontWeight: '700',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SIZES.padding,
    backgroundColor: COLORS.backgroundLight,
  },
  userImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: SIZES.margin,
  },
  userTextContainer: {
    flex: 1,
  },
  userName: {
    ...FONTS.h4,
    color: COLORS.textDark,
  },
  userEmail: {
    ...FONTS.body4,
    color: COLORS.textMedium,
  },
  separator: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: SIZES.xs,
  },
  drawerItemsContainer: {
    flex: 1,
    paddingTop: SIZES.xs,
  },
  drawerBottom: {
    padding: SIZES.padding,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  bottomDrawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SIZES.sm,
  },
  bottomDrawerItemText: {
    ...FONTS.body3,
    color: COLORS.textMedium,
    marginLeft: SIZES.margin,
  },
  signOutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.buttonRadius,
    padding: SIZES.sm,
    marginTop: SIZES.margin,
  },
  signOutText: {
    ...FONTS.button,
    color: COLORS.white,
    marginLeft: SIZES.sm,
  },
});

export default CustomDrawer;