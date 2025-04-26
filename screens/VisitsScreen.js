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

const VisitsScreen = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  
  const visits = {
    upcoming: [
      {
        id: 1,
        name: 'Sarah Johnson',
        type: 'Friend',
        date: 'Apr 15, 2025',
        time: '2:00 PM - 6:00 PM',
        status: 'approved',
        vehicle: 'Yes - Toyota Camry (ABC 1234)',
      },
      {
        id: 2,
        name: 'Cleaning Service',
        type: 'Service',
        date: 'Apr 17, 2025',
        time: '9:00 AM - 11:00 AM',
        status: 'pending',
        vehicle: 'No',
      },
    ],
    past: [
      {
        id: 3,
        name: 'Michael Chen',
        type: 'Family',
        date: 'Apr 5, 2025',
        time: '10:00 AM - 8:00 PM',
        status: 'completed',
        vehicle: 'Yes - Honda Civic (XYZ 7890)',
      },
      {
        id: 4,
        name: 'Plumber',
        type: 'Service',
        date: 'Mar 28, 2025',
        time: '3:00 PM - 4:00 PM',
        status: 'completed',
        vehicle: 'No',
      },
    ],
  };
  
  const getStatusColor = (status) => {
    switch (status) {
      case 'approved':
        return COLORS.success;
      case 'pending':
        return COLORS.warning;
      case 'completed':
        return COLORS.textMedium;
      case 'cancelled':
        return COLORS.error;
      default:
        return COLORS.textMedium;
    }
  };
  
  const getStatusText = (status) => {
    switch (status) {
      case 'approved':
        return 'Approved';
      case 'pending':
        return 'Pending Approval';
      case 'completed':
        return 'Completed';
      case 'cancelled':
        return 'Cancelled';
      default:
        return status;
    }
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'upcoming' && styles.activeTab]}
          onPress={() => setActiveTab('upcoming')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'upcoming' && styles.activeTabText,
            ]}
          >
            Upcoming
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.tab, activeTab === 'past' && styles.activeTab]}
          onPress={() => setActiveTab('past')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'past' && styles.activeTabText,
            ]}
          >
            Past
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.tab, activeTab === 'create' && styles.activeTab]}
          onPress={() => setActiveTab('create')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'create' && styles.activeTabText,
            ]}
          >
            Create Pass
          </Text>
        </TouchableOpacity>
      </View>
      
      {(activeTab === 'upcoming' || activeTab === 'past') && (
        <View>
          {visits[activeTab].length === 0 ? (
            <View style={styles.emptyContainer}>
              <Ionicons name="calendar-outline" size={80} color={COLORS.textLight} />
              <Text style={styles.emptyText}>No {activeTab} visits</Text>
              <TouchableOpacity 
                style={styles.createButton}
                onPress={() => setActiveTab('create')}
              >
                <Text style={styles.createButtonText}>Create Pass</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <ScrollView>
              {visits[activeTab].map((visit) => (
                <View key={visit.id} style={styles.visitCard}>
                  <View style={styles.visitHeader}>
                    <View style={styles.typeBadge}>
                      <Text style={styles.typeText}>{visit.type}</Text>
                    </View>
                    
                    <View
                      style={[
                        styles.statusBadge,
                        { backgroundColor: `${getStatusColor(visit.status)}15` },
                      ]}
                    >
                      <View
                        style={[
                          styles.statusDot,
                          { backgroundColor: getStatusColor(visit.status) },
                        ]}
                      />
                      <Text
                        style={[
                          styles.statusText,
                          { color: getStatusColor(visit.status) },
                        ]}
                      >
                        {getStatusText(visit.status)}
                      </Text>
                    </View>
                  </View>
                  
                  <Text style={styles.visitorName}>{visit.name}</Text>
                  
                  <View style={styles.visitDetailContainer}>
                    <View style={styles.visitDetailItem}>
                      <Ionicons name="calendar-outline" size={18} color={COLORS.primary} />
                      <Text style={styles.visitDetailText}>{visit.date}</Text>
                    </View>
                    
                    <View style={styles.visitDetailItem}>
                      <Ionicons name="time-outline" size={18} color={COLORS.primary} />
                      <Text style={styles.visitDetailText}>{visit.time}</Text>
                    </View>
                    
                    <View style={styles.visitDetailItem}>
                      <Ionicons name="car-outline" size={18} color={COLORS.primary} />
                      <Text style={styles.visitDetailText}>{visit.vehicle}</Text>
                    </View>
                  </View>
                  
                  <View style={styles.visitActions}>
                    <TouchableOpacity style={styles.visitActionButton}>
                      <Ionicons name="qr-code-outline" size={18} color={COLORS.primary} />
                      <Text style={styles.visitActionText}>Show QR</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.visitActionButton}>
                      <Ionicons name="share-outline" size={18} color={COLORS.primary} />
                      <Text style={styles.visitActionText}>Share</Text>
                    </TouchableOpacity>
                    
                    {activeTab === 'upcoming' && (
                      <TouchableOpacity style={[styles.visitActionButton, styles.cancelButton]}>
                        <Ionicons name="close-circle-outline" size={18} color={COLORS.error} />
                        <Text style={styles.cancelText}>Cancel</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              ))}
              
              {activeTab === 'upcoming' && (
                <TouchableOpacity 
                  style={styles.floatingActionButton}
                  onPress={() => setActiveTab('create')}
                >
                  <Ionicons name="add" size={24} color={COLORS.white} />
                </TouchableOpacity>
              )}
            </ScrollView>
          )}
        </View>
      )}
      
      {activeTab === 'create' && (
        <ScrollView style={styles.createFormContainer}>
          <Text style={styles.formLabel}>Visitor Information</Text>
          
          <View style={styles.formGroup}>
            <Text style={styles.inputLabel}>Visitor Name</Text>
            <TextInput
              style={styles.formInput}
              placeholder="Enter visitor's name"
              placeholderTextColor={COLORS.textLight}
            />
          </View>
          
          <View style={styles.formGroup}>
            <Text style={styles.inputLabel}>Visitor Type</Text>
            <View style={styles.visitorTypesContainer}>
              {['Family', 'Friend', 'Service', 'Other'].map((type, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.visitorTypeOption,
                    index === 0 && styles.visitorTypeSelected,
                  ]}
                >
                  <Text
                    style={[
                      styles.visitorTypeText,
                      index === 0 && styles.visitorTypeSelectedText,
                    ]}
                  >
                    {type}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          
          <View style={styles.formGroup}>
            <Text style={styles.inputLabel}>Phone Number (Optional)</Text>
            <TextInput
              style={styles.formInput}
              placeholder="Enter phone number"
              placeholderTextColor={COLORS.textLight}
              keyboardType="phone-pad"
            />
          </View>
          
          <Text style={styles.formLabel}>Visit Details</Text>
          
          <View style={styles.formGroup}>
            <Text style={styles.inputLabel}>Date</Text>
            <TouchableOpacity style={styles.formInput}>
              <Text style={styles.placeholderText}>Select date</Text>
              <Ionicons name="calendar-outline" size={20} color={COLORS.textMedium} />
            </TouchableOpacity>
          </View>
          
          <View style={styles.timeRangeContainer}>
            <View style={[styles.formGroup, { flex: 1, marginRight: SIZES.sm }]}>
              <Text style={styles.inputLabel}>From</Text>
              <TouchableOpacity style={styles.formInput}>
                <Text style={styles.placeholderText}>Start time</Text>
                <Ionicons name="time-outline" size={20} color={COLORS.textMedium} />
              </TouchableOpacity>
            </View>
            
            <View style={[styles.formGroup, { flex: 1 }]}>
              <Text style={styles.inputLabel}>To</Text>
              <TouchableOpacity style={styles.formInput}>
                <Text style={styles.placeholderText}>End time</Text>
                <Ionicons name="time-outline" size={20} color={COLORS.textMedium} />
              </TouchableOpacity>
            </View>
          </View>
          
          <View style={styles.formGroup}>
            <View style={styles.checkboxContainer}>
              <TouchableOpacity style={styles.checkbox}>
                <Ionicons name="checkmark" size={16} color={COLORS.white} />
              </TouchableOpacity>
              <Text style={styles.checkboxLabel}>Visitor has a vehicle</Text>
            </View>
          </View>
          
          <View style={styles.formGroup}>
            <Text style={styles.inputLabel}>Vehicle Details</Text>
            <TextInput
              style={styles.formInput}
              placeholder="Enter vehicle make, model, and license plate"
              placeholderTextColor={COLORS.textLight}
            />
          </View>
          
          <View style={styles.formGroup}>
            <Text style={styles.inputLabel}>Additional Notes (Optional)</Text>
            <TextInput
              style={[styles.formInput, styles.textArea]}
              placeholder="Any special instructions or information"
              placeholderTextColor={COLORS.textLight}
              multiline
              numberOfLines={4}
              textAlignVertical="top"
            />
          </View>
          
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Create Visitor Pass</Text>
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
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: SIZES.padding * 2,
  },
  emptyText: {
    ...FONTS.h3,
    color: COLORS.textMedium,
    marginTop: SIZES.md,
    marginBottom: SIZES.padding,
  },
  createButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: SIZES.sm,
    paddingHorizontal: SIZES.padding,
    borderRadius: SIZES.radius,
  },
  createButtonText: {
    ...FONTS.button,
    color: COLORS.white,
  },
  visitCard: {
    backgroundColor: COLORS.white,
    marginHorizontal: SIZES.padding,
    marginBottom: SIZES.md,
    borderRadius: SIZES.radius,
    padding: SIZES.padding,
    ...SHADOWS.small,
  },
  visitHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SIZES.sm,
  },
  typeBadge: {
    backgroundColor: COLORS.backgroundLight,
    paddingVertical: SIZES.xs / 2,
    paddingHorizontal: SIZES.sm,
    borderRadius: SIZES.radius / 2,
  },
  typeText: {
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
  visitorName: {
    ...FONTS.h3,
    color: COLORS.textDark,
    marginBottom: SIZES.sm,
  },
  visitDetailContainer: {
    marginBottom: SIZES.md,
  },
  visitDetailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SIZES.xs,
  },
  visitDetailText: {
    ...FONTS.body3,
    color: COLORS.textMedium,
    marginLeft: SIZES.xs,
  },
  visitActions: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: COLORS.borderLight,
    paddingTop: SIZES.sm,
  },
  visitActionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: SIZES.md,
    paddingVertical: SIZES.xs,
  },
  visitActionText: {
    ...FONTS.body4,
    color: COLORS.primary,
    marginLeft: SIZES.xs / 2,
  },
  cancelButton: {
    marginLeft: 'auto',
    marginRight: 0,
  },
  cancelText: {
    ...FONTS.body4,
    color: COLORS.error,
    marginLeft: SIZES.xs / 2,
  },
  floatingActionButton: {
    position: 'absolute',
    bottom: SIZES.padding * 2,
    right: SIZES.padding,
    backgroundColor: COLORS.primary,
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    ...SHADOWS.large,
  },
  createFormContainer: {
    padding: SIZES.padding,
  },
  formLabel: {
    ...FONTS.h3,
    color: COLORS.textDark,
    marginBottom: SIZES.md,
  },
  formGroup: {
    marginBottom: SIZES.md,
  },
  inputLabel: {
    ...FONTS.body3,
    color: COLORS.textMedium,
    marginBottom: SIZES.xs,
  },
  formInput: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    padding: SIZES.sm,
    ...FONTS.body3,
    color: COLORS.textDark,
    borderWidth: 1,
    borderColor: COLORS.border,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  placeholderText: {
    ...FONTS.body3,
    color: COLORS.textLight,
  },
  visitorTypesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -SIZES.xs / 2,
  },
  visitorTypeOption: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: SIZES.radius / 2,
    paddingVertical: SIZES.xs,
    paddingHorizontal: SIZES.sm,
    margin: SIZES.xs / 2,
  },
  visitorTypeSelected: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  visitorTypeText: {
    ...FONTS.body3,
    color: COLORS.textDark,
  },
  visitorTypeSelectedText: {
    color: COLORS.white,
  },
  timeRangeContainer: {
    flexDirection: 'row',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: SIZES.xs / 2,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SIZES.sm,
  },
  checkboxLabel: {
    ...FONTS.body3,
    color: COLORS.textDark,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.radius,
    padding: SIZES.padding,
    alignItems: 'center',
    marginTop: SIZES.md,
    marginBottom: SIZES.padding * 2,
    ...SHADOWS.medium,
  },
  submitButtonText: {
    ...FONTS.button,
    color: COLORS.white,
  },
});

export default VisitsScreen;