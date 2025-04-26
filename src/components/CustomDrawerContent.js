import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useAppContext } from '../context/AppContext';

const CustomDrawerContent = (props) => {
  const { user } = useAppContext();

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <View style={styles.logoContainer}>
          <Image 
            source={{ uri: 'https://img.icons8.com/fluency/96/000000/settings.png' }} 
            style={styles.logo} 
          />
          <Text style={styles.appName}>FacTech QA</Text>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Factech</Text>
        </View>
      </View>
      <View style={styles.drawerContent}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerHeader: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: '#1E88E5',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  logo: {
    width: 40,
    height: 40,
    tintColor: 'white',
  },
  appName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 12,
  },
  userInfo: {
    marginTop: 8,
  },
  userName: {
    fontSize: 16,
    color: 'white',
  },
  userEmail: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  drawerContent: {
    flex: 1,
    paddingTop: 10,
  },
});

export default CustomDrawerContent;