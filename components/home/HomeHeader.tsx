import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { colors } from '@/constants/theme';
import { Menu, Bell, Search } from 'lucide-react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';

export default function HomeHeader() {
  const navigation = useNavigation();
  
  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <TouchableOpacity style={styles.menuButton} onPress={openDrawer}>
          <Menu size={24} color={colors.textPrimary} />
        </TouchableOpacity>
        
        <View style={styles.locationContainer}>
          <Text style={styles.locationLabel}>My Complex</Text>
          <View style={styles.complexSelector}>
            <Text style={styles.complexName}>Green Meadows</Text>
            <Text style={styles.unitNumber}>I-301</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.rightSection}>
        <TouchableOpacity style={styles.iconButton}>
          <Bell size={24} color={colors.textPrimary} />
          <View style={styles.notificationBadge}>
            <Text style={styles.badgeText}>3</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.iconButton}>
          <Search size={24} color={colors.textPrimary} />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.avatarContainer}>
          <Image 
            source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100' }} 
            style={styles.avatar} 
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundLight,
    marginRight: 12,
  },
  locationContainer: {
    justifyContent: 'center',
  },
  locationLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: colors.textTertiary,
  },
  complexSelector: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  complexName: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 15,
    color: colors.textPrimary,
    marginRight: 8,
  },
  unitNumber: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: colors.primary,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundLight,
    marginLeft: 8,
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: 6,
    right: 6,
    backgroundColor: colors.error,
    borderRadius: 10,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.white,
  },
  badgeText: {
    fontFamily: 'Inter-Bold',
    fontSize: 10,
    color: colors.white,
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    marginLeft: 8,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
});