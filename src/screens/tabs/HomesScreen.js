import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const complexes = [
  {
    id: '1',
    name: 'The Palms',
    location: 'Whitefield, Bangalore',
    image: 'https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    rating: 4.8,
    reviews: 245,
    type: 'Premium',
    amenities: ['Swimming Pool', 'Gymnasium', 'Club House', 'Children\'s Play Area'],
  },
  {
    id: '2',
    name: 'Green Meadows',
    location: 'Electronic City, Bangalore',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    rating: 4.6,
    reviews: 189,
    type: 'Luxury',
    amenities: ['Tennis Court', 'Yoga Center', 'Spa', 'Jogging Track'],
  },
  {
    id: '3',
    name: 'Urban Heights',
    location: 'Koramangala, Bangalore',
    image: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    rating: 4.5,
    reviews: 156,
    type: 'Standard',
    amenities: ['Gymnasium', 'Garden', 'Security', 'Parking'],
  },
];

const HomesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Explore Properties</Text>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="filter-outline" size={24} color="#1E88E5" />
        </TouchableOpacity>
      </View>
      
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#9E9E9E" style={styles.searchIcon} />
          <Text style={styles.searchPlaceholder}>Search by location, property name</Text>
        </View>
        
        <View style={styles.categoriesContainer}>
          <TouchableOpacity style={[styles.categoryButton, styles.activeCategoryButton]}>
            <Text style={[styles.categoryText, styles.activeCategoryText]}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Premium</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Luxury</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Standard</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.complexListContainer}>
          {complexes.map((complex) => (
            <TouchableOpacity key={complex.id} style={styles.complexCard}>
              <Image source={{ uri: complex.image }} style={styles.complexImage} />
              <View style={styles.complexTypeContainer}>
                <Text style={styles.complexType}>{complex.type}</Text>
              </View>
              <View style={styles.complexDetails}>
                <View style={styles.complexHeader}>
                  <Text style={styles.complexName}>{complex.name}</Text>
                  <View style={styles.ratingContainer}>
                    <Ionicons name="star" size={16} color="#FFC107" />
                    <Text style={styles.ratingText}>{complex.rating}</Text>
                  </View>
                </View>
                <View style={styles.locationContainer}>
                  <Ionicons name="location-outline" size={16} color="#757575" />
                  <Text style={styles.locationText}>{complex.location}</Text>
                </View>
                <Text style={styles.reviewsText}>{complex.reviews} reviews</Text>
                <View style={styles.amenitiesContainer}>
                  {complex.amenities.map((amenity, index) => (
                    <View key={index} style={styles.amenityTag}>
                      <Text style={styles.amenityText}>{amenity}</Text>
                    </View>
                  ))}
                </View>
                <TouchableOpacity style={styles.viewButton}>
                  <Text style={styles.viewButtonText}>View Details</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </View>
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
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  filterButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginVertical: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },
  searchIcon: {
    marginRight: 12,
  },
  searchPlaceholder: {
    fontSize: 16,
    color: '#9E9E9E',
  },
  categoriesContainer: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginHorizontal: 4,
    backgroundColor: 'white',
  },
  activeCategoryButton: {
    backgroundColor: '#1E88E5',
  },
  categoryText: {
    fontSize: 14,
    color: '#424242',
  },
  activeCategoryText: {
    color: 'white',
    fontWeight: '500',
  },
  complexListContainer: {
    paddingHorizontal: 16,
    paddingBottom: 100,
  },
  complexCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  complexImage: {
    width: '100%',
    height: 180,
  },
  complexTypeContainer: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
  },
  complexType: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
  complexDetails: {
    padding: 16,
  },
  complexHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  complexName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF8E1',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 4,
    color: '#FFA000',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  locationText: {
    fontSize: 14,
    color: '#757575',
    marginLeft: 4,
  },
  reviewsText: {
    fontSize: 12,
    color: '#9E9E9E',
    marginBottom: 12,
  },
  amenitiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  amenityTag: {
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 8,
    marginBottom: 8,
  },
  amenityText: {
    fontSize: 12,
    color: '#1E88E5',
  },
  viewButton: {
    backgroundColor: '#1E88E5',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  viewButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default HomesScreen;