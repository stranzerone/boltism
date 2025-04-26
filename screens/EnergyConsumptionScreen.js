import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS, SIZES, SHADOWS } from '../constants/theme';

const EnergyConsumptionScreen = () => {
  const [activeTab, setActiveTab] = useState('electric');
  
  const usageData = {
    electric: {
      current: 235,
      previous: 260,
      unit: 'kWh',
      percent: -9.6,
      cost: 28.20,
      readings: [
        { date: 'Apr 15, 2025', reading: 235, cost: 28.20 },
        { date: 'Mar 15, 2025', reading: 260, cost: 31.20 },
        { date: 'Feb 15, 2025', reading: 280, cost: 33.60 },
      ],
    },
    water: {
      current: 1240,
      previous: 1100,
      unit: 'L',
      percent: 12.7,
      cost: 24.80,
      readings: [
        { date: 'Apr 15, 2025', reading: 1240, cost: 24.80 },
        { date: 'Mar 15, 2025', reading: 1100, cost: 22.00 },
        { date: 'Feb 15, 2025', reading: 980, cost: 19.60 },
      ],
    },
    gas: {
      current: 45,
      previous: 50,
      unit: 'm³',
      percent: -10.0,
      cost: 54.00,
      readings: [
        { date: 'Apr 15, 2025', reading: 45, cost: 54.00 },
        { date: 'Mar 15, 2025', reading: 50, cost: 60.00 },
        { date: 'Feb 15, 2025', reading: 65, cost: 78.00 },
      ],
    },
  };
  
  const getCurrentData = () => {
    return usageData[activeTab];
  };
  
  const meterStatuses = {
    electric: 'Active',
    water: 'Active',
    gas: 'Active',
  };
  
  const tips = [
    {
      id: 1,
      title: 'Use LED Bulbs',
      description: 'Replace incandescent bulbs with LED to save up to 75% energy',
      icon: 'bulb-outline',
    },
    {
      id: 2,
      title: 'Fix Leaking Taps',
      description: 'A dripping tap can waste more than 3,000 gallons a year',
      icon: 'water-outline',
    },
    {
      id: 3,
      title: 'Unplug Devices',
      description: 'Unplug electronics when not in use to avoid phantom energy',
      icon: 'flash-off-outline',
    },
  ];
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'electric' && styles.activeTab]}
          onPress={() => setActiveTab('electric')}
        >
          <Ionicons
            name="flash-outline"
            size={20}
            color={activeTab === 'electric' ? COLORS.primary : COLORS.textMedium}
          />
          <Text
            style={[
              styles.tabText,
              activeTab === 'electric' && styles.activeTabText,
            ]}
          >
            Electric
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.tab, activeTab === 'water' && styles.activeTab]}
          onPress={() => setActiveTab('water')}
        >
          <Ionicons
            name="water-outline"
            size={20}
            color={activeTab === 'water' ? COLORS.primary : COLORS.textMedium}
          />
          <Text
            style={[
              styles.tabText,
              activeTab === 'water' && styles.activeTabText,
            ]}
          >
            Water
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.tab, activeTab === 'gas' && styles.activeTab]}
          onPress={() => setActiveTab('gas')}
        >
          <Ionicons
            name="flame-outline"
            size={20}
            color={activeTab === 'gas' ? COLORS.primary : COLORS.textMedium}
          />
          <Text
            style={[
              styles.tabText,
              activeTab === 'gas' && styles.activeTabText,
            ]}
          >
            Gas
          </Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.usageCard}>
        <View style={styles.usageCardHeader}>
          <Text style={styles.usageCardTitle}>Current Usage</Text>
          <TouchableOpacity style={styles.reportButton}>
            <Text style={styles.reportButtonText}>Report</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.usageCardContent}>
          <View style={styles.usageValue}>
            <Text style={styles.usageNumber}>{getCurrentData().current}</Text>
            <Text style={styles.usageUnit}>{getCurrentData().unit}</Text>
          </View>
          
          <View style={styles.usageComparison}>
            <Text style={styles.previousReading}>
              Previous: {getCurrentData().previous} {getCurrentData().unit}
            </Text>
            
            <View style={styles.percentChange}>
              <Ionicons
                name={getCurrentData().percent > 0 ? 'arrow-up-outline' : 'arrow-down-outline'}
                size={14}
                color={getCurrentData().percent > 0 ? COLORS.error : COLORS.success}
              />
              <Text
                style={[
                  styles.percentText,
                  { color: getCurrentData().percent > 0 ? COLORS.error : COLORS.success },
                ]}
              >
                {Math.abs(getCurrentData().percent).toFixed(1)}%
              </Text>
            </View>
          </View>
          
          <View style={styles.usageCost}>
            <Text style={styles.costLabel}>Estimated Cost</Text>
            <Text style={styles.costValue}>${getCurrentData().cost.toFixed(2)}</Text>
          </View>
        </View>
        
        <View style={styles.meterStatus}>
          <View style={styles.statusIndicator}>
            <View
              style={[
                styles.statusDot,
                { backgroundColor: COLORS.success },
              ]}
            />
            <Text style={styles.statusText}>
              Meter Status: {meterStatuses[activeTab]}
            </Text>
          </View>
          
          <TouchableOpacity>
            <Text style={styles.reportIssueText}>Report Issue</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Recent Readings</Text>
      </View>
      
      <View style={styles.readingsCard}>
        <View style={styles.readingsHeader}>
          <Text style={styles.readingHeaderDate}>Date</Text>
          <Text style={styles.readingHeaderReading}>Reading</Text>
          <Text style={styles.readingHeaderCost}>Cost</Text>
        </View>
        
        {getCurrentData().readings.map((reading, index) => (
          <View 
            key={index} 
            style={[
              styles.readingItem,
              index === getCurrentData().readings.length - 1 && styles.lastReadingItem,
            ]}
          >
            <Text style={styles.readingDate}>{reading.date}</Text>
            <Text style={styles.readingValue}>
              {reading.reading} {getCurrentData().unit}
            </Text>
            <Text style={styles.readingCost}>${reading.cost.toFixed(2)}</Text>
          </View>
        ))}
      </View>
      
      <TouchableOpacity style={styles.historyButton}>
        <Text style={styles.historyButtonText}>View Full History</Text>
        <Ionicons name="chevron-forward" size={16} color={COLORS.primary} />
      </TouchableOpacity>
      
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Energy Saving Tips</Text>
      </View>
      
      {tips.map((tip) => (
        <View key={tip.id} style={styles.tipCard}>
          <View style={styles.tipIconContainer}>
            <Ionicons name={tip.icon} size={24} color={COLORS.primary} />
          </View>
          <View style={styles.tipContent}>
            <Text style={styles.tipTitle}>{tip.title}</Text>
            <Text style={styles.tipDescription}>{tip.description}</Text>
          </View>
        </View>
      ))}
      
      <TouchableOpacity style={styles.allTipsButton}>
        <Text style={styles.allTipsButtonText}>View All Tips</Text>
      </TouchableOpacity>
    </ScrollView>
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
    marginBottom: SIZES.padding,
    borderRadius: SIZES.radius,
    padding: SIZES.xs,
    ...SHADOWS.small,
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
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
    marginLeft: SIZES.xs,
  },
  activeTabText: {
    color: COLORS.primary,
    fontWeight: '600',
  },
  usageCard: {
    backgroundColor: COLORS.white,
    marginHorizontal: SIZES.padding,
    borderRadius: SIZES.radius,
    padding: SIZES.padding,
    marginBottom: SIZES.padding,
    ...SHADOWS.medium,
  },
  usageCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SIZES.md,
  },
  usageCardTitle: {
    ...FONTS.h3,
    color: COLORS.textDark,
  },
  reportButton: {
    paddingVertical: SIZES.xs,
    paddingHorizontal: SIZES.sm,
  },
  reportButtonText: {
    ...FONTS.body4,
    color: COLORS.primary,
  },
  usageCardContent: {
    alignItems: 'center',
    marginBottom: SIZES.md,
  },
  usageValue: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  usageNumber: {
    ...FONTS.largeTitle,
    fontSize: 48,
    fontWeight: '700',
    color: COLORS.textDark,
  },
  usageUnit: {
    ...FONTS.h3,
    color: COLORS.textMedium,
    marginBottom: 8,
    marginLeft: SIZES.xs,
  },
  usageComparison: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.xs,
  },
  previousReading: {
    ...FONTS.body3,
    color: COLORS.textMedium,
    marginRight: SIZES.md,
  },
  percentChange: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  percentText: {
    ...FONTS.body3,
    fontWeight: '600',
    marginLeft: 2,
  },
  usageCost: {
    marginTop: SIZES.md,
    alignItems: 'center',
  },
  costLabel: {
    ...FONTS.body3,
    color: COLORS.textMedium,
  },
  costValue: {
    ...FONTS.h2,
    color: COLORS.primary,
  },
  meterStatus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: SIZES.md,
    borderTopWidth: 1,
    borderTopColor: COLORS.borderLight,
  },
  statusIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: SIZES.xs,
  },
  statusText: {
    ...FONTS.body3,
    color: COLORS.textMedium,
  },
  reportIssueText: {
    ...FONTS.body4,
    color: COLORS.primary,
  },
  sectionHeader: {
    paddingHorizontal: SIZES.padding,
    marginTop: SIZES.lg,
    marginBottom: SIZES.md,
  },
  sectionTitle: {
    ...FONTS.h3,
    color: COLORS.textDark,
  },
  readingsCard: {
    backgroundColor: COLORS.white,
    marginHorizontal: SIZES.padding,
    borderRadius: SIZES.radius,
    overflow: 'hidden',
    ...SHADOWS.small,
  },
  readingsHeader: {
    flexDirection: 'row',
    paddingVertical: SIZES.sm,
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.backgroundLight,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  readingHeaderDate: {
    ...FONTS.body4,
    fontWeight: '600',
    color: COLORS.textMedium,
    flex: 1.2,
  },
  readingHeaderReading: {
    ...FONTS.body4,
    fontWeight: '600',
    color: COLORS.textMedium,
    flex: 1,
    textAlign: 'center',
  },
  readingHeaderCost: {
    ...FONTS.body4,
    fontWeight: '600',
    color: COLORS.textMedium,
    flex: 0.8,
    textAlign: 'right',
  },
  readingItem: {
    flexDirection: 'row',
    paddingVertical: SIZES.md,
    paddingHorizontal: SIZES.padding,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderLight,
  },
  lastReadingItem: {
    borderBottomWidth: 0,
  },
  readingDate: {
    ...FONTS.body3,
    color: COLORS.textDark,
    flex: 1.2,
  },
  readingValue: {
    ...FONTS.body3,
    color: COLORS.textDark,
    flex: 1,
    textAlign: 'center',
  },
  readingCost: {
    ...FONTS.body3,
    color: COLORS.textDark,
    flex: 0.8,
    textAlign: 'right',
  },
  historyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SIZES.md,
    marginBottom: SIZES.lg,
  },
  historyButtonText: {
    ...FONTS.body3,
    color: COLORS.primary,
    marginRight: SIZES.xs,
  },
  tipCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    marginHorizontal: SIZES.padding,
    marginBottom: SIZES.md,
    borderRadius: SIZES.radius,
    padding: SIZES.padding,
    ...SHADOWS.small,
  },
  tipIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: `${COLORS.primary}15`,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SIZES.md,
  },
  tipContent: {
    flex: 1,
  },
  tipTitle: {
    ...FONTS.h4,
    color: COLORS.textDark,
    marginBottom: SIZES.xs,
  },
  tipDescription: {
    ...FONTS.body4,
    color: COLORS.textMedium,
    lineHeight: 20,
  },
  allTipsButton: {
    backgroundColor: COLORS.white,
    marginHorizontal: SIZES.padding,
    marginBottom: SIZES.padding * 2,
    borderRadius: SIZES.radius,
    padding: SIZES.sm,
    alignItems: 'center',
    ...SHADOWS.small,
  },
  allTipsButtonText: {
    ...FONTS.body3,
    color: COLORS.primary,
  },
});

export default EnergyConsumptionScreen;