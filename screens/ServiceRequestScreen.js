import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS, SIZES, SHADOWS } from '../constants/theme';

const ServiceRequestScreen = () => {
  const [activeTab, setActiveTab] = useState('requests');
  
  const requests = [
    {
      id: 1,
      title: 'Leaking Kitchen Faucet',
      description: 'The kitchen faucet is leaking constantly and creating water damage.',
      category: 'Plumbing',
      priority: 'High',
      status: 'in-progress',
      statusText: 'In Progress',
      date: 'Apr 12, 2025',
      assignee: 'John Doe',
      updates: [
        { date: 'Apr 12, 2025', text: 'Request received and assigned' },
        { date: 'Apr 13, 2025', text: 'Technician scheduled for Apr 14' },
      ],
    },
    {
      id: 2,
      title: 'AC Not Cooling',
      description: 'The air conditioner is running but not cooling the room.',
      category: 'HVAC',
      priority: 'Medium',
      status: 'scheduled',
      statusText: 'Scheduled',
      date: 'Apr 10, 2025',
      assignee: 'David Smith',
      updates: [
        { date: 'Apr 10, 2025', text: 'Request received' },
        { date: 'Apr 11, 2025', text: 'Assigned to HVAC team' },
        { date: 'Apr 12, 2025', text: 'Scheduled for Apr 15, 10 AM - 12 PM' },
      ],
    },
    {
      id: 3,
      title: 'Light Fixture Replacement',
      description: 'Living room light fixture not working, needs replacement.',
      category: 'Electrical',
      priority: 'Low',
      status: 'completed',
      statusText: 'Completed',
      date: 'Mar 28, 2025',
      assignee: 'Sarah Johnson',
      updates: [
        { date: 'Mar 28, 2025', text: 'Request received' },
        { date: 'Mar 29, 2025', text: 'Assigned to electrical team' },
        { date: 'Mar 30, 2025', text: 'Fixed and completed' },
      ],
    },
  ];
  
  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return COLORS.warning;
      case 'in-progress':
        return COLORS.info;
      case 'scheduled':
        return COLORS.primary;
      case 'completed':
        return COLORS.success;
      case 'cancelled':
        return COLORS.error;
      default:
        return COLORS.textMedium;
    }
  };
  
  const categories = [
    { id: 1, name: 'Plumbing', icon: 'water-outline' },
    { id: 2, name: 'Electrical', icon: 'flash-outline' },
    { id: 3, name: 'HVAC', icon: 'thermometer-outline' },
    { id: 4, name: 'Carpentry', icon: 'hammer-outline' },
    { id: 5, name: 'Appliances', icon: 'home-outline' },
    { id: 6, name: 'Other', icon: 'ellipsis-horizontal-outline' },
  ];
  
  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'requests' && styles.activeTab]}
          onPress={() => setActiveTab('requests')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'requests' && styles.activeTabText,
            ]}
          >
            My Requests
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.tab, activeTab === 'new' && styles.activeTab]}
          onPress={() => setActiveTab('new')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'new' && styles.activeTabText,
            ]}
          >
            New Request
          </Text>
        </TouchableOpacity>
      </View>
      
      {activeTab === 'requests' ? (
        <ScrollView>
          <View style={styles.filterContainer}>
            <View style={styles.searchContainer}>
              <Ionicons name="search-outline" size={20} color={COLORS.textMedium} />
              <TextInput
                style={styles.searchInput}
                placeholder="Search requests..."
                placeholderTextColor={COLORS.textLight}
              />
            </View>
            
            <TouchableOpacity style={styles.filterButton}>
              <Ionicons name="filter-outline" size={20} color={COLORS.textDark} />
            </TouchableOpacity>
          </View>
          
          {requests.map((request) => (
            <TouchableOpacity key={request.id} style={styles.requestCard}>
              <View style={styles.requestHeader}>
                <View style={styles.categoryBadge}>
                  <Text style={styles.categoryText}>{request.category}</Text>
                </View>
                
                <View
                  style={[
                    styles.statusBadge,
                    { backgroundColor: `${getStatusColor(request.status)}15` },
                  ]}
                >
                  <View
                    style={[
                      styles.statusDot,
                      { backgroundColor: getStatusColor(request.status) },
                    ]}
                  />
                  <Text
                    style={[
                      styles.statusText,
                      { color: getStatusColor(request.status) },
                    ]}
                  >
                    {request.statusText}
                  </Text>
                </View>
              </View>
              
              <Text style={styles.requestTitle}>{request.title}</Text>
              <Text style={styles.requestDescription}>{request.description}</Text>
              
              <View style={styles.requestMeta}>
                <View style={styles.requestMetaItem}>
                  <Ionicons name="calendar-outline" size={16} color={COLORS.textMedium} />
                  <Text style={styles.requestMetaText}>{request.date}</Text>
                </View>
                
                <View style={styles.requestMetaItem}>
                  <Ionicons name="flag-outline" size={16} color={COLORS.textMedium} />
                  <Text style={styles.requestMetaText}>{request.priority}</Text>
                </View>
              </View>
              
              {request.updates && request.updates.length > 0 && (
                <View style={styles.updateContainer}>
                  <Text style={styles.updateTitle}>Latest Update</Text>
                  <View style={styles.updateItem}>
                    <Text style={styles.updateDate}>{request.updates[request.updates.length - 1].date}</Text>
                    <Text style={styles.updateText}>{request.updates[request.updates.length - 1].text}</Text>
                  </View>
                </View>
              )}
              
              <View style={styles.requestActions}>
                <TouchableOpacity style={styles.requestAction}>
                  <Ionicons name="chatbubble-outline" size={16} color={COLORS.primary} />
                  <Text style={styles.requestActionText}>Comment</Text>
                </TouchableOpacity>
                
                {request.status !== 'completed' && request.status !== 'cancelled' && (
                  <TouchableOpacity style={styles.requestAction}>
                    <Ionicons name="close-circle-outline" size={16} color={COLORS.error} />
                    <Text style={[styles.requestActionText, { color: COLORS.error }]}>Cancel</Text>
                  </TouchableOpacity>
                )}
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      ) : (
        <ScrollView style={styles.newRequestContainer}>
          <Text style={styles.formLabel}>Request Type</Text>
          
          <View style={styles.categoriesGrid}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={styles.categoryItem}
                activeOpacity={0.7}
              >
                <View style={styles.categoryIcon}>
                  <Ionicons name={category.icon} size={SIZES.iconMD} color={COLORS.primary} />
                </View>
                <Text style={styles.categoryItemText}>{category.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
          
          <Text style={styles.formLabel}>Title</Text>
          <TextInput
            style={styles.formInput}
            placeholder="Brief description of issue"
            placeholderTextColor={COLORS.textLight}
          />
          
          <Text style={styles.formLabel}>Description</Text>
          <TextInput
            style={[styles.formInput, styles.textArea]}
            placeholder="Provide details about the issue..."
            placeholderTextColor={COLORS.textLight}
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />
          
          <Text style={styles.formLabel}>Location</Text>
          <View style={styles.formInput}>
            <Text style={styles.locationText}>Apartment A-301</Text>
            <Ionicons name="chevron-down" size={16} color={COLORS.textMedium} />
          </View>
          
          <Text style={styles.formLabel}>Priority</Text>
          <View style={styles.priorityContainer}>
            {['Low', 'Medium', 'High'].map((priority, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.priorityOption,
                  index === 1 && styles.prioritySelected,
                ]}
              >
                <Text
                  style={[
                    styles.priorityText,
                    index === 1 && styles.prioritySelectedText,
                  ]}
                >
                  {priority}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          
          <Text style={styles.formLabel}>Preferred Date (Optional)</Text>
          <TouchableOpacity style={styles.formInput}>
            <Text style={styles.dateText}>Select a date</Text>
            <Ionicons name="calendar-outline" size={20} color={COLORS.textMedium} />
          </TouchableOpacity>
          
          <Text style={styles.formLabel}>Attach Photos (Optional)</Text>
          <TouchableOpacity style={styles.attachButton}>
            <Ionicons name="camera-outline" size={20} color={COLORS.primary} />
            <Text style={styles.attachButtonText}>Add Photos</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Submit Request</Text>
          </TouchableOpacity>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    marginHorizontal: SIZES.padding,
    marginTop: SIZES.padding,
    marginBottom: SIZES.md,
    borderRadius: SIZES.radius,
    padding: SIZES.xs,
    ...SHADOWS.small,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SIZES.sm,
    borderRadius: SIZES.radius - SIZES.xs,
  },
  activeTab: {
    backgroundColor: COLORS.primaryLight,
  },
  tabText: {
    ...FONTS.body3,
    color: COLORS.textMedium,
  },
  activeTabText: {
    color: COLORS.primary,
    fontWeight: '600',
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: SIZES.padding,
    marginBottom: SIZES.md,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    paddingHorizontal: SIZES.sm,
    paddingVertical: SIZES.xs,
    marginRight: SIZES.sm,
    ...SHADOWS.small,
  },
  searchInput: {
    flex: 1,
    ...FONTS.body3,
    color: COLORS.textDark,
    marginLeft: SIZES.xs,
    paddingVertical: SIZES.xs,
  },
  filterButton: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    padding: SIZES.sm,
    ...SHADOWS.small,
  },
  requestCard: {
    backgroundColor: COLORS.white,
    marginHorizontal: SIZES.padding,
    marginBottom: SIZES.md,
    borderRadius: SIZES.radius,
    padding: SIZES.padding,
    ...SHADOWS.small,
  },
  requestHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SIZES.sm,
  },
  categoryBadge: {
    backgroundColor: COLORS.backgroundLight,
    paddingVertical: SIZES.xs / 2,
    paddingHorizontal: SIZES.sm,
    borderRadius: SIZES.radius / 2,
  },
  categoryText: {
    ...FONTS.caption,
    color: COLORS.textMedium,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SIZES.xs / 2,
    paddingHorizontal: SIZES.sm,
    borderRadius: SIZES.radius / 2,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: SIZES.xs / 2,
  },
  statusText: {
    ...FONTS.caption,
    fontWeight: '600',
  },
  requestTitle: {
    ...FONTS.h4,
    color: COLORS.textDark,
    marginBottom: SIZES.xs,
  },
  requestDescription: {
    ...FONTS.body3,
    color: COLORS.textMedium,
    marginBottom: SIZES.sm,
  },
  requestMeta: {
    flexDirection: 'row',
    marginBottom: SIZES.sm,
  },
  requestMetaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: SIZES.md,
  },
  requestMetaText: {
    ...FONTS.caption,
    color: COLORS.textMedium,
    marginLeft: SIZES.xs / 2,
  },
  updateContainer: {
    backgroundColor: COLORS.backgroundLight,
    padding: SIZES.sm,
    borderRadius: SIZES.radius / 2,
    marginBottom: SIZES.sm,
  },
  updateTitle: {
    ...FONTS.caption,
    color: COLORS.textMedium,
    fontWeight: '600',
    marginBottom: SIZES.xs / 2,
  },
  updateItem: {
    marginTop: SIZES.xs / 2,
  },
  updateDate: {
    ...FONTS.caption,
    color: COLORS.textLight,
  },
  updateText: {
    ...FONTS.body4,
    color: COLORS.textDark,
  },
  requestActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SIZES.xs,
    paddingTop: SIZES.sm,
    borderTopWidth: 1,
    borderTopColor: COLORS.borderLight,
  },
  requestAction: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SIZES.xs,
    paddingHorizontal: SIZES.sm,
  },
  requestActionText: {
    ...FONTS.body4,
    color: COLORS.primary,
    marginLeft: SIZES.xs / 2,
  },
  newRequestContainer: {
    padding: SIZES.padding,
  },
  formLabel: {
    ...FONTS.body3,
    fontWeight: '600',
    color: COLORS.textDark,
    marginBottom: SIZES.xs,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -SIZES.xs,
    marginBottom: SIZES.md,
  },
  categoryItem: {
    width: '33.33%',
    padding: SIZES.xs,
    alignItems: 'center',
    marginBottom: SIZES.sm,
  },
  categoryIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: `${COLORS.primary}15`,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SIZES.xs,
  },
  categoryItemText: {
    ...FONTS.body4,
    color: COLORS.textDark,
    textAlign: 'center',
  },
  formInput: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    padding: SIZES.sm,
    ...FONTS.body3,
    color: COLORS.textDark,
    marginBottom: SIZES.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },
  locationText: {
    ...FONTS.body3,
    color: COLORS.textDark,
  },
  priorityContainer: {
    flexDirection: 'row',
    marginBottom: SIZES.md,
  },
  priorityOption: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingVertical: SIZES.sm,
    alignItems: 'center',
    marginHorizontal: 2,
  },
  prioritySelected: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  priorityText: {
    ...FONTS.body3,
    color: COLORS.textDark,
  },
  prioritySelectedText: {
    color: COLORS.white,
    fontWeight: '600',
  },
  dateText: {
    ...FONTS.body3,
    color: COLORS.textLight,
  },
  attachButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: COLORS.primary,
    borderRadius: SIZES.radius,
    padding: SIZES.padding,
    marginBottom: SIZES.md,
  },
  attachButtonText: {
    ...FONTS.body3,
    color: COLORS.primary,
    marginLeft: SIZES.xs,
  },
  submitButton: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.radius,
    padding: SIZES.padding,
    alignItems: 'center',
    marginBottom: SIZES.padding * 2,
    ...SHADOWS.medium,
  },
  submitButtonText: {
    ...FONTS.button,
    color: COLORS.white,
  },
});

export default ServiceRequestScreen;