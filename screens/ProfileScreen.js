import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS, SIZES, SHADOWS } from '../constants/theme';
import { useApp } from '../context/AppContext';

const ProfileScreen = () => {
  const { user } = useApp();

  if (!user) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading profile...</Text>
      </View>
    );
  }

  const profileSections = [
    {
      title: 'Personal Information',
      icon: 'person-outline',
      items: [
        { label: 'Name', value: user.name },
        { label: 'Email', value: user.email },
        { label: 'Phone', value: user.phone },
        { label: 'Apartment', value: user.apartment },
      ],
    },
    {
      title: 'Security',
      icon: 'shield-outline',
      items: [
        { label: 'Change Password', value: '', actionIcon: 'chevron-forward' },
        { label: 'Two-Factor Authentication', value: 'Disabled', toggle: true, enabled: false },
      ],
    },
    {
      title: 'Preferences',
      icon: 'options-outline',
      items: [
        { label: 'Language', value: 'English', actionIcon: 'chevron-forward' },
        { label: 'Notification Preferences', value: '', actionIcon: 'chevron-forward' },
        { label: 'Dark Mode', value: '', toggle: true, enabled: false },
      ],
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileImageContainer}>
          <Image
            source={require('../assets/user-profile.png')}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.editImageButton}>
            <Ionicons name="camera-outline" size={20} color={COLORS.white} />
          </TouchableOpacity>
        </View>
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.userRole}>Resident</Text>
      </View>

      {profileSections.map((section, index) => (
        <View key={index} style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name={section.icon} size={SIZES.iconMD} color={COLORS.primary} />
            <Text style={styles.sectionTitle}>{section.title}</Text>
          </View>

          <View style={styles.sectionContent}>
            {section.items.map((item, itemIndex) => (
              <TouchableOpacity
                key={itemIndex}
                style={[
                  styles.sectionItem,
                  itemIndex === section.items.length - 1 && styles.lastSectionItem,
                ]}
              >
                <View style={styles.sectionItemContent}>
                  <Text style={styles.itemLabel}>{item.label}</Text>
                  {item.value && <Text style={styles.itemValue}>{item.value}</Text>}
                  }
                </View>

                {item.toggle && (
                  <View
                    style={[
                      styles.toggleContainer,
                      item.enabled && styles.toggleContainerActive,
                    ]}
                  >
                    <View
                      style={[
                        styles.toggleCircle,
                        item.enabled && styles.toggleCircleActive,
                      ]}
                    />
                  </View>
                )}

                {item.actionIcon && (
                  <Ionicons
                    name={item.actionIcon}
                    size={SIZES.iconSM}
                    color={COLORS.textLight}
                  />
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}

      <TouchableOpacity style={styles.logoutButton}>
        <Ionicons name="log-out-outline" size={SIZES.iconMD} color={COLORS.white} />
        <Text style={styles.logoutText}>Sign Out</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.versionText}>Version 1.0.0</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    ...FONTS.h4,
    color: COLORS.textMedium,
  },
  header: {
    backgroundColor: COLORS.primary,
    paddingTop: SIZES.padding,
    paddingBottom: SIZES.padding * 2,
    alignItems: 'center',
  },
  profileImageContainer: {
    position: 'relative',
    marginBottom: SIZES.padding,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: COLORS.white,
  },
  editImageButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: COLORS.primary,
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: COLORS.white,
  },
  userName: {
    ...FONTS.h2,
    color: COLORS.white,
  },
  userRole: {
    ...FONTS.body3,
    color: COLORS.white,
    opacity: 0.8,
  },
  section: {
    marginHorizontal: SIZES.padding,
    marginTop: SIZES.padding,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    overflow: 'hidden',
    ...SHADOWS.small,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding / 1.5,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderLight,
  },
  sectionTitle: {
    ...FONTS.h4,
    color: COLORS.textDark,
    marginLeft: SIZES.sm,
  },
  sectionContent: {
    backgroundColor: COLORS.white,
  },
  sectionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderLight,
  },
  lastSectionItem: {
    borderBottomWidth: 0,
  },
  sectionItemContent: {
    flex: 1,
  },
  itemLabel: {
    ...FONTS.body3,
    color: COLORS.textDark,
    marginBottom: 2,
  },
  itemValue: {
    ...FONTS.body4,
    color: COLORS.textMedium,
  },
  toggleContainer: {
    width: 50,
    height: 28,
    borderRadius: 14,
    backgroundColor: COLORS.borderLight,
    padding: 2,
  },
  toggleContainerActive: {
    backgroundColor: COLORS.primary,
  },
  toggleCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: COLORS.white,
    ...SHADOWS.small,
  },
  toggleCircleActive: {
    transform: [{ translateX: 22 }],
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.error,
    marginHorizontal: SIZES.padding,
    marginTop: SIZES.padding * 2,
    marginBottom: SIZES.padding,
    padding: SIZES.padding,
    borderRadius: SIZES.radius,
  },
  logoutText: {
    ...FONTS.button,
    color: COLORS.white,
    marginLeft: SIZES.sm,
  },
  footer: {
    alignItems: 'center',
    marginBottom: SIZES.padding * 2,
  },
  versionText: {
    ...FONTS.caption,
    color: COLORS.textLight,
  },
});

export default ProfileScreen;