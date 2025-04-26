import React from 'react';
import { 
  StyleSheet, 
  TouchableOpacity, 
  Text, 
  View,
  Image,
  ImageBackground
} from 'react-native';
import Colors from '@/constants/Colors';

interface PromotionCardProps {
  image: string;
  title: string;
  subtitle?: string;
  actionText?: string;
  offer?: string;
  onPress: () => void;
}

const PromotionCard: React.FC<PromotionCardProps> = ({ 
  image,
  title,
  subtitle,
  actionText,
  offer,
  onPress 
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ImageBackground
        source={{ uri: image }}
        style={styles.background}
        imageStyle={{ borderRadius: 12 }}
      >
        <View style={styles.contentContainer}>
          <View>
            <Text style={styles.title}>{title}</Text>
            {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
            
            {actionText && (
              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionText}>{actionText}</Text>
              </TouchableOpacity>
            )}
          </View>
          
          {offer && (
            <View style={styles.offerContainer}>
              <Text style={styles.offerText}>{offer}</Text>
            </View>
          )}
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 280,
    height: 150,
    marginRight: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  background: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  contentContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: 'white',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 12,
  },
  actionButton: {
    backgroundColor: '#FFA500',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    alignSelf: 'flex-start',
  },
  actionText: {
    fontSize: 12,
    fontFamily: 'Inter-Bold',
    color: 'white',
  },
  offerContainer: {
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  offerText: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    color: '#222',
  },
});

export default PromotionCard;