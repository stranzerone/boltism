import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS, SIZES, SHADOWS } from '../constants/theme';

const AccountsScreen = () => {
  const balance = {
    current: 245.00,
    pastDue: 0,
    dueDate: 'May 15, 2025',
  };
  
  const recentTransactions = [
    {
      id: 1,
      type: 'payment',
      title: 'Maintenance Fee',
      date: 'Apr 15, 2025',
      amount: 245.00,
      status: 'completed',
    },
    {
      id: 2,
      type: 'payment',
      title: 'Maintenance Fee',
      date: 'Mar 15, 2025',
      amount: 245.00,
      status: 'completed',
    },
    {
      id: 3,
      type: 'charge',
      title: 'Late Fee',
      date: 'Mar 17, 2025',
      amount: 25.00,
      status: 'waived',
    },
  ];
  
  const billingItems = [
    {
      id: 1,
      title: 'Maintenance',
      description: 'Monthly maintenance fee',
      amount: 245.00,
    },
    {
      id: 2,
      title: 'Water Charges',
      description: 'Based on usage, current estimate',
      amount: 32.50,
    },
    {
      id: 3,
      title: 'Parking',
      description: 'Second parking spot',
      amount: 50.00,
    },
  ];
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.balanceCard}>
        <View style={styles.balanceHeader}>
          <Text style={styles.balanceTitle}>Current Balance</Text>
          <TouchableOpacity style={styles.historyButton}>
            <Text style={styles.historyButtonText}>History</Text>
          </TouchableOpacity>
        </View>
        
        <Text style={styles.balanceAmount}>${balance.current.toFixed(2)}</Text>
        
        {balance.pastDue > 0 ? (
          <View style={styles.pastDueContainer}>
            <Ionicons name="alert-circle" size={16} color={COLORS.error} />
            <Text style={styles.pastDueText}>
              ${balance.pastDue.toFixed(2)} past due
            </Text>
          </View>
        ) : (
          <Text style={styles.goodStandingText}>Your account is in good standing</Text>
        )}
        
        <Text style={styles.dueDateText}>Due on {balance.dueDate}</Text>
        
        <TouchableOpacity style={styles.payNowButton}>
          <Text style={styles.payNowButtonText}>Pay Now</Text>
          <Ionicons name="arrow-forward" size={16} color={COLORS.white} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Payment Methods</Text>
        <TouchableOpacity>
          <Text style={styles.addNew}>Add New</Text>
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity style={styles.paymentMethodCard}>
        <View style={styles.paymentMethodIcon}>
          <Ionicons name="card-outline" size={24} color={COLORS.primary} />
        </View>
        <View style={styles.paymentMethodDetails}>
          <Text style={styles.paymentMethodTitle}>Credit Card</Text>
          <Text style={styles.paymentMethodText}>**** **** **** 4218</Text>
          <Text style={styles.paymentMethodExpiry}>Expires 09/2027</Text>
        </View>
        <TouchableOpacity style={styles.defaultBadge}>
          <Text style={styles.defaultText}>Default</Text>
        </TouchableOpacity>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.paymentMethodCard}>
        <View style={[styles.paymentMethodIcon, { backgroundColor: `${COLORS.info}15` }]}>
          <Ionicons name="cash-outline" size={24} color={COLORS.info} />
        </View>
        <View style={styles.paymentMethodDetails}>
          <Text style={styles.paymentMethodTitle}>Bank Account</Text>
          <Text style={styles.paymentMethodText}>**** 7890</Text>
          <Text style={styles.paymentMethodExpiry}>Checking Account</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="ellipsis-vertical" size={20} color={COLORS.textLight} />
        </TouchableOpacity>
      </TouchableOpacity>
      
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Billing Breakdown</Text>
      </View>
      
      <View style={styles.billingCard}>
        {billingItems.map((item, index) => (
          <View key={item.id} style={[
            styles.billingItem,
            index === billingItems.length - 1 && styles.lastBillingItem
          ]}>
            <View>
              <Text style={styles.billingItemTitle}>{item.title}</Text>
              <Text style={styles.billingItemDescription}>{item.description}</Text>
            </View>
            <Text style={styles.billingItemAmount}>${item.amount.toFixed(2)}</Text>
          </View>
        ))}
        
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalAmount}>${balance.current.toFixed(2)}</Text>
        </View>
      </View>
      
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Recent Transactions</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>
      
      {recentTransactions.map((transaction) => (
        <TouchableOpacity key={transaction.id} style={styles.transactionCard}>
          <View style={[
            styles.transactionIconContainer,
            { 
              backgroundColor: transaction.type === 'payment' 
                ? `${COLORS.success}15` 
                : `${COLORS.error}15` 
            }
          ]}>
            <Ionicons 
              name={transaction.type === 'payment' ? 'arrow-down-outline' : 'arrow-up-outline'} 
              size={20} 
              color={transaction.type === 'payment' ? COLORS.success : COLORS.error} 
            />
          </View>
          
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionTitle}>{transaction.title}</Text>
            <Text style={styles.transactionDate}>{transaction.date}</Text>
            
            {transaction.status === 'waived' && (
              <View style={styles.waived}>
                <Text style={styles.waivedText}>Waived</Text>
              </View>
            )}
          </View>
          
          <Text style={[
            styles.transactionAmount,
            transaction.type === 'payment' 
              ? styles.paymentAmount 
              : styles.chargeAmount,
            transaction.status === 'waived' && styles.waivedAmount
          ]}>
            {transaction.type === 'payment' ? '-' : '+'} 
            ${transaction.amount.toFixed(2)}
          </Text>
        </TouchableOpacity>
      ))}
      
      <View style={styles.buttonSection}>
        <TouchableOpacity style={styles.secondaryButton}>
          <Ionicons name="document-text-outline" size={20} color={COLORS.primary} />
          <Text style={styles.secondaryButtonText}>View Statements</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.secondaryButton}>
          <Ionicons name="settings-outline" size={20} color={COLORS.primary} />
          <Text style={styles.secondaryButtonText}>Payment Settings</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  balanceCard: {
    backgroundColor: COLORS.white,
    marginHorizontal: SIZES.padding,
    marginVertical: SIZES.padding,
    borderRadius: SIZES.radius,
    padding: SIZES.padding,
    ...SHADOWS.medium,
  },
  balanceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SIZES.xs,
  },
  balanceTitle: {
    ...FONTS.body3,
    color: COLORS.textMedium,
  },
  historyButton: {
    paddingVertical: SIZES.xs,
    paddingHorizontal: SIZES.sm,
  },
  historyButtonText: {
    ...FONTS.body4,
    color: COLORS.primary,
  },
  balanceAmount: {
    ...FONTS.largeTitle,
    color: COLORS.textDark,
    marginBottom: SIZES.xs,
  },
  pastDueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SIZES.xs,
  },
  pastDueText: {
    ...FONTS.body4,
    color: COLORS.error,
    marginLeft: SIZES.xs,
  },
  goodStandingText: {
    ...FONTS.body4,
    color: COLORS.success,
    marginBottom: SIZES.xs,
  },
  dueDateText: {
    ...FONTS.body4,
    color: COLORS.textMedium,
    marginBottom: SIZES.padding,
  },
  payNowButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.radius,
    padding: SIZES.sm,
  },
  payNowButtonText: {
    ...FONTS.button,
    color: COLORS.white,
    marginRight: SIZES.xs,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
    marginTop: SIZES.lg,
    marginBottom: SIZES.md,
  },
  sectionTitle: {
    ...FONTS.h3,
    color: COLORS.textDark,
  },
  addNew: {
    ...FONTS.body3,
    color: COLORS.primary,
  },
  viewAll: {
    ...FONTS.body3,
    color: COLORS.primary,
  },
  paymentMethodCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    marginHorizontal: SIZES.padding,
    marginBottom: SIZES.md,
    borderRadius: SIZES.radius,
    padding: SIZES.padding,
    ...SHADOWS.small,
  },
  paymentMethodIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: `${COLORS.primary}15`,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SIZES.md,
  },
  paymentMethodDetails: {
    flex: 1,
  },
  paymentMethodTitle: {
    ...FONTS.h4,
    color: COLORS.textDark,
  },
  paymentMethodText: {
    ...FONTS.body3,
    color: COLORS.textMedium,
  },
  paymentMethodExpiry: {
    ...FONTS.caption,
    color: COLORS.textLight,
  },
  defaultBadge: {
    backgroundColor: COLORS.primaryLight,
    paddingVertical: SIZES.xs,
    paddingHorizontal: SIZES.sm,
    borderRadius: SIZES.radius / 2,
  },
  defaultText: {
    ...FONTS.caption,
    color: COLORS.primary,
    fontWeight: '600',
  },
  billingCard: {
    backgroundColor: COLORS.white,
    marginHorizontal: SIZES.padding,
    borderRadius: SIZES.radius,
    overflow: 'hidden',
    ...SHADOWS.small,
  },
  billingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: SIZES.padding,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderLight,
  },
  lastBillingItem: {
    borderBottomWidth: 0,
  },
  billingItemTitle: {
    ...FONTS.h4,
    color: COLORS.textDark,
  },
  billingItemDescription: {
    ...FONTS.body4,
    color: COLORS.textLight,
  },
  billingItemAmount: {
    ...FONTS.h4,
    color: COLORS.textDark,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.backgroundLight,
    padding: SIZES.padding,
  },
  totalLabel: {
    ...FONTS.h3,
    color: COLORS.textDark,
  },
  totalAmount: {
    ...FONTS.h2,
    color: COLORS.primary,
  },
  transactionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    marginHorizontal: SIZES.padding,
    marginBottom: SIZES.md,
    borderRadius: SIZES.radius,
    padding: SIZES.padding,
    ...SHADOWS.small,
  },
  transactionIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SIZES.md,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionTitle: {
    ...FONTS.h4,
    color: COLORS.textDark,
  },
  transactionDate: {
    ...FONTS.body4,
    color: COLORS.textLight,
  },
  waived: {
    backgroundColor: COLORS.backgroundLight,
    paddingVertical: 2,
    paddingHorizontal: SIZES.xs,
    borderRadius: SIZES.radius / 2,
    alignSelf: 'flex-start',
    marginTop: 2,
  },
  waivedText: {
    ...FONTS.caption,
    fontSize: 10,
    color: COLORS.textMedium,
  },
  transactionAmount: {
    ...FONTS.h3,
  },
  paymentAmount: {
    color: COLORS.textDark,
  },
  chargeAmount: {
    color: COLORS.error,
  },
  waivedAmount: {
    textDecorationLine: 'line-through',
    color: COLORS.textLight,
  },
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: SIZES.padding,
    marginVertical: SIZES.padding,
  },
  secondaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    borderWidth: 1,
    borderColor: COLORS.primary,
    padding: SIZES.sm,
    flex: 1,
    marginHorizontal: SIZES.xs,
    ...SHADOWS.small,
  },
  secondaryButtonText: {
    ...FONTS.button,
    color: COLORS.primary,
    marginLeft: SIZES.xs,
  },
});

export default AccountsScreen;