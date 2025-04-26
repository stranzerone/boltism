import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { colors } from '@/constants/theme';
import { Search, ChevronRight, Star } from 'lucide-react-native';

export default function ServicesScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar style="dark" />
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Services</Text>
        <TouchableOpacity style={styles.searchButton}>
          <Search size={24} color={colors.textPrimary} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.servicesCategories}>
        <ServiceCategory 
  title="Home Services" 
  icon={require('../../assets/images/services/ab.png')} 
/>

{/* Repairs service - make sure repair.png is a valid image */}
<ServiceCategory 
  title="Repairs" 
  icon={require('../../assets/images/services/ab.png')} 
/>

<ServiceCategory 
  title="Cleaning" 
  icon={require('../../assets/images/services/ab.png')} 
/>

<ServiceCategory 
  title="Utilities" 
  icon={require('../../assets/images/services/ab.png')} 
/>


        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured Services</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <FeaturedServiceCard 
              title="AC Repair & Service"
              image="https://images.pexels.com/photos/4108659/pexels-photo-4108659.jpeg?auto=compress&cs=tinysrgb&w=600"
              rating={4.8}
              reviews={124}
              price="Starting at ₹499"
            />
            <FeaturedServiceCard 
              title="Plumbing Services"
              image="https://images.pexels.com/photos/8486972/pexels-photo-8486972.jpeg?auto=compress&cs=tinysrgb&w=600"
              rating={4.6}
              reviews={89}
              price="Starting at ₹299"
            />
          </ScrollView>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Bookings</Text>
          </View>

          <RecentBookingCard 
            title="AC Service"
            date="15 June, 09:30 AM"
            status="Completed"
            isCancelled={false}
            technician="Rahul Kumar"
            price="₹599"
          />
          
          <RecentBookingCard 
            title="Plumbing Repair"
            date="10 June, 11:00 AM"
            status="Cancelled"
            technician="Amit Sharma"
            price="₹349"
            isCancelled
          />
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Special Offers</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.offerCard}>
            <Image 
              source={{ uri: 'https://images.pexels.com/photos/3960076/pexels-photo-3960076.jpeg?auto=compress&cs=tinysrgb&w=600' }} 
              style={styles.offerImage} 
            />
            <View style={styles.offerContent}>
              <View style={styles.offerBadge}>
                <Text style={styles.offerBadgeText}>30% OFF</Text>
              </View>
              <Text style={styles.offerTitle}>Summer Special</Text>
              <Text style={styles.offerSubtitle}>AC Service & Maintenance</Text>
              <TouchableOpacity style={styles.offerButton}>
                <Text style={styles.offerButtonText}>Book Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function ServiceCategory({ title, icon }: { title: string; icon: any }) {
  return (
    <TouchableOpacity style={styles.categoryCard}>
      <Image source={icon} style={styles.categoryIcon} />
      <Text style={styles.categoryTitle}>{title}</Text>
    </TouchableOpacity>
  );
}

function FeaturedServiceCard({ title, image, rating, reviews, price }: { title: string; image: string; rating: number; reviews: number; price: string }) {
  return (
    <TouchableOpacity style={styles.featuredCard}>
      <Image source={{ uri: image }} style={styles.featuredImage} />
      <View style={styles.featuredContent}>
        <Text style={styles.featuredTitle}>{title}</Text>
        <View style={styles.ratingContainer}>
          <Star size={14} color={colors.amber} fill={colors.amber} />
          <Text style={styles.ratingText}>{rating}</Text>
          <Text style={styles.reviewsText}>({reviews} reviews)</Text>
        </View>
        <Text style={styles.priceText}>{price}</Text>
      </View>
    </TouchableOpacity>
  );
}

interface RecentBookingCardProps {
  title: string;
  date: string;
  status: string;
  technician: string;
  price: string;
  isCancelled: boolean;
}

function RecentBookingCard({ title, date, status, technician, price, isCancelled }: RecentBookingCardProps) {
  return (
    <TouchableOpacity style={styles.bookingCard}>
      <View style={styles.bookingHeader}>
        <Text style={styles.bookingTitle}>{title}</Text>
        <Text 
          style={[
            styles.bookingStatus, 
            isCancelled ? styles.cancelledStatus : styles.completedStatus
          ]}
        >
          {status}
        </Text>
      </View>
      <Text style={styles.bookingDate}>{date}</Text>
      <View style={styles.bookingDetails}>
        <View style={styles.bookingInfo}>
          <Text style={styles.bookingLabel}>Technician:</Text>
          <Text style={styles.bookingValue}>{technician}</Text>
        </View>
        <View style={styles.bookingInfo}>
          <Text style={styles.bookingLabel}>Amount:</Text>
          <Text style={styles.bookingValue}>{price}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.bookingCta}>
        <Text style={styles.bookingCtaText}>
          {isCancelled ? 'Book Again' : 'View Details'}
        </Text>
        <ChevronRight size={16} color={colors.primary} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.white,
  },
  headerTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: colors.textPrimary,
  },
  searchButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.backgroundLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  servicesCategories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: colors.white,
  },
  categoryCard: {
    width: '48%',
    height: 100,
    backgroundColor: colors.backgroundLight,
    borderRadius: 12,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  categoryIcon: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  categoryTitle: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: colors.textPrimary,
    textAlign: 'center',
  },
  section: {
    marginTop: 16,
    backgroundColor: colors.white,
    paddingVertical: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  sectionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: colors.textPrimary,
  },
  viewAllText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: colors.primary,
  },
  featuredCard: {
    width: 280,
    borderRadius: 12,
    backgroundColor: colors.white,
    marginLeft: 16,
    marginRight: 8,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    overflow: 'hidden',
  },
  featuredImage: {
    width: '100%',
    height: 150,
  },
  featuredContent: {
    padding: 12,
  },
  featuredTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 15,
    color: colors.textPrimary,
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  ratingText: {
    fontFamily: 'Inter-Medium',
    fontSize: 13,
    color: colors.textPrimary,
    marginLeft: 4,
    marginRight: 3,
  },
  reviewsText: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    color: colors.textTertiary,
  },
  priceText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: colors.primary,
  },
  bookingCard: {
    marginHorizontal: 16,
    marginBottom: 12,
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  bookingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  bookingTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: colors.textPrimary,
  },
  bookingStatus: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  completedStatus: {
    backgroundColor: colors.successLight,
    color: colors.success,
  },
  cancelledStatus: {
    backgroundColor: colors.errorLight,
    color: colors.error,
  },
  bookingDate: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    color: colors.textSecondary,
    marginBottom: 12,
  },
  bookingDetails: {
    marginBottom: 12,
  },
  bookingInfo: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  bookingLabel: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: colors.textSecondary,
    width: 100,
  },
  bookingValue: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: colors.textPrimary,
    flex: 1,
  },
  bookingCta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  bookingCtaText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: colors.primary,
    marginRight: 4,
  },
  offerCard: {
    marginHorizontal: 16,
    borderRadius: 12,
    overflow: 'hidden',
    height: 160,
  },
  offerImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  offerContent: {
    flex: 1,
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  offerBadge: {
    backgroundColor: colors.error,
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginBottom: 12,
  },
  offerBadgeText: {
    fontFamily: 'Inter-Bold',
    fontSize: 12,
    color: colors.white,
  },
  offerTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: colors.white,
    marginBottom: 4,
  },
  offerSubtitle: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: colors.white,
    marginBottom: 16,
  },
  offerButton: {
    backgroundColor: colors.white,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  offerButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: colors.primary,
  },
});