import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { colors } from '@/constants/theme';

export default function NotificationBanner({ title, subtitle, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ImageBackground
        source={{ uri: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600' }}
        style={styles.background}
        imageStyle={styles.backgroundImage}
      >
        <View style={styles.overlay} />
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.button}>
            <Text style={styles.buttonText}>{subtitle}</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    marginHorizontal: 16,
    marginVertical: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  backgroundImage: {
    borderRadius: 12,
  },
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0, 102, 204, 0.6)',
    borderRadius: 12,
  },
  content: {
    padding: 16,
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: colors.white,
    marginBottom: 8,
  },
  button: {
    backgroundColor: colors.white,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 16,
    alignSelf: 'flex-start',
  },
  buttonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 12,
    color: colors.primary,
  },
});