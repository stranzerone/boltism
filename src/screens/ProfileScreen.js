import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useAppContext } from '../context/AppContext';

const ProfileScreen = () => {
  const { user } = useAppContext();
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.profileImageContainer}>
            <View style={styles.profileImage}>
              <Text style={styles.profileInitial}>J</Text>
            </View>
            <TouchableOpacity style={styles.editButton}>
              <Ionicons name="pencil" size={16} color="white" />
            </TouchableOpacity>
          </View>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.unitInfo}>{user.complex}, {user.unit}</Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          <View style={styles.infoItem}>
            <Ionicons name="mail-outline" size={20} color="#1E88E5" style={styles.infoIcon} />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Email</Text>
              <Text style={styles.infoValue}>johndoe@example.com</Text>
            </View>
            <TouchableOpacity>
              <Ionicons name="chevron-forward" size={20} color="#BDBDBD" />
            </TouchableOpacity>
          </View>
          
          <View style={styles.infoItem}>
            <Ionicons name="call-outline" size={20} color="#1E88E5" style={styles.infoIcon} />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Phone</Text>
              <Text style={styles.infoValue}>+91 98765 43210</Text>
            </View>
            <TouchableOpacity>
              <Ionicons name="chevron-forward" size={20} color="#BDBDBD" />
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          <View style={styles.infoItem}>
            <Ionicons name="notifications-outline" size={20} color="#1E88E5" style={styles.infoIcon} />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Notifications</Text>
              <Text style={styles.infoValue}>On</Text>
            </View>
            <TouchableOpacity>
              <Ionicons name="chevron-forward" size={20} color="#BDBDBD" />
            </TouchableOpacity>
          </View>
          
          <View style={styles.infoItem}>
            <Ionicons name="language-outline" size={20} color="#1E88E5" style={styles.infoIcon} />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Language</Text>
              <Text style={styles.infoValue}>English</Text>
            </View>
            <TouchableOpacity>
              <Ionicons name="chevron-forward" size={20} color="#BDBDBD" />
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          <View style={styles.infoItem}>
            <Ionicons name="shield-checkmark-outline" size={20} color="#1E88E5" style={styles.infoIcon} />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Privacy</Text>
              <Text style={styles.infoValue}>Manage your data</Text>
            </View>
            <TouchableOpacity>
              <Ionicons name="chevron-forward" size={20} color="#BDBDBD" />
            </TouchableOpacity>
          </View>
          
          <View style={styles.infoItem}>
            <Ionicons name="help-circle-outline" size={20} color="#1E88E5" style={styles.infoIcon} />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Help & Support</Text>
              <Text style={styles.infoValue}>Contact us, FAQs</Text>
            </View>
            <TouchableOpacity>
              <Ionicons name="chevron-forward" size={20} color="#BDBDBD" />
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity style={styles.logoutButton}>
            <Ionicons name="log-out-outline" size={20} color="#F44336" />
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
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
    backgroundColor: 'white',
    paddingVertical: 24,
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImageContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#1E88E5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInitial: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  editButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#4CAF50',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  unitInfo: {
    fontSize: 14,
    color: '#757575',
  },
  section: {
    backgroundColor: 'white',
    marginBottom: 16,
    paddingVertical: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  infoItem: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
  },
  infoIcon: {
    marginRight: 16,
  },
  infoContent: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 14,
    color: '#424242',
  },
  infoValue: {
    fontSize: 14,
    color: '#757575',
    marginTop: 2,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginTop: 8,
  },
  logoutText: {
    fontSize: 16,
    marginLeft: 16,
    color: '#F44336',
    fontWeight: '500',
  },
});

export default ProfileScreen;