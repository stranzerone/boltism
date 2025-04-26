import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  ScrollView, 
  Image, 
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ChevronDown, Bell, Users, FileText, Calendar, Coffee, CirclePlus as PlusCircle } from 'lucide-react-native';
import Colors from '@/constants/Colors';

const { width } = Dimensions.get('window');

const NOTICES = [
  {
    id: '1',
    title: 'Water Shortage Notice',
    date: 'Today, 10:30 AM',
    content: 'Due to maintenance work, there will be water shortage on 15th June from 10:00 AM to 2:00 PM. Please store water accordingly.',
  },
  {
    id: '2',
    title: 'Monthly Society Meeting',
    date: 'Yesterday, 6:00 PM',
    content: 'The monthly society meeting will be held on 20th June at 7:00 PM in the community hall. All residents are requested to attend.',
  },
];

const EVENTS = [
  {
    id: '1',
    title: 'Diwali Celebration',
    date: '12 Nov, 2023',
    time: '6:00 PM - 10:00 PM',
    location: 'Community Hall',
    image: 'https://images.pexels.com/photos/2469/building-construction-building-site-constructing.jpg',
  },
  {
    id: '2',
    title: 'Yoga Session',
    date: '15 Nov, 2023',
    time: '7:00 AM - 8:00 AM',
    location: 'Garden Area',
    image: 'https://images.pexels.com/photos/892618/pexels-photo-892618.jpeg',
  },
];

const BILLS = [
  {
    id: '1',
    title: 'Maintenance',
    amount: '₹2,500',
    dueDate: '30 Nov, 2023',
    status: 'Pending',
  },
  {
    id: '2',
    title: 'Electricity',
    amount: '₹1,800',
    dueDate: '25 Nov, 2023',
    status: 'Paid',
    paidDate: '21 Nov, 2023',
  },
  {
    id: '3',
    title: 'Water Bill',
    amount: '₹750',
    dueDate: '28 Nov, 2023',
    status: 'Pending',
  },
];

export default function SocietyScreen() {
  const insets = useSafeAreaInsets();
  const [society, setSociety] = useState('I-301');
  
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.societyInfo}>
            <Text style={styles.societyName}>My Society</Text>
            <View style={styles.societySelector}>
              <Text style={styles.societyUnit}>{society}</Text>
              <ChevronDown size={18} color="#555" />
            </View>
          </View>
          
          <TouchableOpacity style={styles.notificationButton}>
            <Bell size={22} color="#333" />
            <View style={styles.notificationBadge}>
              <Text style={styles.badgeText}>3</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Society Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Users size={28} color={Colors.primary} />
            <Text style={styles.statValue}>126</Text>
            <Text style={styles.statLabel}>Members</Text>
          </View>
          
          <View style={styles.statItem}>
            <FileText size={28} color={Colors.primary} />
            <Text style={styles.statValue}>8</Text>
            <Text style={styles.statLabel}>Notices</Text>
          </View>
          
          <View style={styles.statItem}>
            <Calendar size={28} color={Colors.primary} />
            <Text style={styles.statValue}>4</Text>
            <Text style={styles.statLabel}>Events</Text>
          </View>
          
          <View style={styles.statItem}>
            <Coffee size={28} color={Colors.primary} />
            <Text style={styles.statValue}>5</Text>
            <Text style={styles.statLabel}>Amenities</Text>
          </View>
        </View>
        
        {/* Recent Notices */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Notices</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          
          {NOTICES.map(notice => (
            <View key={notice.id} style={styles.noticeCard}>
              <View style={styles.noticeHeader}>
                <Text style={styles.noticeTitle}>{notice.title}</Text>
                <Text style={styles.noticeDate}>{notice.date}</Text>
              </View>
              <Text style={styles.noticeContent}>{notice.content}</Text>
            </View>
          ))}
        </View>
        
        {/* Upcoming Events */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Upcoming Events</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.eventsContainer}
          >
            {EVENTS.map(event => (
              <TouchableOpacity key={event.id} style={styles.eventCard}>
                <Image source={{ uri: event.image }} style={styles.eventImage} />
                <View style={styles.eventContent}>
                  <Text style={styles.eventTitle}>{event.title}</Text>
                  <View style={styles.eventDetails}>
                    <Calendar size={14} color="#555" />
                    <Text style={styles.eventDetail}>{event.date} • {event.time}</Text>
                  </View>
                  <Text style={styles.eventLocation}>{event.location}</Text>
                  <TouchableOpacity style={styles.joinButton}>
                    <Text style={styles.joinButtonText}>Join</Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            ))}
            
            <TouchableOpacity style={styles.createEventCard}>
              <PlusCircle size={40} color={Colors.primary} />
              <Text style={styles.createEventText}>Create Event</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        
        {/* Pending Bills */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Bills</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          
          {BILLS.map(bill => (
            <View key={bill.id} style={styles.billCard}>
              <View style={styles.billInfo}>
                <Text style={styles.billTitle}>{bill.title}</Text>
                <Text style={styles.billAmount}>{bill.amount}</Text>
              </View>
              
              <View style={styles.billDetails}>
                <Text style={styles.billDueDate}>
                  {bill.status === 'Pending' ? `Due: ${bill.dueDate}` : `Paid on: ${bill.paidDate}`}
                </Text>
                <View 
                  style={[
                    styles.billStatus, 
                    { 
                      backgroundColor: bill.status === 'Pending' ? 
                        Colors.warningLight : Colors.successLight 
                    }
                  ]}
                >
                  <Text 
                    style={[
                      styles.billStatusText, 
                      { 
                        color: bill.status === 'Pending' ? 
                          Colors.warning : Colors.success 
                      }
                    ]}
                  >
                    {bill.status}
                  </Text>
                </View>
              </View>
              
              {bill.status === 'Pending' && (
                <TouchableOpacity style={styles.payButton}>
                  <Text style={styles.payButtonText}>Pay Now</Text>
                </TouchableOpacity>
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  societyInfo: {
    flex: 1,
  },
  societyName: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#333',
  },
  societySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  societyUnit: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: '#555',
    marginRight: 4,
  },
  notificationButton: {
    position: 'relative',
    padding: 8,
  },
  notificationBadge: {
    position: 'absolute',
    top: 2,
    right: 2,
    backgroundColor: Colors.error,
    width: 18,
    height: 18,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontFamily: 'Inter-Bold',
  },
  scrollContent: {
    paddingBottom: 30,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 16,
    marginVertical: 16,
    borderRadius: 12,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: '#333',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#777',
    marginTop: 4,
  },
  sectionContainer: {
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#333',
  },
  viewAllText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: Colors.primary,
  },
  noticeCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  noticeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  noticeTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#333',
    flex: 1,
  },
  noticeDate: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#777',
  },
  noticeContent: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#555',
    lineHeight: 20,
  },
  eventsContainer: {
    paddingRight: 8,
  },
  eventCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    width: width * 0.7,
    marginRight: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  eventImage: {
    width: '100%',
    height: 120,
  },
  eventContent: {
    padding: 16,
  },
  eventTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#333',
    marginBottom: 8,
  },
  eventDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  eventDetail: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: '#555',
    marginLeft: 6,
  },
  eventLocation: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#777',
    marginBottom: 12,
  },
  joinButton: {
    backgroundColor: Colors.primaryLight,
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignSelf: 'flex-start',
  },
  joinButtonText: {
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
    color: Colors.primary,
  },
  createEventCard: {
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    width: width * 0.5,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#DDD',
    padding: 20,
  },
  createEventText: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: Colors.primary,
    marginTop: 12,
  },
  billCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  billInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  billTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#333',
  },
  billAmount: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: '#333',
  },
  billDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  billDueDate: {
    fontSize: 13,
    fontFamily: 'Inter-Regular',
    color: '#777',
  },
  billStatus: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  billStatusText: {
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
  },
  payButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  payButtonText: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: 'white',
  },
});