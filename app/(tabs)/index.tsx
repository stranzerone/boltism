import { StyleSheet, Text, View, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { colors } from '@/constants/theme';
import HomeHeader from '@/components/home/HomeHeader';
import QuickAccessCard from '@/components/home/QuickAccessCard';
import ServiceCard from '@/components/home/ServiceCard';
import NotificationBanner from '@/components/home/NotificationBanner';
import { Bell, CreditCard, Building, Compass, Clock, UserCheck, Wrench, Refrigerator, Shield, Sofa } from 'lucide-react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar style="dark" />
      <HomeHeader />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.quickAccessContainer}>
          <QuickAccessCard 
            title="Gate Updates" 
            icon={<Bell color={colors.primary} size={24} />} 
            onPress={() => {}} 
          />
          <QuickAccessCard 
            title="My Bills" 
            icon={<CreditCard color={colors.primary} size={24} />} 
            onPress={() => {}} 
          />
          <QuickAccessCard 
            title="My Society" 
            icon={<Building color={colors.primary} size={24} />} 
            onPress={() => {}} 
            badge={1}
          />
          <QuickAccessCard 
            title="Explore" 
            icon={<Compass color={colors.primary} size={24} />} 
            onPress={() => {}} 
          />
        </View>

        <View style={styles.visitorsCard}>
          <Text style={styles.sectionTitle}>Your visitors</Text>
          <View style={styles.visitorsActions}>
            <TouchableOpacity style={styles.visitorAction}>
              <View style={styles.iconContainer}>
                <Clock color={colors.amber} size={24} />
                <View style={styles.plusBadge}>
                  <Text style={styles.plusText}>+</Text>
                </View>
              </View>
              <Text style={styles.actionText}>Daily Help</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.visitorAction}>
              <View style={styles.iconContainer}>
                <UserCheck color={colors.amber} size={24} />
              </View>
              <Text style={styles.actionText}>Pre Approve</Text>
            </TouchableOpacity>
          </View>
        </View>

        <NotificationBanner 
          title="COMMUNITY HEALTH NEWS"
          subtitle="Know More"
          onPress={() => {}}
        />

        <View style={styles.servicesSection}>
          <Text style={styles.sectionTitle}>Services you need</Text>
          <View style={styles.servicesGrid}>
            <ServiceCard 
              title="AC Service & Repair"
              icon={<Refrigerator color={colors.primary} size={24} />}
              onPress={() => {}}
            />
            <ServiceCard 
              title="Pre Approval"
              icon={<Shield color={colors.primary} size={24} />}
              onPress={() => {}}
            />
            <ServiceCard 
              title="Help Desk"
              icon={<Wrench color={colors.primary} size={24} />}
              onPress={() => {}}
            />
            <ServiceCard 
              title="Amenities"
              icon={<Sofa color={colors.primary} size={24} />}
              onPress={() => {}}
            />
          </View>
        </View>

        <View style={styles.discoverySection}>
          <Text style={styles.sectionTitle}>Discover more</Text>
          <View style={styles.promoCard}>
            <ImageBackground
              source={{ uri: "https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg" }}
              style={styles.promoBackground}
              imageStyle={styles.promoBackgroundImage}
            >
              <View style={styles.promoContent}>
                <Text style={styles.promoTitle}>Super Value DAYS</Text>
                <Text style={styles.promoSubtitle}>Every Fri-Sun</Text>
                <TouchableOpacity style={styles.shopButton}>
                  <Text style={styles.shopButtonText}>SHOP NOW</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.promoCashback}>
                <Text style={styles.cashbackLabel}>Flat</Text>
                <Text style={styles.cashbackAmount}>300</Text>
                <Text style={styles.cashbackText}>Cashback*</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.paginationDots}>
            {[0, 1, 2, 3, 4, 5].map((dot, index) => (
              <View 
                key={index} 
                style={[styles.paginationDot, index === 0 && styles.activeDot]} 
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
  },
  scrollView: {
    flex: 1,
  },
  quickAccessContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: colors.white,
    borderRadius: 12,
    marginHorizontal: 16,
    marginTop: 16,
  },
  visitorsCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    marginHorizontal: 16,
    marginTop: 16,
    padding: 16,
  },
  sectionTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: colors.textPrimary,
    marginBottom: 12,
  },
  visitorsActions: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  visitorAction: {
    alignItems: 'center',
    marginRight: 40,
  },
  iconContainer: {
    position: 'relative',
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.backgroundLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  plusBadge: {
    position: 'absolute',
    bottom: -5,
    right: -5,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: colors.error,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusText: {
    color: colors.white,
    fontSize: 14,
    fontFamily: 'Inter-Bold',
  },
  actionText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: colors.textPrimary,
  },
  servicesSection: {
    backgroundColor: colors.white,
    borderRadius: 12,
    marginHorizontal: 16,
    marginTop: 16,
    padding: 16,
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  discoverySection: {
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 24,
  },
  promoCard: {
    height: 180,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 12,
  },
  promoBackground: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  promoBackgroundImage: {
    borderRadius: 12,
  },
  promoContent: {
    flex: 1,
    justifyContent: 'center',
  },
  promoTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: colors.white,
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    alignSelf: 'flex-start',
    marginBottom: 4,
  },
  promoSubtitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: colors.white,
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  shopButton: {
    backgroundColor: colors.amber,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  shopButtonText: {
    fontFamily: 'Inter-Bold',
    fontSize: 12,
    color: colors.textPrimary,
  },
  promoCashback: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cashbackLabel: {
    fontFamily: 'Inter-Bold',
    fontSize: 14,
    color: colors.white,
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  cashbackAmount: {
    fontFamily: 'Poppins-Bold',
    fontSize: 32,
    color: colors.white,
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 8,
  },
  cashbackText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: colors.white,
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  paginationDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.border,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: colors.primary,
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});