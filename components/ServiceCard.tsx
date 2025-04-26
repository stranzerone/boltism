import React from 'react';
import { 
  StyleSheet, 
  TouchableOpacity, 
  Text, 
  View,
  Image
} from 'react-native';
import { Bell, CircleHelp as HelpCircle, Coffee } from 'lucide-react-native';
import Colors from '@/constants/Colors';

interface ServiceCardProps {
  icon?: string;
  image?: string;
  title: string;
  onPress: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  image,
  title, 
  onPress 
}) => {
  const getIcon = () => {
    const props = { 
      size: 24, 
      color: Colors.primary 
    };

    switch (icon) {
      case 'bell':
        return <Bell {...props} />;
      case 'help-circle':
        return <HelpCircle {...props} />;
      case 'coffee':
        return <Coffee {...props} />;
      default:
        return null;
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {image ? (
        <Image
          source={{ uri: image }}
          style={styles.image}
          resizeMode="cover"
        />
      ) : (
        <View style={styles.iconContainer}>
          {getIcon()}
        </View>
      )}
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 12,
    width: 120,
    marginRight: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F0F5FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
    fontFamily: 'Inter-Medium',
  },
});

export default ServiceCard;