import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const services = [
  {
    id: '1',
    title: 'AC Service & Repair',
    icon: 'https://img.icons8.com/fluency/96/000000/air-conditioner.png',
    description: 'Professional AC maintenance and repair services',
  },
  {
    id: '2',
    title: 'Plumbing Services',
    icon: 'https://img.icons8.com/fluency/96/000000/plumbing.png',
    description: 'Fix leaks, clogs, and other plumbing issues',
  },
  {
    id: '3',
    title: 'Electrical Work',
    icon: 'https://img.icons8.com/fluency/96/000000/light-on.png',
    description: 'Electrical repairs and installations',
  },
  {
    id: '4',
    title: 'Housekeeping',
    icon: 'https://img.icons8.com/fluency/96/000000/broom.png',
    description: 'Professional home cleaning services',
  },
  {
    id: '5',
    title: 'Pest Control',
    icon: 'https://img.icons8.com/fluency/96/000000/pest-control.png',
    description: 'Effective pest management solutions',
  },
  {
    id: '6',
    title: 'Painting',
    icon: 'https://img.icons8.com/fluency/96/000000/paint-roller.png',
    description: 'Interior and exterior painting services',
  },
  {
    id: '7',
    title: 'Furniture Assembly',
    icon: 'https://img.icons8.com/fluency/96/000000/sofa.png',
    description: 'Expert furniture assembly and setup',
  },
  {
    id: '8',
    title: 'Laundry Service',
    icon: 'https://img.icons8.com/fluency/96/000000/washing-machine.png',
    description: 'Wash, dry, and fold laundry services',
  },
];

const ServicesScreen = ({ navigation }) => {
  const renderServiceItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.serviceCard}
      onPress={() => navigation.navigate('Service request')}
    >
      <Image source={{ uri: item.icon }} style={styles.serviceIcon} />
      <View style={styles.serviceInfo}>
        <Text style={styles.serviceTitle}>{item.title}</Text>
        <Text style={styles.serviceDescription}>{item.description}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#BDBDBD" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Services</Text>
        <TouchableOpacity style={styles.cartButton}>
          <Ionicons name="cart-outline" size={24} color="#1E88E5" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#9E9E9E" style={styles.searchIcon} />
        <Text style={styles.searchPlaceholder}>Search for services</Text>
      </View>
      
      <View style={styles.popularContainer}>
        <Text style={styles.sectionTitle}>Popular Services</Text>
        <View style={styles.popularServicesRow}>
          <TouchableOpacity style={styles.popularService}>
            <View style={[styles.popularServiceIcon, { backgroundColor: '#E3F2FD' }]}>
              <Ionicons name="snow-outline" size={24} color="#1E88E5" />
            </View>
            <Text style={styles.popularServiceTitle}>AC Repair</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.popularService}>
            <View style={[styles.popularServiceIcon, { backgroundColor: '#FFF8E1' }]}>
              <Ionicons name="water-outline" size={24} color="#FFA000" />
            </View>
            <Text style={styles.popularServiceTitle}>Plumbing</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.popularService}>
            <View style={[styles.popularServiceIcon, { backgroundColor: '#E8F5E9' }]}>
              <Ionicons name="brush-outline" size={24} color="#4CAF50" />
            </View>
            <Text style={styles.popularServiceTitle}>Painting</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.popularService}>
            <View style={[styles.popularServiceIcon, { backgroundColor: '#F3E5F5' }]}>
              <Ionicons name="flash-outline" size={24} color="#9C27B0" />
            </View>
            <Text style={styles.popularServiceTitle}>Electrical</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <Text style={[styles.sectionTitle, { marginHorizontal: 16, marginTop: 24 }]}>All Services</Text>
      
      <FlatList
        data={services}
        renderItem={renderServiceItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.servicesList}
        showsVerticalScrollIndicator={false}
      />
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
  cartButton: {
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
  popularContainer: {
    backgroundColor: 'white',
    paddingVertical: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    marginHorizontal: 16,
  },
  popularServicesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  popularService: {
    alignItems: 'center',
  },
  popularServiceIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  popularServiceTitle: {
    fontSize: 12,
  },
  servicesList: {
    padding: 16,
    paddingBottom: 100,
  },
  serviceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  serviceIcon: {
    width: 40,
    height: 40,
    marginRight: 16,
  },
  serviceInfo: {
    flex: 1,
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  serviceDescription: {
    fontSize: 12,
    color: '#757575',
  },
});

export default ServicesScreen;