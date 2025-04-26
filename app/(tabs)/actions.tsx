import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { colors } from '@/constants/theme';
import { Chrome as Home, UserPlus, Receipt, Plus, FileText, MessagesSquare, Bell, Wrench, Car, Calendar } from 'lucide-react-native';

export default function QuickActionsScreen() {
  const actionButtons = [
    {
      id: 'visitor',
      title: 'Add Visitor',
      icon: <UserPlus size={24} color={colors.white} />,
      bgColor: colors.primary,
    },
    {
      id: 'payment',
      title: 'Make Payment',
      icon: <Receipt size={24} color={colors.white} />,
      bgColor: colors.success,
    },
    {
      id: 'complaint',
      title: 'Raise Complaint',
      icon: <FileText size={24} color={colors.white} />,
      bgColor: colors.error,
    },
    {
      id: 'forum',
      title: 'Post on Forum',
      icon: <MessagesSquare size={24} color={colors.white} />,
      bgColor: colors.amber,
    }
  ];

  const quickServices = [
    {
      id: 'maintenance',
      title: 'Maintenance Request',
      icon: <Wrench size={20} color={colors.primary} />,
    },
    {
      id: 'parking',
      title: 'Parking Pass',
      icon: <Car size={20} color={colors.primary} />,
    },
    {
      id: 'booking',
      title: 'Amenity Booking',
      icon: <Calendar size={20} color={colors.primary} />,
    },
    {
      id: 'announcement',
      title: 'Make Announcement',
      icon: <Bell size={20} color={colors.primary} />,
    },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar style="dark" />
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Quick Actions</Text>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>What would you like to do?</Text>
          
          <View style={styles.actionsGrid}>
            {actionButtons.map((action) => (
              <TouchableOpacity 
                key={action.id} 
                style={[styles.actionButton, { backgroundColor: action.bgColor }]}
              >
                <View style={styles.actionIconContainer}>{action.icon}</View>
                <Text style={styles.actionButtonText}>{action.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Common Services</Text>
          
          <View style={styles.servicesList}>
            {quickServices.map((service) => (
              <TouchableOpacity key={service.id} style={styles.serviceItem}>
                <View style={styles.serviceIconContainer}>{service.icon}</View>
                <Text style={styles.serviceTitle}>{service.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Create Custom Action</Text>
          
          <TouchableOpacity style={styles.customActionButton}>
            <Plus size={24} color={colors.primary} />
            <Text style={styles.customActionText}>Create New Action</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Actions</Text>
          
          <View style={styles.recentContainer}>
            <RecentActionCard 
              title="Visitor Pass"
              subtitle="Created 2 days ago"
              status="Active"
              icon={<UserPlus size={20} color={colors.white} />}
              backgroundColor={colors.primary}
            />
            
            <RecentActionCard 
              title="Maintenance Request"
              subtitle="Created 1 week ago"
              status="Resolved"
              icon={<Wrench size={20} color={colors.white} />}
              backgroundColor={colors.success}
            />
            
            <RecentActionCard 
              title="Bill Payment"
              subtitle="Paid on June 5"
              status="Completed"
              icon={<Receipt size={20} color={colors.white} />}
              backgroundColor={colors.amber}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function RecentActionCard({ title, subtitle, status, icon, backgroundColor }) {
  return (
    <TouchableOpacity style={styles.recentCard}>
      <View style={[styles.recentIconContainer, { backgroundColor }]}>
        {icon}
      </View>
      <View style={styles.recentContent}>
        <Text style={styles.recentTitle}>{title}</Text>
        <Text style={styles.recentSubtitle}>{subtitle}</Text>
      </View>
      <View style={styles.statusContainer}>
        <Text style={styles.statusText}>{status}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  headerTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: colors.textPrimary,
  },
  scrollView: {
    flex: 1,
  },
  section: {
    backgroundColor: colors.white,
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 12,
    padding: 16,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: colors.textPrimary,
    marginBottom: 16,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionButton: {
    width: '48%',
    height: 120,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  actionButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 15,
    color: colors.white,
    textAlign: 'center',
  },
  servicesList: {
    borderRadius: 12,
    backgroundColor: colors.backgroundLight,
    overflow: 'hidden',
  },
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  serviceIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  serviceTitle: {
    fontFamily: 'Inter-Medium',
    fontSize: 15,
    color: colors.textPrimary,
  },
  customActionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    backgroundColor: colors.primaryLight,
    borderRadius: 12,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.primary,
  },
  customActionText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 15,
    color: colors.primary,
    marginLeft: 8,
  },
  recentContainer: {
    backgroundColor: colors.backgroundLight,
    borderRadius: 12,
    overflow: 'hidden',
  },
  recentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  recentIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  recentContent: {
    flex: 1,
  },
  recentTitle: {
    fontFamily: 'Inter-Medium',
    fontSize: 15,
    color: colors.textPrimary,
  },
  recentSubtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    color: colors.textTertiary,
  },
  statusContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: colors.backgroundLight,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.border,
  },
  statusText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: colors.textSecondary,
  },
});