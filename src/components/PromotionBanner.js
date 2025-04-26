import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const PromotionBanner = ({ image, title, subtitle, actionText, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.overlay}>
        {title && <Text style={styles.title}>{title}</Text>}
        }
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        }
        {actionText && (
          <View style={styles.button}>
            <Text style={styles.buttonText}>{actionText}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    borderRadius: 12,
    overflow: 'hidden',
    marginHorizontal: 16,
    marginVertical: 8,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    color: 'white',
    fontSize: 14,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#FFC107',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 16,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#212121',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default PromotionBanner;