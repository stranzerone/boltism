import React, { useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  Animated,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES, FONTS, SHADOWS } from '../constants/theme';

const QuickActionCard = ({ 
  title, 
  subtitle, 
  iconName, 
  color = COLORS.primary, 
  onPress,
  delay = 0
}) => {
  const opacity = React.useRef(new Animated.Value(0)).current;
  const scale = React.useRef(new Animated.Value(0.9)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.delay(delay),
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.spring(scale, {
          toValue: 1,
          friction: 7,
          tension: 40,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, []);

  return (
    <Animated.View 
      style={[
        styles.container, 
        { opacity, transform: [{ scale }] }
      ]}
    >
      <TouchableOpacity 
        style={styles.card}
        activeOpacity={0.7}
        onPress={onPress}
      >
        <View style={[styles.iconContainer, { backgroundColor: `${color}15` }]}>
          <Ionicons name={iconName} size={SIZES.iconMD} color={color} />
        </View>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        }
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '33.3%',
    padding: SIZES.xs,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    padding: SIZES.md,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 120,
    ...SHADOWS.small,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SIZES.sm,
  },
  title: {
    ...FONTS.h5,
    color: COLORS.textDark,
    marginBottom: SIZES.xs,
    textAlign: 'center',
  },
  subtitle: {
    ...FONTS.caption,
    color: COLORS.textLight,
    textAlign: 'center',
  },
});

export default QuickActionCard;