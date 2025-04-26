import React from 'react';
import { 
  StyleSheet, 
  TouchableOpacity, 
  Text, 
  View 
} from 'react-native';
import { Chrome as Home, CreditCard, Building, Compass } from 'lucide-react-native';
import Colors from '@/constants/Colors';

interface FeatureButtonProps {
  icon: string;
  title: string;
  badge?: string;
  onPress: () => void;
}

const FeatureButton: React.FC<FeatureButtonProps> = ({ 
  icon, 
  title, 
  badge, 
  onPress 
}) => {
  const getIcon = () => {
    const props = { 
      size: 24, 
      color: Colors.primary 
    };

    switch (icon) {
      case 'home':
        return <Home {...props} />;
      case 'credit-card':
        return <CreditCard {...props} />;
      case 'building':
        return <Building {...props} />;
      case 'compass':
        return <Compass {...props} />;
      default:
        return <Home {...props} />;
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.iconContainer}>
        {badge && (
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>{badge}</Text>
          </View>
        )}
        {getIcon()}
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '22%',
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F0F5FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    position: 'relative',
  },
  title: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
    fontFamily: 'Inter-Medium',
  },
  badgeContainer: {
    position: 'absolute',
    top: -5,
    right: -5,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: Colors.success,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  badgeText: {
    fontSize: 10,
    color: 'white',
    fontFamily: 'Inter-Bold',
  },
});

export default FeatureButton;