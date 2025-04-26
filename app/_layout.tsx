import { useEffect, useState } from 'react';
import { Drawer } from 'expo-router/drawer';
import { StatusBar } from 'expo-status-bar';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';
import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';
import { 
  Inter_400Regular, 
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold 
} from '@expo-google-fonts/inter';
import { 
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';
import { DrawerContent } from '@/components/drawer/DrawerContent';
import { StyleSheet, View, Text } from 'react-native';
import { colors } from '@/constants/theme';

// Prevent splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useFrameworkReady();
  
  const [fontsLoaded, fontError] = useFonts({
    'Inter-Regular': Inter_400Regular,
    'Inter-Medium': Inter_500Medium,
    'Inter-SemiBold': Inter_600SemiBold,
    'Inter-Bold': Inter_700Bold,
    'Poppins-Regular': Poppins_400Regular,
    'Poppins-Medium': Poppins_500Medium,
    'Poppins-SemiBold': Poppins_600SemiBold,
    'Poppins-Bold': Poppins_700Bold,
  });

  // Hide splash screen once fonts are loaded
  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // Return null to keep splash screen visible while fonts load
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <Drawer 
        drawerContent={(props) => <DrawerContent {...props} />}
        screenOptions={{
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTitleStyle: {
            fontFamily: 'Poppins-SemiBold',
          },
          drawerActiveTintColor: colors.primary,
          drawerInactiveTintColor: colors.textPrimary,
          drawerLabelStyle: {
            fontFamily: 'Inter-Medium',
          },
        }}
      >
        <Drawer.Screen 
          name="(tabs)" 
          options={{ 
            headerShown: false, 
            title: 'Home',
          }} 
        />
        <Drawer.Screen 
          name="+not-found" 
          options={{ 
            headerShown: false,
            drawerLabel: () => null,
            drawerItemStyle: { display: 'none' }
          }} 
        />
      </Drawer>
      <StatusBar style="light" />
    </>
  );
}