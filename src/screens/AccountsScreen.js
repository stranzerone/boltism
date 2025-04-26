import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useAppContext } from '../context/AppContext';

const AccountsScreen = () => {
  const { bills } = useAppContext();
  const [activeTab, setActiveTab] = useState('current');

  const renderBillItem = ({ item }) => (
    <View style={styles.billCard}>
      <View style={styles.billHeader}>
        <View style={styles.billTypeContainer}>
          <View 
            style={[
              styles.billTypeIcon, 
              {backgroundColor: item.type === 'Maintenance' ? '#4CAF50' : '#FF9800'}
            ]}
          >
            <Ionicons 
              name={item.type === 'Maintenance' ? 'home-outline' : 'flash-outline'} 
              size={20} 
              color="white" 
            />
          </View>
          <View>
            <Text style={styles.billType}>{item.type}</Text>
            <Text style={styles.billDueDate}>Due on {item.dueDate}</Text>
          </View>
        </View>
        <View style={[
          styles.statusBadge, 
          {backgroundColor: item.status === 'Paid' ? '#E8F5E9' : '#FFF3E0'}
        ]}>
          <Text style={[
            styles.statusText, 
            {color: item.status === 'Paid' ? '#4CAF50' : '#FF9800'}
          ]}>
            {item.status}
          </Text>
        </View>
      </View>
      
      <View style={styles.billDivider} />
      
      <View style={styles.billDetails}>
        <View>
          <Text style={styles.amountLabel}>Amount</Text>
          <Text style={styles.amount}>₹{item.amount}</Text>
        </View>
        
        <TouchableOpacity 
          style={[
            styles.actionButton, 
            {backgroundColor: item.status === 'Paid' ? '#F5F7FA' : '#1E88E5'}
          ]}
          disabled={item.status === 'Paid'}
        >
          <Text style={[
            styles.actionButtonText, 
            {color: item.status === 'Paid' ? '#757575' : 'white'}
          ]}>
            {item.status === 'Paid' ? 'Paid' : 'Pay Now'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.balanceCard}>
        <View style={styles.balanceHeader}>
          <Text style={styles.balanceTitle}>Wallet Balance</Text>
          <TouchableOpacity style={styles.historyButton}>
            <Text style={styles.historyButtonText}>History</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.balanceAmount}>₹2,500</Text>
        <TouchableOpacity style={styles.rechargeButton}>
          <Ionicons name="add-circle-outline" size={18} color="white" />
          <Text style={styles.rechargeButtonText}>Add Money</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[styles.tabButton, activeTab === 'current' && styles.activeTabButton]}
          onPress={() => setActiveTab('current')}
        >
          <Text style={[styles.tabText, activeTab === 'current' && styles.activeTabText]}>
            Current Bills
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tabButton, activeTab === 'history' && styles.activeTabButton]}
          onPress={() => setActiveTab('history')}
        >
          <Text style={[styles.tabText, activeTab === 'history' && styles.activeTabText]}>
            Payment History
          </Text>
        </TouchableOpacity>
      </View>
      
      {bills.length > 0 ? (
        <FlatList
          data={bills}
          renderItem={renderBillItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.billList}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Image 
            source={{ uri: 'https://img.icons8.com/fluency/96/000000/bill.png' }} 
            style={styles.emptyImage} 
          />
          <Text style={styles.emptyTitle}>No bills found</Text>
          <Text style={styles.emptySubtitle}>
            You don't have any {activeTab === 'current' ? 'current bills' : 'payment history'} yet
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  balanceCard: {
    backgroundColor: '#1E88E5',
    margin: 16,
    padding: 16,
    borderRadius: 12,
  },
  balanceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  balanceTitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  historyButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  historyButtonText: {
    fontSize: 12,
    color: 'white',
  },
  balanceAmount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
  },
  rechargeButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 8,
  },
  rechargeButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 8,
  },
  tabContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 4,
    marginBottom: 16,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 6,
  },
  activeTabButton: {
    backgroundColor: '#1E88E5',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#757575',
  },
  activeTabText: {
    color: 'white',
  },
  billList: {
    padding: 16,
  },
  billCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  billHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  billTypeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  billTypeIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  billType: {
    fontSize: 16,
    fontWeight: '500',
  },
  billDueDate: {
    fontSize: 12,
    color: '#757575',
    marginTop: 2,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
  },
  billDivider: {
    height: 1,
    backgroundColor: '#EEEEEE',
    marginVertical: 12,
  },
  billDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  amountLabel: {
    fontSize: 12,
    color: '#757575',
    marginBottom: 4,
  },
  amount: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  actionButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  actionButtonText: {
    fontSize: 14,
    fontWeight: '500',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  emptyImage: {
    width: 80,
    height: 80,
    marginBottom: 16,
    opacity: 0.5,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 14,
    color: '#757575',
    textAlign: 'center',
  },
});

export default AccountsScreen;