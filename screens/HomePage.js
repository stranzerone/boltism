import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Animated,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS, SIZES, SHADOWS } from '../constants/theme';
import QuickActionCard from '../components/QuickActionCard';
import NotificationBell from '../components/NotificationBell';
import StatusCard from '../components/StatusCard';

const HomePage = () => {
  const navigation = useNavigation();
  const [greeting, setGreeting] = useState('');
  const fadeAnim = useState(new Animated.Value(0))[0];
  const translateY = useState(new Animated.Value(20))[0];

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting('Good Morning');
    } else if (currentHour < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }

    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const menuItems = [
    {
      id: 1,
      title: 'Accounts',
      subtitle: 'Bills, payments & recharge',
      icon: 'card-outline',
      color: COLORS.primary,
      screen: 'Accounts',
    },
    {
      id: 2,
      title: 'Energy',
      subtitle: 'Monitor consumption',
      icon: 'flash-outline',
      color: COLORS.warning,
      screen: 'EnergyConsumption',
    },
    {
      id: 3,
      title: 'Service',
      subtitle: 'Request assistance',
      icon: 'build-outline',
      color: COLORS.accent,
      screen: 'ServiceRequest',
    },
    {
      id: 4,
      title: 'Visits',
      subtitle: 'Manage visitors',
      icon: 'people-outline',
      color: COLORS.secondary,
      screen: 'Visits',
    },
    {
      id: 5,
      title: 'Staff',
      subtitle: 'Manage domestic help',
      icon: 'person-outline',
      color: COLORS.info,
      screen: 'Staff',
    },
    {
      id: 6,
      title: 'Notices',
      subtitle: 'Community updates',
      icon: 'newspaper-outline',
      color: COLORS.success,
      screen: 'Notices',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>{greeting}</Text>
            <Text style={styles.userName}>John Smith</Text>
          </View>
          <NotificationBell count={3} />
        </View>

        <Animated.View
          style={[
            styles.complexCard,
            {
              opacity: fadeAnim,
              transform: [{ translateY: translateY }],
            },
          ]}
        >
          <View style={styles.complexCardContent}>
            <Image
              source={{ uri: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg' }}
              style={styles.complexImage}
            />
            <View style={styles.complexCardOverlay}>
              <Text style={styles.complexName}>Green Valley Apartments</Text>
              <TouchableOpacity 
                style={styles.complexButton}
                onPress={() => navigation.navigate('Complex')}
              >
                <Text style={styles.complexButtonText}>Manage Complex</Text>
                <Ionicons name="chevron-forward" size={16} color={COLORS.white} />
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
        </View>

        <View style={styles.quickActionGrid}>
          {menuItems.map((item, index) => (
            <QuickActionCard
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
              iconName={item.icon}
              color={item.color}
              delay={index * 100}
              onPress={() => navigation.navigate(item.screen)}
            />
          ))}
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Status</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>

        <StatusCard
          title="Electricity"
          value="235 kWh"
          period="This Month"
          change={-5.2}
          iconName="flash-outline"
          color={COLORS.warning}
        />

        <StatusCard
          title="Water"
          value="1,240 L"
          period="This Month"
          change={2.8}
          iconName="water-outline"
          color={COLORS.info}
        />

        <StatusCard
          title="Maintenance"
          value="No pending issues"
          status="good"
          iconName="checkmark-circle-outline"
          color={COLORS.success}
        />

        <StatusCard
          title="Upcoming Payment"
          value="$245.00"
          dueDate="Due on May 15, 2025"
          iconName="calendar-outline"
          color={COLORS.primary}
          actionText="Pay Now"
          onAction={() => navigation.navigate('Accounts')}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    paddingBottom: SIZES.padding * 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding,
  },
  greeting: {
    ...FONTS.body3,
    color: COLORS.textMedium,
  },
  userName: {
    ...FONTS.h2,
    color: COLORS.textDark,
    marginTop: SIZES.xs,
  },
  complexCard: {
    marginHorizontal: SIZES.padding,
    borderRadius: SIZES.radius,
    overflow: 'hidden',
    ...SHADOWS.medium,
  },
  complexCardContent: {
    position: 'relative',
    height: 160,
  },
  complexImage: {
    width: '100%',
    height: '100%',
  },
  complexCardOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: SIZES.padding,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  complexName: {
    ...FONTS.h3,
    color: COLORS.white,
    marginBottom: SIZES.xs,
  },
  complexButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  complexButtonText: {
    ...FONTS.body3,
    color: COLORS.white,
    marginRight: SIZES.xs,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
    marginTop: SIZES.padding * 1.5,
    marginBottom: SIZES.margin,
  },
  sectionTitle: {
    ...FONTS.h3,
    color: COLORS.textDark,
  },
  viewAllText: {
    ...FONTS.body3,
    color: COLORS.primary,
  },
  quickActionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: SIZES.padding / 2,
  },
});

export default HomePage;