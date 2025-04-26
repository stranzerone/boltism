import React from 'react';
import { 
  StyleSheet, 
  TouchableOpacity, 
  Text, 
  View 
} from 'react-native';
import { UserPlus, Calendar, User, Truck, CreditCard, FileText, ChartBar as BarChart2, TriangleAlert as AlertTriangle, Coffee, Share2, PenTool as Tool, File, MessageCircle, Users, Phone } from 'lucide-react-native';

interface ActionCardProps {
  icon: string;
  title: string;
  color: string;
  onPress: () => void;
}

const ActionCard: React.FC<ActionCardProps> = ({ 
  icon, 
  title, 
  color,
  onPress 
}) => {
  const getIcon = () => {
    const props = { 
      size: 24, 
      color: 'white' 
    };

    switch (icon) {
      case 'user-plus': return <UserPlus {...props} />;
      case 'calendar': return <Calendar {...props} />;
      case 'user': return <User {...props} />;
      case 'truck': return <Truck {...props} />;
      case 'credit-card': return <CreditCard {...props} />;
      case 'file-text': return <FileText {...props} />;
      case 'bar-chart-2': return <BarChart2 {...props} />;
      case 'alert-triangle': return <AlertTriangle {...props} />;
      case 'coffee': return <Coffee {...props} />;
      case 'share-2': return <Share2 {...props} />;
      case 'tool': return <Tool {...props} />;
      case 'file': return <File {...props} />;
      case 'message-circle': return <MessageCircle {...props} />;
      case 'users': return <Users {...props} />;
      case 'phone': return <Phone {...props} />;
      default: return <User {...props} />;
    }
  };

  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={onPress}
    >
      <View style={[styles.iconContainer, { backgroundColor: color }]}>
        {getIcon()}
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#333',
  },
});

export default ActionCard;