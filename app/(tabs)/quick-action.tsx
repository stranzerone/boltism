import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { X } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import Colors from '@/constants/Colors';
import ActionCard from '@/components/ActionCard';

export default function QuickActionScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View style={[styles.container, { paddingTop: insets.top + 20 }]}>
      <View style={styles.header}>
        <Text style={styles.title}>Quick Actions</Text>
        <TouchableOpacity 
          style={styles.closeButton}
          onPress={() => router.back()}
        >
          <X size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Visitor Management</Text>
          <View style={styles.actionGrid}>
            <ActionCard 
              icon="user-plus" 
              title="Invite Visitor" 
              color="#4A6FFF"
              onPress={() => {}}
            />
            <ActionCard 
              icon="calendar" 
              title="Pre Approve" 
              color="#FF6B6B"
              onPress={() => {}}
            />
            <ActionCard 
              icon="user" 
              title="Daily Help" 
              color="#4ECDC4"
              onPress={() => {}}
            />
            <ActionCard 
              icon="truck" 
              title="Delivery" 
              color="#FFD166"
              onPress={() => {}}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Payments</Text>
          <View style={styles.actionGrid}>
            <ActionCard 
              icon="credit-card" 
              title="Pay Bills" 
              color="#6772E5"
              onPress={() => {}}
            />
            <ActionCard 
              icon="file-text" 
              title="Receipts" 
              color="#44CFCB"
              onPress={() => {}}
            />
            <ActionCard 
              icon="bar-chart-2" 
              title="Usage" 
              color="#FF9F1C"
              onPress={() => {}}
            />
            <ActionCard 
              icon="alert-triangle" 
              title="Complaints" 
              color="#E76F51"
              onPress={() => {}}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Amenities</Text>
          <View style={styles.actionGrid}>
            <ActionCard 
              icon="calendar" 
              title="Book Club" 
              color="#5E60CE"
              onPress={() => {}}
            />
            <ActionCard 
              icon="coffee" 
              title="Book Cafe" 
              color="#64B6AC"
              onPress={() => {}}
            />
            <ActionCard 
              icon="share-2" 
              title="Share Car" 
              color="#FF7E67"
              onPress={() => {}}
            />
            <ActionCard 
              icon="tool" 
              title="Repair" 
              color="#48BFE3"
              onPress={() => {}}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Society</Text>
          <View style={styles.actionGrid}>
            <ActionCard 
              icon="file" 
              title="Documents" 
              color="#2A9D8F"
              onPress={() => {}}
            />
            <ActionCard 
              icon="message-circle" 
              title="Notices" 
              color="#E9C46A"
              onPress={() => {}}
            />
            <ActionCard 
              icon="users" 
              title="Meetings" 
              color="#F4A261"
              onPress={() => {}}
            />
            <ActionCard 
              icon="phone" 
              title="Emergency" 
              color="#E76F51"
              onPress={() => {}}
            />
          </View>
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 16,
    position: 'relative',
  },
  title: {
    fontSize: 22,
    fontFamily: 'Inter-Bold',
    color: '#333',
  },
  closeButton: {
    position: 'absolute',
    right: 20,
    top: 0,
    padding: 4,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 30,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#333',
    marginBottom: 12,
  },
  actionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});