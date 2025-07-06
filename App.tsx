import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'react-native';
import { ThemeProvider } from './src/contexts/ThemeContext';
import { useTheme } from './src/contexts/ThemeContext';

// Screens
import HomeScreen from './src/screens/HomeScreen';
import QuizScreen from './src/screens/QuizScreen';
import ResultScreen from './src/screens/ResultScreen';
import StatisticsScreen from './src/screens/StatisticsScreen';
import SettingsScreen from './src/screens/SettingsScreen';

// Types
export type RootStackParamList = {
  Home: undefined;
  Quiz: { lesson: string; categoryName: string };
  Result: { 
    score: number; 
    totalQuestions: number; 
    correctAnswers: number;
    incorrectAnswers: number;
    lesson: string;
    timeSpent: number;
    answers: Array<{ questionId: number; userAnswer: string; isCorrect: boolean }>;
  };
  Statistics: undefined;
  Settings: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const { theme } = useTheme();

  return (
    <NavigationContainer theme={theme}>
      <StatusBar
        barStyle={theme.dark ? 'light-content' : 'dark-content'}
        backgroundColor={theme.colors.primary}
      />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTintColor: theme.colors.onPrimary,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18,
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Dersli Quiz',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Quiz"
          component={QuizScreen}
          options={({ route }) => ({
            title: route.params.categoryName,
            headerTitleAlign: 'center',
          })}
        />
        <Stack.Screen
          name="Result"
          component={ResultScreen}
          options={{
            title: 'Sonuçlar',
            headerTitleAlign: 'center',
            headerLeft: () => null,
          }}
        />
        <Stack.Screen
          name="Statistics"
          component={StatisticsScreen}
          options={{
            title: 'İstatistikler',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            title: 'Ayarlar',
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <PaperProvider>
        <AppNavigator />
      </PaperProvider>
    </ThemeProvider>
  );
};

export default App;