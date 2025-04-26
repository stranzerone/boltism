import React, { useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  Animated
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES, FONTS, SHADOWS } from '../constants/theme';

const StatusCard = ({ 
  title, 
  value, 
  period, 
  change, 
  status,
  dueDate,
  iconName, 
  color = COLORS.primary,
  actionText,
  onAction
}) => {
  const slideAnim = React.useRef(new Animated.Value(50)).current;
  const opacityAnim = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const getStatusIcon = () => {
    if (change) {
      return change > 0 ? 'arrow-up-outline' : 'arrow-down-outline';
    }
    return null;
  };

  const getStatusColor = () => {
    if (status === 'good') return COLORS.success;
    if (status === 'warning') return COLORS.warning;
    if (status === 'error') return COLORS.error;
    
    if (change) {
      return change > 0 ? COLORS.error : COLORS.success;
    }
    
    return COLORS.textMedium;
  };

  return (
    <Animated.View 
      style={[
        styles.container, 
        { 
          opacity: opacityAnim,
          transform: [{ translateY: slideAnim }]
        }
      ]}
    >
      <View style={styles.iconContainer}>
        <View style={[styles.iconBackground, { backgroundColor: `${color}15` }]}>
          <Ionicons name={iconName} size={SIZES.iconMD} color={color} />
        </View>
      </View>
      
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.value}>{value}</Text>
        
        {period && (
          <View style={styles.detailsContainer}>
            <Text style={styles.periodText}>{period}</Text>
            
            {change !== undefined && (
              <View style={styles.changeContainer}>
                <Ionicons 
                  name={getStatusIcon()} 
                  size={14} 
                  color={getStatusColor()} 
                  style={styles.changeIcon}
                />
                <Text style={[styles.changeText, { color: getStatusColor() }]}>
                  {Math.abs(change).toFixed(1)}%
                </Text>
              </View>
            )}
          </View>
        )}
        
        {status && (
          <View style={styles.statusContainer}>
            <View style={[styles.statusIndicator, { backgroundColor: getStatusColor() }]} />
            <Text style={styles.statusText}>{status.charAt(0).toUpperCase() + status.slice(1)}</Text>
          </View>
        )}
        
        {dueDate && (
          <Text style={styles.dueDateText}>{dueDate}</Text>
        )}
      </View>
      
      {actionText && (
        <TouchableOpacity style={styles.actionButton} onPress={onAction}>
          <Text style={styles.actionText}>{actionText}</Text>
        </TouchableOpacity>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    marginHorizontal: SIZES.padding,
    marginBottom: SIZES.md,
    padding: SIZES.padding,
    flexDirection: 'row',
    ...SHADOWS.small,
  },
  iconContainer: {
    marginRight: SIZES.md,
  },
  iconBackground: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    ...FONTS.body3,
    color: COLORS.textMedium,
    marginBottom: 2,
  },
  value: {
    ...FONTS.h3,
    color: COLORS.textDark,
    marginBottom: 4,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  periodText: {
    ...FONTS.caption,
    color: COLORS.textLight,
    marginRight: SIZES.sm,
  },
  changeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  changeIcon: {
    marginRight: 2,
  },
  changeText: {
    ...FONTS.caption,
    fontWeight: '500',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  statusText: {
    ...FONTS.caption,
    color: COLORS.textMedium,
  },
  dueDateText: {
    ...FONTS.caption,
    color: COLORS.textMedium,
    marginTop: 2,
  },
  actionButton: {
    backgroundColor: COLORS.primaryLight,
    borderRadius: SIZES.radius / 2,
    paddingVertical: SIZES.xs,
    paddingHorizontal: SIZES.sm,
    alignSelf: 'flex-start',
    justifyContent: 'center',
  },
  actionText: {
    ...FONTS.caption,
    color: COLORS.primary,
    fontWeight: '600',
  },
});

export default StatusCard;