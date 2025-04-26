import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS, SIZES, SHADOWS } from '../constants/theme';

const StaffScreen = () => {
  const [activeTab, setActiveTab] = useState('active');
  
  const staff = {
    active: [
      {
        id: 1,
        name: 'Maria Santos',
        role: 'Housekeeper',
        phone: '+1 (555) 123-4567',
        schedule: 'Mon, Wed, Fri • 9:00 AM - 1:00 PM',
        image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
        status: 'active',
        nextVisit: 'Tomorrow at 9:00 AM',
      },
      {
        id: 2,
        name: 'David Johnson',
        role: 'Gardener',
        phone: '+1 (555) 987-6543',
        schedule: 'Tue, Thu • 10:00 AM - 12:00 PM',
        image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
        status: 'active',
        nextVisit: 'Tuesday at 10:00 AM',
      },
    ],
    inactive: [
      {
        id: 3,
        name: 'Susan Miller',
        role: 'Babysitter',
        phone: '+1 (555) 789-0123',
        schedule: 'As needed',
        image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
        status: 'inactive',
        lastActive: 'Last active: Mar 15, 2025',
      },
    ],
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'active' && styles.activeTab]}
          onPress={() => setActiveTab('active')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'active' && styles.activeTabText,
            ]}
          >
            Active Staff
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.tab, activeTab === 'inactive' && styles.activeTab]}
          onPress={() => setActiveTab('inactive')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'inactive' && styles.activeTabText,
            ]}
          >
            Inactive
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.tab, activeTab === 'add' && styles.activeTab]}
          onPress={() => setActiveTab('add')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'add' && styles.activeTabText,
            ]}
          >
            Add New
          </Text>
        </TouchableOpacity>
      </View>
      
      {(activeTab === 'active' || activeTab === 'inactive') && (
        <View>
          {staff[activeTab].length === 0 ? (
            <View style={styles.emptyContainer}>
              <Ionicons name="people-outline" size={80} color={COLORS.textLight} />
              <Text style={styles.emptyText}>No {activeTab} staff</Text>
              <TouchableOpacity 
                style={styles.addButton}
                onPress={() => setActiveTab('add')}
              >
                <Text style={styles.addButtonText}>Add Staff</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <ScrollView>
              <View style={styles.searchContainer}>
                <Ionicons name="search-outline" size={20} color={COLORS.textMedium} />
                <TextInput
                  style={styles.searchInput}
                  placeholder="Search staff..."
                  placeholderTextColor={COLORS.textLight}
                />
              </View>
              
              {staff[activeTab].map((person) => (
                <TouchableOpacity key={person.id} style={styles.staffCard}>
                  <Image
                    source={{ uri: person.image }}
                    style={styles.staffImage}
                  />
                  
                  <View style={styles.staffDetails}>
                    <View style={styles.staffHeader}>
                      <Text style={styles.staffName}>{person.name}</Text>
                      <View
                        style={[
                          styles.statusBadge,
                          { 
                            backgroundColor: person.status === 'active' 
                              ? `${COLORS.success}15`
                              : `${COLORS.textLight}15`
                          },
                        ]}
                      >
                        <View
                          style={[
                            styles.statusDot,
                            { 
                              backgroundColor: person.status === 'active' 
                                ? COLORS.success
                                : COLORS.textLight
                            },
                          ]}
                        />
                        <Text
                          style={[
                            styles.statusText,
                            { 
                              color: person.status === 'active' 
                                ? COLORS.success
                                : COLORS.textLight
                            },
                          ]}
                        >
                          {person.status === 'active' ? 'Active' : 'Inactive'}
                        </Text>
                      </View>
                    </View>
                    
                    <Text style={styles.staffRole}>{person.role}</Text>
                    
                    <View style={styles.staffDetailItem}>
                      <Ionicons name="call-outline" size={16} color={COLORS.textMedium} />
                      <Text style={styles.staffDetailText}>{person.phone}</Text>
                    </View>
                    
                    <View style={styles.staffDetailItem}>
                      <Ionicons name="calendar-outline" size={16} color={COLORS.textMedium} />
                      <Text style={styles.staffDetailText}>{person.schedule}</Text>
                    </View>
                    
                    {person.status === 'active' && person.nextVisit && (
                      <View style={styles.nextVisitContainer}>
                        <Text style={styles.nextVisitText}>{person.nextVisit}</Text>
                      </View>
                    )}
                    
                    {person.status === 'inactive' && person.lastActive && (
                      <Text style={styles.lastActiveText}>{person.lastActive}</Text>
                    )}
                  </View>
                  
                  <TouchableOpacity style={styles.moreButton}>
                    <Ionicons name="ellipsis-vertical" size={20} color={COLORS.textMedium} />
                  </TouchableOpacity>
                </TouchableOpacity>
              ))}
            </ScrollView>
          )}
          
          <TouchableOpacity 
            style={styles.floatingActionButton}
            onPress={() => setActiveTab('add')}
          >
            <Ionicons name="add" size={24} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      )}
      
      {activeTab === 'add' && (
        <ScrollView style={styles.formContainer}>
          <Text style={styles.formLabel}>Staff Information</Text>
          
          <View style={styles.formGroup}>
            <Text style={styles.inputLabel}>Name</Text>
            <TextInput
              style={styles.formInput}
              placeholder="Enter full name"
              placeholderTextColor={COLORS.textLight}
            />
          </View>
          
          <View style={styles.formGroup}>
            <Text style={styles.inputLabel}>Role</Text>
            <View style={styles.roleContainer}>
              {[
                'Housekeeper', 
                'Gardener', 
                'Driver', 
                'Babysitter', 
                'Cook', 
                'Other'
              ].map((role, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.roleOption,
                    index === 0 && styles.roleSelected,
                  ]}
                >
                  <Text
                    style={[
                      styles.roleText,
                      index === 0 && styles.roleSelectedText,
                    ]}
                  >
                    {role}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          
          <View style={styles.formGroup}>
            <Text style={styles.inputLabel}>Phone Number</Text>
            <TextInput
              style={styles.formInput}
              placeholder="Enter phone number"
              placeholderTextColor={COLORS.textLight}
              keyboardType="phone-pad"
            />
          </View>
          
          <View style={styles.formGroup}>
            <Text style={styles.inputLabel}>ID Proof</Text>
            <View style={styles.idContainer}>
              <Text style={styles.idLabel}>ID Type:</Text>
              <View style={styles.idTypeContainer}>
                {['Passport', 'Driver License', 'ID Card'].map((id, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.idTypeOption,
                      index === 2 && styles.idTypeSelected,
                    ]}
                  >
                    <Text
                      style={[
                        styles.idTypeText,
                        index === 2 && styles.idTypeSelectedText,
                      ]}
                    >
                      {id}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
          
          <View style={styles.formGroup}>
            <Text style={styles.inputLabel}>ID Number</Text>
            <TextInput
              style={styles.formInput}
              placeholder="Enter ID number"
              placeholderTextColor={COLORS.textLight}
            />
          </View>
          
          <View style={styles.formGroup}>
            <Text style={styles.inputLabel}>Upload ID (Optional)</Text>
            <TouchableOpacity style={styles.uploadButton}>
              <Ionicons name="cloud-upload-outline" size={24} color={COLORS.primary} />
              <Text style={styles.uploadButtonText}>Upload Document</Text>
            </TouchableOpacity>
          </View>
          
          <Text style={styles.formLabel}>Schedule</Text>
          
          <View style={styles.formGroup}>
            <Text style={styles.inputLabel}>Working Days</Text>
            <View style={styles.daysContainer}>
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.dayOption,
                    [1, 3, 5].includes(index) && styles.daySelected,
                  ]}
                >
                  <Text
                    style={[
                      styles.dayText,
                      [1, 3, 5].includes(index) && styles.daySelectedText,
                    ]}
                  >
                    {day}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          
          <View style={styles.timeRangeContainer}>
            <View style={[styles.formGroup, { flex: 1, marginRight: SIZES.sm }]}>
              <Text style={styles.inputLabel}>From</Text>
              <TouchableOpacity style={styles.formInput}>
                <Text style={styles.timeText}>9:00 AM</Text>
                <Ionicons name="time-outline" size={20} color={COLORS.textMedium} />
              </TouchableOpacity>
            </View>
            
            <View style={[styles.formGroup, { flex: 1 }]}>
              <Text style={styles.inputLabel}>To</Text>
              <TouchableOpacity style={styles.formInput}>
                <Text style={styles.timeText}>1:00 PM</Text>
                <Ionicons name="time-outline" size={20} color={COLORS.textMedium} />
              </TouchableOpacity>
            </View>
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
            <Text style={styles.submitButtonText}>Add Staff</Text>
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
  addButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: SIZES.sm,
    paddingHorizontal: SIZES.padding,
    borderRadius: SIZES.radius,
  },
  addButtonText: {
    ...FONTS.button,
    color: COLORS.white,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    marginHorizontal: SIZES.padding,
    marginBottom: SIZES.md,
    borderRadius: SIZES.radius,
    padding: SIZES.sm,
    ...SHADOWS.small,
  },
  searchInput: {
    flex: 1,
    ...FONTS.body3,
    color: COLORS.textDark,
    marginLeft: SIZES.xs,
  },
  staffCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    marginHorizontal: SIZES.padding,
    marginBottom: SIZES.md,
    borderRadius: SIZES.radius,
    padding: SIZES.padding,
    ...SHADOWS.small,
  },
  staffImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: SIZES.md,
  },
  staffDetails: {
    flex: 1,
  },
  staffHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SIZES.xs / 2,
  },
  staffName: {
    ...FONTS.h4,
    color: COLORS.textDark,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 2,
    paddingHorizontal: SIZES.xs,
    borderRadius: SIZES.radius / 2,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 4,
  },
  statusText: {
    ...FONTS.caption,
    fontWeight: '600',
  },
  staffRole: {
    ...FONTS.body3,
    color: COLORS.textMedium,
    marginBottom: SIZES.sm,
  },
  staffDetailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SIZES.xs,
  },
  staffDetailText: {
    ...FONTS.body4,
    color: COLORS.textMedium,
    marginLeft: SIZES.xs,
  },
  nextVisitContainer: {
    backgroundColor: COLORS.primaryLight,
    paddingVertical: 2,
    paddingHorizontal: SIZES.xs,
    borderRadius: SIZES.radius / 4,
    alignSelf: 'flex-start',
    marginTop: SIZES.xs,
  },
  nextVisitText: {
    ...FONTS.caption,
    color: COLORS.primary,
    fontWeight: '600',
  },
  lastActiveText: {
    ...FONTS.caption,
    color: COLORS.textLight,
    marginTop: SIZES.xs,
  },
  moreButton: {
    padding: SIZES.xs,
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
  formContainer: {
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
  roleContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -SIZES.xs / 2,
  },
  roleOption: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: SIZES.radius / 2,
    paddingVertical: SIZES.xs,
    paddingHorizontal: SIZES.sm,
    margin: SIZES.xs,
  },
  roleSelected: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  roleText: {
    ...FONTS.body4,
    color: COLORS.textDark,
  },
  roleSelectedText: {
    color: COLORS.white,
  },
  idContainer: {
    marginBottom: SIZES.sm,
  },
  idLabel: {
    ...FONTS.body3,
    color: COLORS.textMedium,
    marginBottom: SIZES.xs,
  },
  idTypeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  idTypeOption: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingVertical: SIZES.xs,
    alignItems: 'center',
    marginRight: SIZES.xs,
  },
  idTypeSelected: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  idTypeText: {
    ...FONTS.body4,
    color: COLORS.textDark,
  },
  idTypeSelectedText: {
    color: COLORS.white,
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: COLORS.primary,
    borderRadius: SIZES.radius,
    padding: SIZES.padding,
  },
  uploadButtonText: {
    ...FONTS.body3,
    color: COLORS.primary,
    marginLeft: SIZES.sm,
  },
  daysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dayOption: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  daySelected: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  dayText: {
    ...FONTS.body3,
    color: COLORS.textDark,
  },
  daySelectedText: {
    color: COLORS.white,
  },
  timeRangeContainer: {
    flexDirection: 'row',
  },
  timeText: {
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

export default StaffScreen;