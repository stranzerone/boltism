import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Animated,
  Share,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS, SIZES, SHADOWS } from '../constants/theme';

const ReferRewardsScreen = () => {
  const referCode = 'FRIEND2025';
  const rewardAmount = '$50';
  
  const scaleAnim = React.useRef(new Animated.Value(1)).current;
  
  React.useEffect(() => {
    const pulse = Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.05,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]);
    
    Animated.loop(pulse).start();
  }, []);
  
  const handleShare = async () => {
    try {
      await Share.share({
        message: `Join FacTech QA with my referral code ${referCode} and get ${rewardAmount} off your first month!`,
        title: 'Join FacTech QA',
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  const copyToClipboard = () => {
    // In a real app, would use Clipboard.setString(referCode)
    alert('Code copied to clipboard!');
  };
  
  const rewards = [
    {
      id: 1,
      type: 'Discount',
      description: 'Get $50 off on your next maintenance bill',
      status: 'available',
      expiryDate: 'Expires in 30 days',
      icon: 'cash-outline',
    },
    {
      id: 2,
      type: 'Free Service',
      description: 'Complimentary plumbing check-up',
      status: 'used',
      usedDate: 'Used on April 15, 2025',
      icon: 'construct-outline',
    },
    {
      id: 3,
      type: 'Credit',
      description: '$25 credit added to your account',
      status: 'available',
      expiryDate: 'Never expires',
      icon: 'wallet-outline',
    },
  ];
  
  const referrals = [
    {
      id: 1,
      name: 'Sarah Johnson',
      date: 'April 10, 2025',
      status: 'completed',
      reward: '$50 credited',
    },
    {
      id: 2,
      name: 'Michael Chen',
      date: 'April 5, 2025',
      status: 'pending',
      message: 'Waiting for first payment',
    },
  ];
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/refer-gift.png')}
          style={styles.headerImage}
        />
        <Text style={styles.headerTitle}>Refer and Earn</Text>
        <Text style={styles.headerSubtitle}>
          Share with friends and earn rewards when they join!
        </Text>
      </View>
      
      <Animated.View 
        style={[
          styles.codeCard, 
          { transform: [{ scale: scaleAnim }] },
        ]}
      >
        <View style={styles.codeCardContent}>
          <View>
            <Text style={styles.codeLabel}>Your Referral Code</Text>
            <Text style={styles.codeText}>{referCode}</Text>
          </View>
          <TouchableOpacity 
            style={styles.copyButton}
            onPress={copyToClipboard}
          >
            <Ionicons name="copy-outline" size={SIZES.iconMD} color={COLORS.white} />
          </TouchableOpacity>
        </View>
        
        <Text style={styles.rewardText}>
          Your friend gets {rewardAmount} off their first month
        </Text>
        <Text style={styles.rewardText}>
          You get {rewardAmount} credit when they join
        </Text>
        
        <TouchableOpacity
          style={styles.shareButton}
          onPress={handleShare}
        >
          <Ionicons name="share-social-outline" size={SIZES.iconSM} color={COLORS.white} />
          <Text style={styles.shareButtonText}>Share with Friends</Text>
        </TouchableOpacity>
      </Animated.View>
      
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Your Rewards</Text>
      </View>
      
      {rewards.map((reward) => (
        <View key={reward.id} style={styles.rewardCard}>
          <View style={[styles.rewardIcon, { backgroundColor: reward.status === 'used' ? `${COLORS.textLight}15` : `${COLORS.primary}15` }]}>
            <Ionicons 
              name={reward.icon} 
              size={SIZES.iconMD} 
              color={reward.status === 'used' ? COLORS.textLight : COLORS.primary} 
            />
          </View>
          
          <View style={styles.rewardContent}>
            <Text style={styles.rewardType}>{reward.type}</Text>
            <Text style={styles.rewardDescription}>{reward.description}</Text>
            
            {reward.status === 'available' ? (
              <View style={styles.rewardStatus}>
                <View style={styles.statusDot} />
                <Text style={styles.expiryText}>{reward.expiryDate}</Text>
              </View>
            ) : (
              <Text style={styles.usedText}>{reward.usedDate}</Text>
            )}
          </View>
          
          {reward.status === 'available' && (
            <TouchableOpacity style={styles.useButton}>
              <Text style={styles.useButtonText}>Use</Text>
            </TouchableOpacity>
          )}
        </View>
      ))}
      
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Referral History</Text>
      </View>
      
      {referrals.map((referral) => (
        <View key={referral.id} style={styles.referralCard}>
          <View style={styles.referralDetails}>
            <Text style={styles.referralName}>{referral.name}</Text>
            <Text style={styles.referralDate}>{referral.date}</Text>
            
            <View style={styles.statusContainer}>
              <View style={[
                styles.statusIndicator, 
                { backgroundColor: referral.status === 'completed' ? COLORS.success : COLORS.warning }
              ]} />
              <Text style={[
                styles.statusText,
                { color: referral.status === 'completed' ? COLORS.success : COLORS.warning }
              ]}>
                {referral.status === 'completed' ? 'Completed' : 'Pending'}
              </Text>
            </View>
            
            <Text style={styles.referralMessage}>
              {referral.status === 'completed' ? referral.reward : referral.message}
            </Text>
          </View>
        </View>
      ))}
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          *Terms and conditions apply. Rewards may vary.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SIZES.padding,
    paddingTop: SIZES.padding,
    paddingBottom: SIZES.padding * 2,
    alignItems: 'center',
  },
  headerImage: {
    width: 100,
    height: 100,
    marginBottom: SIZES.padding,
  },
  headerTitle: {
    ...FONTS.h1,
    color: COLORS.white,
    marginBottom: SIZES.xs,
  },
  headerSubtitle: {
    ...FONTS.body3,
    color: COLORS.white,
    opacity: 0.8,
    textAlign: 'center',
  },
  codeCard: {
    backgroundColor: COLORS.white,
    marginHorizontal: SIZES.padding,
    marginTop: -SIZES.padding * 1.5,
    borderRadius: SIZES.radius,
    padding: SIZES.padding,
    ...SHADOWS.medium,
  },
  codeCardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SIZES.padding,
  },
  codeLabel: {
    ...FONTS.body3,
    color: COLORS.textMedium,
    marginBottom: SIZES.xs,
  },
  codeText: {
    ...FONTS.h2,
    color: COLORS.primary,
    letterSpacing: 1,
  },
  copyButton: {
    backgroundColor: COLORS.primary,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rewardText: {
    ...FONTS.body3,
    color: COLORS.textMedium,
    marginBottom: SIZES.xs,
  },
  shareButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.radius,
    padding: SIZES.sm,
    marginTop: SIZES.padding,
  },
  shareButtonText: {
    ...FONTS.button,
    color: COLORS.white,
    marginLeft: SIZES.sm,
  },
  sectionHeader: {
    paddingHorizontal: SIZES.padding,
    marginTop: SIZES.padding * 1.5,
    marginBottom: SIZES.padding,
  },
  sectionTitle: {
    ...FONTS.h3,
    color: COLORS.textDark,
  },
  rewardCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    marginHorizontal: SIZES.padding,
    marginBottom: SIZES.md,
    borderRadius: SIZES.radius,
    padding: SIZES.padding,
    ...SHADOWS.small,
  },
  rewardIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SIZES.md,
  },
  rewardContent: {
    flex: 1,
  },
  rewardType: {
    ...FONTS.h4,
    color: COLORS.textDark,
  },
  rewardDescription: {
    ...FONTS.body3,
    color: COLORS.textMedium,
  },
  rewardStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.xs,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.success,
    marginRight: SIZES.xs,
  },
  expiryText: {
    ...FONTS.caption,
    color: COLORS.textLight,
  },
  usedText: {
    ...FONTS.caption,
    color: COLORS.textLight,
    marginTop: SIZES.xs,
  },
  useButton: {
    backgroundColor: COLORS.primaryLight,
    borderRadius: SIZES.radius / 2,
    paddingVertical: SIZES.xs,
    paddingHorizontal: SIZES.sm,
    alignSelf: 'flex-start',
  },
  useButtonText: {
    ...FONTS.caption,
    color: COLORS.primary,
    fontWeight: '600',
  },
  referralCard: {
    backgroundColor: COLORS.white,
    marginHorizontal: SIZES.padding,
    marginBottom: SIZES.md,
    borderRadius: SIZES.radius,
    padding: SIZES.padding,
    ...SHADOWS.small,
  },
  referralDetails: {
    flex: 1,
  },
  referralName: {
    ...FONTS.h4,
    color: COLORS.textDark,
  },
  referralDate: {
    ...FONTS.body4,
    color: COLORS.textMedium,
    marginBottom: SIZES.xs,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SIZES.xs,
  },
  statusIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: SIZES.xs,
  },
  statusText: {
    ...FONTS.caption,
    fontWeight: '600',
  },
  referralMessage: {
    ...FONTS.body4,
    color: COLORS.textMedium,
  },
  footer: {
    marginHorizontal: SIZES.padding,
    marginVertical: SIZES.padding,
  },
  footerText: {
    ...FONTS.caption,
    color: COLORS.textLight,
    textAlign: 'center',
  },
});

export default ReferRewardsScreen;