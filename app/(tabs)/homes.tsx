import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { colors } from '@/constants/theme';
import { Search, Filter, MapPin, Bed, Bath, Square, Star } from 'lucide-react-native';

const DUMMY_PROPERTIES = [
  {
    id: '1',
    name: 'Serene Heights Apartment',
    location: 'Park Avenue, Block C',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: '₹25,000',
    type: 'Rent',
    bedrooms: 2,
    bathrooms: 2,
    area: '1200 sq ft',
    rating: 4.8,
  },
  {
    id: '2',
    name: 'Garden View Villa',
    location: 'Lakeview Road, Block A',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: '₹1.5 Cr',
    type: 'Sale',
    bedrooms: 3,
    bathrooms: 3,
    area: '2200 sq ft',
    rating: 4.6,
  },
  {
    id: '3',
    name: 'Sunset Terrace Flat',
    location: 'Hillside Drive, Block B',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: '₹30,000',
    type: 'Rent',
    bedrooms: 3,
    bathrooms: 2,
    area: '1500 sq ft',
    rating: 4.5,
  },
];

export default function HomesScreen() {
  const renderProperty = ({ item }) => (
    <TouchableOpacity style={styles.propertyCard}>
      <Image source={{ uri: item.image }} style={styles.propertyImage} />
      <View style={styles.propertyTypeTag}>
        <Text style={styles.propertyTypeText}>{item.type}</Text>
      </View>
      
      <View style={styles.propertyContent}>
        <View style={styles.propertyHeader}>
          <Text style={styles.propertyName}>{item.name}</Text>
          <View style={styles.ratingContainer}>
            <Star size={16} color={colors.amber} fill={colors.amber} />
            <Text style={styles.ratingText}>{item.rating}</Text>
          </View>
        </View>
        
        <View style={styles.locationContainer}>
          <MapPin size={16} color={colors.textSecondary} />
          <Text style={styles.locationText}>{item.location}</Text>
        </View>
        
        <View style={styles.propertyDetails}>
          <View style={styles.propertyFeature}>
            <Bed size={16} color={colors.textSecondary} />
            <Text style={styles.featureText}>{item.bedrooms} Beds</Text>
          </View>
          
          <View style={styles.propertyFeature}>
            <Bath size={16} color={colors.textSecondary} />
            <Text style={styles.featureText}>{item.bathrooms} Baths</Text>
          </View>
          
          <View style={styles.propertyFeature}>
            <Square size={16} color={colors.textSecondary} />
            <Text style={styles.featureText}>{item.area}</Text>
          </View>
        </View>
        
        <View style={styles.propertyFooter}>
          <Text style={styles.propertyPrice}>{item.price}</Text>
          <TouchableOpacity style={styles.viewDetailsButton}>
            <Text style={styles.viewDetailsText}>View Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar style="dark" />
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Find Homes</Text>
        <TouchableOpacity style={styles.searchButton}>
          <Search size={24} color={colors.textPrimary} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.filterContainer}>
        <View style={styles.searchBar}>
          <Search size={20} color={colors.textSecondary} />
          <Text style={styles.searchPlaceholder}>Search by location, building...</Text>
        </View>
        
        <TouchableOpacity style={styles.filterButton}>
          <Filter size={20} color={colors.primary} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.categoryTabs}>
        <TouchableOpacity style={[styles.categoryTab, styles.activeTab]}>
          <Text style={[styles.categoryText, styles.activeCategoryText]}>All</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.categoryTab}>
          <Text style={styles.categoryText}>For Rent</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.categoryTab}>
          <Text style={styles.categoryText}>For Sale</Text>
        </TouchableOpacity>
      </View>
      
      <FlatList
        data={DUMMY_PROPERTIES}
        renderItem={renderProperty}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.propertiesList}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
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
  filterContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.backgroundLight,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    marginRight: 12,
  },
  searchPlaceholder: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: colors.textTertiary,
    marginLeft: 8,
  },
  filterButton: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryTabs: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.white,
  },
  categoryTab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 12,
    borderRadius: 20,
    backgroundColor: colors.backgroundLight,
  },
  activeTab: {
    backgroundColor: colors.primary,
  },
  categoryText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: colors.textPrimary,
  },
  activeCategoryText: {
    color: colors.white,
  },
  propertiesList: {
    padding: 16,
  },
  propertyCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    overflow: 'hidden',
  },
  propertyImage: {
    width: '100%',
    height: 180,
  },
  propertyTypeTag: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4,
  },
  propertyTypeText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: colors.white,
  },
  propertyContent: {
    padding: 16,
  },
  propertyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  propertyName: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: colors.textPrimary,
    flex: 1,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.backgroundLight,
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 4,
  },
  ratingText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: colors.textPrimary,
    marginLeft: 3,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  locationText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: colors.textSecondary,
    marginLeft: 4,
  },
  propertyDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    marginBottom: 12,
  },
  propertyFeature: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  featureText: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    color: colors.textSecondary,
    marginLeft: 4,
  },
  propertyFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  propertyPrice: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: colors.primary,
  },
  viewDetailsButton: {
    backgroundColor: colors.primaryLight,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
  },
  viewDetailsText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: colors.primary,
  },
});