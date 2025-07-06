import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import { useTheme } from '../contexts/ThemeContext';
import { categories, getQuestionsByCategory } from '../data/questions';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { theme, toggleTheme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]);

  const handleStartQuiz = () => {
    const questionsInCategory = getQuestionsByCategory(selectedCategory);
    
    if (questionsInCategory.length === 0) {
      Alert.alert(
        'Uyarı',
        'Bu kategoride henüz soru bulunmamaktadır.',
        [{ text: 'Tamam' }]
      );
      return;
    }

    navigation.navigate('Quiz', {
      lesson: selectedCategory,
      categoryName: selectedCategory,
    });
  };

  const handleStatistics = () => {
    navigation.navigate('Statistics');
  };

  const handleSettings = () => {
    navigation.navigate('Settings');
  };

  const CategoryCard = ({ category, isSelected, onPress }: {
    category: string;
    isSelected: boolean;
    onPress: () => void;
  }) => {
    const questionCount = getQuestionsByCategory(category).length;
    
    return (
      <TouchableOpacity
        style={[
          styles.categoryCard,
          {
            backgroundColor: isSelected ? theme.colors.primary : theme.colors.surface,
            borderColor: isSelected ? theme.colors.primary : theme.colors.border,
          },
        ]}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <Text
          style={[
            styles.categoryTitle,
            {
              color: isSelected ? theme.colors.onPrimary : theme.colors.text,
            },
          ]}
        >
          {category}
        </Text>
        <Text
          style={[
            styles.questionCount,
            {
              color: isSelected ? theme.colors.onPrimary : theme.colors.textSecondary,
            },
          ]}
        >
          {questionCount} soru
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={[styles.title, { color: theme.colors.text }]}>
            Dersli Quiz
          </Text>
          <Text style={[styles.subtitle, { color: theme.colors.textSecondary }]}>
            Tıp Bilgini Test Et
          </Text>
        </View>
        <TouchableOpacity
          style={[styles.themeButton, { backgroundColor: theme.colors.surface }]}
          onPress={toggleTheme}
        >
          <Text style={[styles.themeIcon, { color: theme.colors.text }]}>
            {theme.dark ? '☀️' : '🌙'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Category Selection */}
      <View style={styles.content}>
        <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
          Ders Seç
        </Text>
        
        <ScrollView 
          style={styles.categoriesContainer}
          showsVerticalScrollIndicator={false}
        >
          {categories.map((category) => (
            <CategoryCard
              key={category}
              category={category}
              isSelected={selectedCategory === category}
              onPress={() => setSelectedCategory(category)}
            />
          ))}
        </ScrollView>

        {/* Action Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.primaryButton, { backgroundColor: theme.colors.success }]}
            onPress={handleStartQuiz}
            activeOpacity={0.8}
          >
            <Text style={[styles.buttonText, { color: theme.colors.onSuccess }]}>
              Quiz Başlat
            </Text>
          </TouchableOpacity>

          <View style={styles.secondaryButtons}>
            <TouchableOpacity
              style={[styles.secondaryButton, { backgroundColor: theme.colors.surface }]}
              onPress={handleStatistics}
              activeOpacity={0.8}
            >
              <Text style={[styles.secondaryButtonText, { color: theme.colors.text }]}>
                📊 İstatistikler
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.secondaryButton, { backgroundColor: theme.colors.surface }]}
              onPress={handleSettings}
              activeOpacity={0.8}
            >
              <Text style={[styles.secondaryButtonText, { color: theme.colors.text }]}>
                ⚙️ Ayarlar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 15,
  },
  headerContent: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  themeButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  themeIcon: {
    fontSize: 18,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
  },
  categoriesContainer: {
    flex: 1,
    marginBottom: 20,
  },
  categoryCard: {
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    borderWidth: 2,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  questionCount: {
    fontSize: 14,
    opacity: 0.8,
  },
  buttonContainer: {
    paddingBottom: 20,
  },
  primaryButton: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondaryButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  secondaryButton: {
    flex: 1,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  secondaryButtonText: {
    fontSize: 14,
    fontWeight: '500',
  },
});

export default HomeScreen;