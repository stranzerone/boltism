export const COLORS = {
  primary: '#0070BE',
  primaryLight: '#E6F3FF',
  secondary: '#34495E',
  accent: '#2E86C1',
  success: '#27AE60',
  warning: '#F39C12',
  error: '#E74C3C',
  info: '#3498DB',
  
  // Neutral colors
  white: '#FFFFFF',
  background: '#F8F9FA',
  backgroundLight: '#F0F2F5',
  card: '#FFFFFF',
  
  // Text colors
  textDark: '#2C3E50',
  textMedium: '#576574',
  textLight: '#8395A7',
  textWhite: '#FFFFFF',
  
  // Border colors
  border: '#DFE4EA',
  borderLight: '#F1F2F6',
  
  // Shadow
  shadow: 'rgba(0, 0, 0, 0.1)',
};

export const SIZES = {
  // Font sizes
  largeTitle: 24,
  h1: 22,
  h2: 20,
  h3: 18,
  h4: 16,
  h5: 14,
  h6: 12,
  
  // App dimensions
  base: 8,
  radius: 8,
  padding: 16,
  margin: 16,
  
  // Spacing
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
  
  // Card dimensions
  cardWidth: '100%',
  cardHeight: 120,
  
  // Button dimensions
  buttonHeight: 48,
  buttonRadius: 8,
  
  // Icon sizes
  iconXS: 16,
  iconSM: 20,
  iconMD: 24,
  iconLG: 32,
};

export const FONTS = {
  largeTitle: { fontSize: SIZES.largeTitle, fontWeight: '700', lineHeight: 36 },
  h1: { fontSize: SIZES.h1, fontWeight: '700', lineHeight: 30 },
  h2: { fontSize: SIZES.h2, fontWeight: '600', lineHeight: 28 },
  h3: { fontSize: SIZES.h3, fontWeight: '600', lineHeight: 26 },
  h4: { fontSize: SIZES.h4, fontWeight: '600', lineHeight: 24 },
  h5: { fontSize: SIZES.h5, fontWeight: '500', lineHeight: 22 },
  h6: { fontSize: SIZES.h6, fontWeight: '500', lineHeight: 20 },
  
  body1: { fontSize: SIZES.h3, fontWeight: '400', lineHeight: 28 },
  body2: { fontSize: SIZES.h4, fontWeight: '400', lineHeight: 24 },
  body3: { fontSize: SIZES.h5, fontWeight: '400', lineHeight: 22 },
  body4: { fontSize: SIZES.h6, fontWeight: '400', lineHeight: 20 },
  
  button: { fontSize: SIZES.h4, fontWeight: '600', lineHeight: 22 },
  caption: { fontSize: SIZES.h6, fontWeight: '400', lineHeight: 18 },
};

export const SHADOWS = {
  small: {
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 4,
  },
  large: {
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 8,
  },
};