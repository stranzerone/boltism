import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS, SIZES, SHADOWS } from '../constants/theme';
import { useApp } from '../context/AppContext';

const ComplexScreen = () => {
  const { complex } = useApp();

  if (!complex) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading complex details...</Text>
      </View>
    );
  }

  const managementOptions = [
    {
      id: 1,
      title: 'Rules & Regulations',
      icon: 'document-text-outline',
      color: COLORS.primary,
    },
    {
      id: 2,
      title: 'Amenities',
      icon: 'fitness-outline',
      color: COLORS.warning,
    },
    {
      id: 3,
      title: 'Community Events',
      icon: 'calendar-outline',
      color: COLORS.success,
    },
    {
      id: 4,
      title: 'Maintenance Schedule',
      icon: 'construct-outline',
      color: COLORS.error,
    },
    {
      id: 5,
      title: 'Emergency Contacts',
      icon: 'call-outline',
      color: COLORS.info,
    },
    {
      id: 6,
      title: 'Waste Management',
      icon: 'trash-outline',
      color: COLORS.secondary,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerImageContainer}>
        <Image
          source={{ uri: complex.image }}
          style={styles.headerImage}
        />
        <View style={styles.headerOverlay}>
          <Text style={styles.complexName}>{complex.name}</Text>
          <Text style={styles.complexAddress}>{complex.address}</Text>
        </View>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>A-301</Text>
          <Text style={styles.statLabel}>Apartment</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statValue}>2 BHK</Text>
          <Text style={styles.statLabel}>Type</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statValue}>1100 sqft</Text>
          <Text style={styles.statLabel}>Area</Text>
        </View>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Management Options</Text>
      </View>

      <View style={styles.managementGrid}>
        {managementOptions.map((option) => (
          <TouchableOpacity 
            key={option.id} 
            style={styles.managementItem}
            activeOpacity={0.7}
          >
            <View style={[styles.managementIcon, { backgroundColor: `${option.color}15` }]}>
              <Ionicons name={option.icon} size={SIZES.iconMD} color={option.color} />
            </View>
            <Text style={styles.managementTitle}>{option.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
      </View>

      <View style={styles.quickActionsContainer}>
        <TouchableOpacity style={styles.quickActionButton}>
          <Ionicons name="alert-circle-outline" size={SIZES.iconMD} color={COLORS.white} />
          <Text style={styles.quickActionText}>Report Issue</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.quickActionButton, styles.secondaryActionButton]}>
          <Ionicons name="people-outline" size={SIZES.iconMD} color={COLORS.primary} />
          <Text style={styles.secondaryActionText}>Community</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoCard}>
        <View style={styles.infoCardHeader}>
          <Ionicons name="information-circle-outline" size={SIZES.iconMD} color={COLORS.primary} />
          <Text style={styles.infoCardTitle}>Complex Information</Text>
        </View>
        
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Management Office</Text>
          <Text style={styles.infoValue}>Monday - Saturday, 9:00 AM - 6:00 PM</Text>
        </View>
        
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Security</Text>
          <Text style={styles.infoValue}>24/7 Available</Text>
        </View>
        
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Helpdesk</Text>
          <Text style={styles.infoValue}>+1 (555) 123-4567</Text>
        </View>
        
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Email</Text>
          <Text style={styles.infoValueHighlight}>support@greenvalley.com</Text>
        </View>
      </View>

      <View style={styles.documentSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Documents</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity style={styles.documentItem}>
          <View style={styles.documentIcon}>
            <Ionicons name="document-outline" size={SIZES.iconMD} color={COLORS.primary} />
          </View>
          <View style={styles.documentDetails}>
            <Text style={styles.documentTitle}>Complex Rules.pdf</Text>
            <Text style={styles.documentMeta}>PDF • 2.3 MB • Apr 10, 2025</Text>
          </View>
          <Ionicons name="download-outline" size={SIZES.iconMD} color={COLORS.primary} />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.documentItem}>
          <View style={styles.documentIcon}>
            <Ionicons name="document-outline" size={SIZES.iconMD} color={COLORS.primary} />
          </View>
          <View style={styles.documentDetails}>
            <Text style={styles.documentTitle}>Maintenance Schedule.pdf</Text>
            <Text style={styles.documentMeta}>PDF • 1.5 MB • Mar 25, 2025</Text>
          </View>
          <Ionicons name="download-outline" size={SIZES.iconMD} color={COLORS.primary} />
        </TouchableOpacity>
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
  headerImageContainer: {
    position: 'relative',
    height: 200,
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  headerOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: SIZES.padding,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  complexName: {
    ...FONTS.h2,
    color: COLORS.white,
  },
  complexAddress: {
    ...FONTS.body3,
    color: COLORS.white,
    opacity: 0.8,
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    marginHorizontal: SIZES.padding,
    marginTop: SIZES.padding,
    borderRadius: SIZES.radius,
    padding: SIZES.padding,
    ...SHADOWS.small,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    ...FONTS.h3,
    color: COLORS.textDark,
  },
  statLabel: {
    ...FONTS.body4,
    color: COLORS.textMedium,
    marginTop: 2,
  },
  statDivider: {
    width: 1,
    height: '80%',
    backgroundColor: COLORS.borderLight,
    marginHorizontal: SIZES.sm,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
    marginTop: SIZES.padding * 1.5,
    marginBottom: SIZES.sm,
  },
  sectionTitle: {
    ...FONTS.h3,
    color: COLORS.textDark,
  },
  viewAll: {
    ...FONTS.body3,
    color: COLORS.primary,
  },
  managementGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: SIZES.padding / 2,
  },
  managementItem: {
    width: '33.33%',
    padding: SIZES.xs,
    marginBottom: SIZES.sm,
  },
  managementIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SIZES.xs,
    alignSelf: 'center',
  },
  managementTitle: {
    ...FONTS.body3,
    color: COLORS.textDark,
    textAlign: 'center',
  },
  quickActionsContainer: {
    flexDirection: 'row',
    marginHorizontal: SIZES.padding,
    marginVertical: SIZES.sm,
  },
  quickActionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.radius,
    padding: SIZES.sm,
    marginRight: SIZES.xs,
  },
  secondaryActionButton: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.primary,
    marginRight: 0,
    marginLeft: SIZES.xs,
  },
  quickActionText: {
    ...FONTS.button,
    color: COLORS.white,
    marginLeft: SIZES.xs,
  },
  secondaryActionText: {
    ...FONTS.button,
    color: COLORS.primary,
    marginLeft: SIZES.xs,
  },
  infoCard: {
    backgroundColor: COLORS.white,
    marginHorizontal: SIZES.padding,
    marginTop: SIZES.padding,
    borderRadius: SIZES.radius,
    padding: SIZES.padding,
    ...SHADOWS.small,
  },
  infoCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SIZES.md,
  },
  infoCardTitle: {
    ...FONTS.h3,
    color: COLORS.textDark,
    marginLeft: SIZES.sm,
  },
  infoItem: {
    marginBottom: SIZES.md,
  },
  infoLabel: {
    ...FONTS.body3,
    color: COLORS.textMedium,
    marginBottom: 2,
  },
  infoValue: {
    ...FONTS.h4,
    color: COLORS.textDark,
  },
  infoValueHighlight: {
    ...FONTS.h4,
    color: COLORS.primary,
  },
  documentSection: {
    marginBottom: SIZES.padding * 2,
  },
  documentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    marginHorizontal: SIZES.padding,
    marginBottom: SIZES.md,
    borderRadius: SIZES.radius,
    padding: SIZES.padding,
    ...SHADOWS.small,
  },
  documentIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: `${COLORS.primary}15`,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SIZES.md,
  },
  documentDetails: {
    flex: 1,
  },
  documentTitle: {
    ...FONTS.h4,
    color: COLORS.textDark,
  },
  documentMeta: {
    ...FONTS.caption,
    color: COLORS.textLight,
  },
});

export default ComplexScreen;