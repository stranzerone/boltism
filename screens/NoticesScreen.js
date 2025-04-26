import React, { useState } from 'react';
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

const NoticesScreen = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const notices = [
    {
      id: 1,
      title: 'Scheduled Water Outage',
      description: 'There will be a scheduled water outage on Friday, April 20th from 10:00 AM to 2:00 PM due to maintenance work on the main water supply line.',
      date: 'Apr 15, 2025',
      category: 'maintenance',
      isImportant: true,
      image: 'https://images.pexels.com/photos/4429141/pexels-photo-4429141.jpeg',
    },
    {
      id: 2,
      title: 'Annual General Meeting',
      description: 'The Annual General Meeting for all residents will be held on April 25th at 7:00 PM in the community hall. All owners are requested to attend.',
      date: 'Apr 10, 2025',
      category: 'event',
      isImportant: false,
    },
    {
      id: 3,
      title: 'New Parking Rules',
      description: 'Starting May 1st, new parking rules will be implemented. Each unit will be allocated two parking spots. Visitor parking will be limited to 24 hours.',
      date: 'Apr 5, 2025',
      category: 'announcement',
      isImportant: true,
    },
    {
      id: 4,
      title: 'Pool Maintenance Schedule',
      description: 'The community pool will be closed for routine maintenance every Monday from 8:00 AM to 12:00 PM starting next week.',
      date: 'Mar 28, 2025',
      category: 'maintenance',
      isImportant: false,
    },
  ];
  
  const filterNotices = () => {
    if (activeTab === 'all') {
      return notices;
    }
    return notices.filter(notice => notice.category === activeTab);
  };
  
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'maintenance':
        return 'construct-outline';
      case 'event':
        return 'calendar-outline';
      case 'announcement':
        return 'megaphone-outline';
      default:
        return 'information-circle-outline';
    }
  };
  
  const getCategoryColor = (category) => {
    switch (category) {
      case 'maintenance':
        return COLORS.warning;
      case 'event':
        return COLORS.success;
      case 'announcement':
        return COLORS.primary;
      default:
        return COLORS.info;
    }
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.tabsContainer}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabsScrollContent}
        >
          <TouchableOpacity
            style={[styles.tab, activeTab === 'all' && styles.activeTab]}
            onPress={() => setActiveTab('all')}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'all' && styles.activeTabText,
              ]}
            >
              All
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.tab, activeTab === 'announcement' && styles.activeTab]}
            onPress={() => setActiveTab('announcement')}
          >
            <Ionicons
              name="megaphone-outline"
              size={16}
              color={activeTab === 'announcement' ? COLORS.primary : COLORS.textMedium}
              style={styles.tabIcon}
            />
            <Text
              style={[
                styles.tabText,
                activeTab === 'announcement' && styles.activeTabText,
              ]}
            >
              Announcements
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.tab, activeTab === 'maintenance' && styles.activeTab]}
            onPress={() => setActiveTab('maintenance')}
          >
            <Ionicons
              name="construct-outline"
              size={16}
              color={activeTab === 'maintenance' ? COLORS.primary : COLORS.textMedium}
              style={styles.tabIcon}
            />
            <Text
              style={[
                styles.tabText,
                activeTab === 'maintenance' && styles.activeTabText,
              ]}
            >
              Maintenance
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.tab, activeTab === 'event' && styles.activeTab]}
            onPress={() => setActiveTab('event')}
          >
            <Ionicons
              name="calendar-outline"
              size={16}
              color={activeTab === 'event' ? COLORS.primary : COLORS.textMedium}
              style={styles.tabIcon}
            />
            <Text
              style={[
                styles.tabText,
                activeTab === 'event' && styles.activeTabText,
              ]}
            >
              Events
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      
      <ScrollView>
        {filterNotices().map((notice) => (
          <TouchableOpacity key={notice.id} style={styles.noticeCard}>
            <View style={styles.noticeHeader}>
              <View style={styles.categoryContainer}>
                <Ionicons
                  name={getCategoryIcon(notice.category)}
                  size={16}
                  color={getCategoryColor(notice.category)}
                  style={styles.categoryIcon}
                />
                <Text
                  style={[
                    styles.categoryText,
                    { color: getCategoryColor(notice.category) },
                  ]}
                >
                  {notice.category.charAt(0).toUpperCase() + notice.category.slice(1)}
                </Text>
              </View>
              
              {notice.isImportant && (
                <View style={styles.importantBadge}>
                  <Ionicons name="alert-outline" size={12} color={COLORS.white} />
                  <Text style={styles.importantText}>Important</Text>
                </View>
              )}
            </View>
            
            <Text style={styles.noticeTitle}>{notice.title}</Text>
            
            {notice.image && (
              <Image
                source={{ uri: notice.image }}
                style={styles.noticeImage}
              />
            )}
            
            <Text style={styles.noticeDescription}>{notice.description}</Text>
            
            <View style={styles.noticeFooter}>
              <View style={styles.dateContainer}>
                <Ionicons name="time-outline" size={14} color={COLORS.textLight} />
                <Text style={styles.dateText}>{notice.date}</Text>
              </View>
              
              <TouchableOpacity style={styles.readMoreButton}>
                <Text style={styles.readMoreText}>Read More</Text>
                <Ionicons name="chevron-forward" size={16} color={COLORS.primary} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  tabsContainer: {
    backgroundColor: COLORS.white,
    marginHorizontal: SIZES.padding,
    marginTop: SIZES.padding,
    marginBottom: SIZES.md,
    borderRadius: SIZES.radius,
    ...SHADOWS.small,
  },
  tabsScrollContent: {
    paddingHorizontal: SIZES.xs,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SIZES.sm,
    paddingHorizontal: SIZES.md,
    borderRadius: SIZES.radius - SIZES.xs,
    marginVertical: SIZES.xs,
    marginHorizontal: SIZES.xs / 2,
  },
  activeTab: {
    backgroundColor: COLORS.primaryLight,
  },
  tabIcon: {
    marginRight: SIZES.xs / 2,
  },
  tabText: {
    ...FONTS.body3,
    color: COLORS.textMedium,
  },
  activeTabText: {
    color: COLORS.primary,
    fontWeight: '600',
  },
  noticeCard: {
    backgroundColor: COLORS.white,
    marginHorizontal: SIZES.padding,
    marginBottom: SIZES.md,
    borderRadius: SIZES.radius,
    padding: SIZES.padding,
    ...SHADOWS.small,
  },
  noticeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SIZES.sm,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryIcon: {
    marginRight: SIZES.xs / 2,
  },
  categoryText: {
    ...FONTS.body4,
    fontWeight: '600',
  },
  importantBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.error,
    paddingVertical: 2,
    paddingHorizontal: SIZES.xs,
    borderRadius: SIZES.radius / 2,
  },
  importantText: {
    ...FONTS.caption,
    color: COLORS.white,
    marginLeft: 2,
  },
  noticeTitle: {
    ...FONTS.h3,
    color: COLORS.textDark,
    marginBottom: SIZES.sm,
  },
  noticeImage: {
    width: '100%',
    height: 160,
    borderRadius: SIZES.radius,
    marginBottom: SIZES.sm,
  },
  noticeDescription: {
    ...FONTS.body3,
    color: COLORS.textMedium,
    lineHeight: 22,
    marginBottom: SIZES.md,
  },
  noticeFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: COLORS.borderLight,
    paddingTop: SIZES.sm,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    ...FONTS.caption,
    color: COLORS.textLight,
    marginLeft: 4,
  },
  readMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  readMoreText: {
    ...FONTS.body4,
    color: COLORS.primary,
    marginRight: 2,
  },
});

export default NoticesScreen;