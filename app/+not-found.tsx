import { Link, Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '@/constants/theme';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View style={styles.container}>
        <Text style={styles.title}>Page Not Found</Text>
        <Text style={styles.text}>The screen you're looking for doesn't exist.</Text>
        <Link href="/" style={styles.link}>
          <Text style={styles.linkText}>Return to home</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: colors.backgroundLight,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: colors.textPrimary,
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: colors.textSecondary,
    marginBottom: 24,
  },
  link: {
    padding: 12,
    backgroundColor: colors.primary,
    borderRadius: 8,
  },
  linkText: {
    color: colors.white,
    fontFamily: 'Inter-SemiBold',
  },
});