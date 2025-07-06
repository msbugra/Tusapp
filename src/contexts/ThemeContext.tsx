import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ThemeColors {
  primary: string;
  onPrimary: string;
  secondary: string;
  onSecondary: string;
  background: string;
  onBackground: string;
  surface: string;
  onSurface: string;
  error: string;
  onError: string;
  success: string;
  onSuccess: string;
  warning: string;
  onWarning: string;
  info: string;
  onInfo: string;
  border: string;
  text: string;
  textSecondary: string;
  textMuted: string;
  card: string;
  notification: string;
}

interface Theme {
  dark: boolean;
  colors: ThemeColors;
}

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isSystemTheme: boolean;
  setSystemTheme: (value: boolean) => void;
}

const lightTheme: Theme = {
  dark: false,
  colors: {
    primary: '#0f766e',
    onPrimary: '#ffffff',
    secondary: '#0d9488',
    onSecondary: '#ffffff',
    background: '#ffffff',
    onBackground: '#0f172a',
    surface: '#f8fafc',
    onSurface: '#334155',
    error: '#dc2626',
    onError: '#ffffff',
    success: '#16a34a',
    onSuccess: '#ffffff',
    warning: '#ca8a04',
    onWarning: '#ffffff',
    info: '#0284c7',
    onInfo: '#ffffff',
    border: '#cbd5e1',
    text: '#0f172a',
    textSecondary: '#334155',
    textMuted: '#475569',
    card: '#ffffff',
    notification: '#ef4444',
  },
};

const darkTheme: Theme = {
  dark: true,
  colors: {
    primary: '#06b6d4',
    onPrimary: '#ffffff',
    secondary: '#0891b2',
    onSecondary: '#ffffff',
    background: '#111827',
    onBackground: '#ffffff',
    surface: '#1f2937',
    onSurface: '#d1d5db',
    error: '#ef4444',
    onError: '#ffffff',
    success: '#10b981',
    onSuccess: '#ffffff',
    warning: '#f59e0b',
    onWarning: '#ffffff',
    info: '#3b82f6',
    onInfo: '#ffffff',
    border: '#4b5563',
    text: '#ffffff',
    textSecondary: '#d1d5db',
    textMuted: '#9ca3af',
    card: '#374151',
    notification: '#ef4444',
  },
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const systemColorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSystemTheme, setIsSystemTheme] = useState(true);

  useEffect(() => {
    loadThemePreference();
  }, []);

  useEffect(() => {
    if (isSystemTheme) {
      setIsDarkMode(systemColorScheme === 'dark');
    }
  }, [systemColorScheme, isSystemTheme]);

  const loadThemePreference = async () => {
    try {
      const savedTheme = await AsyncStorage.getItem('theme');
      const savedSystemTheme = await AsyncStorage.getItem('systemTheme');
      
      if (savedSystemTheme !== null) {
        const useSystemTheme = JSON.parse(savedSystemTheme);
        setIsSystemTheme(useSystemTheme);
        
        if (useSystemTheme) {
          setIsDarkMode(systemColorScheme === 'dark');
        } else if (savedTheme !== null) {
          setIsDarkMode(savedTheme === 'dark');
        }
      }
    } catch (error) {
      console.error('Error loading theme preference:', error);
    }
  };

  const toggleTheme = async () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    setIsSystemTheme(false);
    
    try {
      await AsyncStorage.setItem('theme', newTheme ? 'dark' : 'light');
      await AsyncStorage.setItem('systemTheme', JSON.stringify(false));
    } catch (error) {
      console.error('Error saving theme preference:', error);
    }
  };

  const setSystemTheme = async (value: boolean) => {
    setIsSystemTheme(value);
    
    if (value) {
      setIsDarkMode(systemColorScheme === 'dark');
    }
    
    try {
      await AsyncStorage.setItem('systemTheme', JSON.stringify(value));
    } catch (error) {
      console.error('Error saving system theme preference:', error);
    }
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isSystemTheme, setSystemTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};