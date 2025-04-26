import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useAppContext } from '../context/AppContext';

import QuickAccessCard from '../components/QuickAccessCard';
import ServiceCard from '../components/ServiceCard';
import VisitorCard from '../components/VisitorCard';
import PromotionBanner from '../components/PromotionBanner';

const DashboardScreen = ({ navigation }) => {
  const { user } = useAppContext();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerLeft} onPress={() => navigation.toggleDrawer()}>
          <Ionicons name="menu" size={24} color="#323232" />
          <View style={styles.locationContainer}>
            <Text style={styles.locationText}>{user.complex}</Text>
            <Ionicons name="chevron-down-outline" size={16} color="#323232" />
          </View>
        </TouchableOpacity>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.searchButton}>
            <Ionicons name="search" size={22} color="#323232" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileButton}>
            <View style={styles.profileImage}>
              <Text style={styles.profileInitial}>J</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Quick Access Section */}
        <View style={styles.quickAccessSection}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.quickAccessContainer}>
            <QuickAccessCard 
              title="Gate Updates" 
              icon="https://img.icons8.com/fluency/96/000000/gate.png" 
              onPress={() => {}} 
            />
            <QuickAccessCard 
              title="My Bills" 
              icon="https://img.icons8.com/fluency/96/000000/bill.png" 
              onPress={() => navigation.navigate('Accounts')} 
            />
            <QuickAccessCard 
              title="My Society" 
              icon="https://img.icons8.com/fluency/96/000000/apartment.png" 
              onPress={() => {}} 
              notification="1 New"
            />
            <QuickAccessCard 
              title="Explore" 
              icon="https://img.icons8.com/fluency/96/000000/compass.png" 
              onPress={() => {}} 
            />
          </ScrollView>
        </View>

        {/* Visitors Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Your visitors</Text>
          <View style={styles.visitorCardsContainer}>
            <VisitorCard 
              title="Daily Help" 
              icon="people-outline" 
              iconColor="#FF9800" 
              onPress={() => {}} 
            />
            <VisitorCard 
              title="Pre Approve" 
              icon="checkmark-circle-outline" 
              iconColor="#4CAF50" 
              onPress={() => navigation.navigate('Visits')} 
            />
          </View>
        </View>

        {/* Promotion Banner */}
        <PromotionBanner 
          image="https://images.pexels.com/photos/6624862/pexels-photo-6624862.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          title="COMMUNITY HEALTH NEWS"
          subtitle=""
          actionText="Know More"
          onPress={() => {}}
        />

        {/* Services Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Services you need</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.servicesContainer}>
            <ServiceCard 
              title="AC Service & Repair" 
              icon="https://img.icons8.com/fluency/96/000000/air-conditioner.png" 
              onPress={() => navigation.navigate('Service request')} 
            />
            <ServiceCard 
              title="Pre Approval" 
              icon="https://img.icons8.com/fluency/96/000000/approval.png" 
              onPress={() => navigation.navigate('Visits')} 
            />
            <ServiceCard 
              title="Help Desk" 
              icon="https://img.icons8.com/fluency/96/000000/help.png" 
              onPress={() => {}} 
            />
            <ServiceCard 
              title="Amenities" 
              icon="https://img.icons8.com/fluency/96/000000/swimming-pool.png" 
              onPress={() => {}} 
            />
          </ScrollView>
        </View>

        {/* Discover Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Discover more</Text>
          <PromotionBanner 
            image="https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            title="Super Value DAYS"
            subtitle="Every Fri-Sun"
            actionText="SHOP NOW"
            onPress={() => {}}
          />
        </View>

        {/* Pagination Dots */}
        <View style={styles.paginationContainer}>
          <View style={[styles.paginationDot, styles.activeDot]} />
          <View style={styles.paginationDot} />
          <View style={styles.paginationDot} />
          <View style={styles.paginationDot} />
          <View style={styles.paginationDot} />
          <View style={styles.paginationDot} />
        </View>

        {/* Space for bottom tab */}
        <View style={{ height: 70 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
  },
  locationText: {
    fontSize: 16,
    fontWeight: '500',
    marginRight: 4,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchButton: {
    marginRight: 16,
  },
  profileButton: {},
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#E91E63',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInitial: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  quickAccessSection: {
    backgroundColor: 'white',
    paddingVertical: 16,
    marginBottom: 12,
  },
  quickAccessContainer: {
    paddingHorizontal: 12,
  },
  sectionContainer: {
    marginVertical: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    marginHorizontal: 16,
  },
  visitorCardsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 8,
  },
  servicesContainer: {
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#BDBDBD',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#1E88E5',
  },
});

export default DashboardScreen;