import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import MainNavigator from './src/navigation/MainNavigator';
import { AppContextProvider } from './src/context/AppContext';

// Define the theme
// const theme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: '#1E88E5',
//     accent: '#0D47A1',
//     background: '#F5F7FA',
//     text: '#263238',
//     surface: '#FFFFFF',
//     error: '#D32F2F',
//     notification: '#F44336',
//     card: '#FFFFFF',
//     border: '#E0E0E0',
//   },
// };

export default function App() {
  return (
      {/* <PaperProvider theme={theme}>
        <AppContextProvider>
          <NavigationContainer theme={theme}>
            <StatusBar style="light" backgroundColor="#1565C0" />
            <MainNavigator />
          </NavigationContainer>
        </AppContextProvider>
      </PaperProvider> */}
      <View>
        <Text>Welcome to my app</Text>
      </View>
  );
}