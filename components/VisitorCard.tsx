import React from 'react';
import { 
  StyleSheet, 
  TouchableOpacity, 
  Text, 
  View 
} from 'react-native';
import {
  User,
  Bell
} from 'lucide-react-native';
import Colors from '@/constants/Colors';

interface VisitorCardProps {
  icon: string;
  title: string;
  badge?: string;
  onPress: () => void;
}

const VisitorCard: React.FC<VisitorCardProps> = ({ 
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
      case 'user':
        return <User {...props} />;
      case 'bell':
        return <Bell {...props} />;
      default:
        return <User {...props} />;
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
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    width: '30%',
    height: 120,
    justifyContent: 'center',
    marginRight: 10,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F0F5FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    position: 'relative',
  },
  title: {
    fontSize: 13,
    color: '#333',
    textAlign: 'center',
    fontFamily: 'Inter-Medium',
  },
  badgeContainer: {
    position: 'absolute',
    top: -5,
    right: -5,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: Colors.error,
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

export default VisitorCard;