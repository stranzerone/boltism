import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const QuickAccessCard = ({ title, icon, onPress, notification }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {notification && (
        <View style={styles.notificationBadge}>
          <Text style={styles.notificationText}>{notification}</Text>
        </View>
      )}
      <View style={styles.iconContainer}>
        <Image source={{ uri: icon }} style={styles.icon} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 8,
    marginVertical: 8,
    width: 70,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F5F7FA',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 12,
    textAlign: 'center',
    color: '#424242',
  },
  notificationBadge: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    paddingHorizontal: 4,
  },
  notificationText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default QuickAccessCard;