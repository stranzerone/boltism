import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const ReferScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Image
            source={{ uri: 'https://img.icons8.com/fluency/96/000000/gift.png' }}
            style={styles.headerImage}
          />
          <Text style={styles.headerTitle}>Invite friends & earn rewards</Text>
          <Text style={styles.headerSubtitle}>
            Share your referral code with friends and get rewarded when they join
          </Text>
        </View>

        <View style={styles.referralCard}>
          <Text style={styles.referralCardTitle}>Your Referral Code</Text>
          <View style={styles.codeContainer}>
            <Text style={styles.referralCode}>FACTECH50</Text>
            <TouchableOpacity style={styles.copyButton}>
              <Ionicons name="copy-outline" size={18} color="#1E88E5" />
              <Text style={styles.copyText}>Copy</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.shareButton}>
            <Ionicons name="share-social-outline" size={18} color="white" />
            <Text style={styles.shareButtonText}>Share your code</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.benefitsContainer}>
          <Text style={styles.benefitsTitle}>Benefits</Text>
          <View style={styles.benefitCard}>
            <View style={styles.benefitIconContainer}>
              <MaterialCommunityIcons name="gift-outline" size={24} color="#1E88E5" />
            </View>
            <View style={styles.benefitContent}>
              <Text style={styles.benefitTitle}>₹500 Off on Maintenance</Text>
              <Text style={styles.benefitDescription}>
                For every friend who joins using your code
              </Text>
            </View>
          </View>
          
          <View style={styles.benefitCard}>
            <View style={styles.benefitIconContainer}>
              <MaterialCommunityIcons name="account-multiple-outline" size={24} color="#1E88E5" />
            </View>
            <View style={styles.benefitContent}>
              <Text style={styles.benefitTitle}>Your friend gets ₹300</Text>
              <Text style={styles.benefitDescription}>
                Discount on their first month's maintenance fee
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.howItWorksContainer}>
          <Text style={styles.howItWorksTitle}>How it works</Text>
          <View style={styles.stepCard}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>1</Text>
            </View>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>Share your referral code</Text>
              <Text style={styles.stepDescription}>
                Send your unique code to friends who are looking for a society management solution
              </Text>
            </View>
          </View>
          
          <View style={styles.stepCard}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>2</Text>
            </View>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>Friend joins with your code</Text>
              <Text style={styles.stepDescription}>
                They enter your code during their registration process
              </Text>
            </View>
          </View>
          
          <View style={styles.stepCard}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>3</Text>
            </View>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>Both get rewarded</Text>
              <Text style={styles.stepDescription}>
                You and your friend receive rewards automatically
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>5</Text>
            <Text style={styles.statLabel}>Friends Invited</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statCard}>
            <Text style={styles.statValue}>3</Text>
            <Text style={styles.statLabel}>Friends Joined</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statCard}>
            <Text style={styles.statValue}>₹1500</Text>
            <Text style={styles.statLabel}>Rewards Earned</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  header: {
    backgroundColor: '#1E88E5',
    paddingVertical: 24,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headerImage: {
    width: 80,
    height: 80,
    marginBottom: 16,
    tintColor: 'white',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)',
    textAlign: 'center',
    lineHeight: 20,
  },
  referralCard: {
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginTop: -20,
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  referralCardTitle: {
    fontSize: 14,
    color: '#757575',
    marginBottom: 8,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  referralCode: {
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  copyButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  copyText: {
    fontSize: 14,
    color: '#1E88E5',
    marginLeft: 4,
  },
  shareButton: {
    backgroundColor: '#1E88E5',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 8,
  },
  shareButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 8,
  },
  benefitsContainer: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  benefitsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  benefitCard: {
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  benefitIconContainer: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(30, 136, 229, 0.1)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  benefitContent: {
    flex: 1,
  },
  benefitTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  benefitDescription: {
    fontSize: 14,
    color: '#757575',
  },
  howItWorksContainer: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  howItWorksTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  stepCard: {
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  stepNumber: {
    width: 32,
    height: 32,
    backgroundColor: '#1E88E5',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  stepNumberText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  stepDescription: {
    fontSize: 14,
    color: '#757575',
    lineHeight: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginVertical: 24,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    padding: 16,
  },
  statCard: {
    flex: 1,
    alignItems: 'center',
  },
  statDivider: {
    width: 1,
    height: '100%',
    backgroundColor: '#EEEEEE',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E88E5',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#757575',
    textAlign: 'center',
  },
});

export default ReferScreen;