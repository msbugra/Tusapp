import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import { useTheme } from '../contexts/ThemeContext';

type ResultScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Result'>;
type ResultScreenRouteProp = {
  params: {
    score: number;
    totalQuestions: number;
    correctAnswers: number;
    incorrectAnswers: number;
    lesson: string;
    timeSpent: number;
    answers: Array<{ questionId: number; userAnswer: string; isCorrect: boolean }>;
  };
};

const { width: screenWidth } = Dimensions.get('window');

const ResultScreen = () => {
  const navigation = useNavigation<ResultScreenNavigationProp>();
  const route = useRoute<ResultScreenRouteProp>();
  const { theme } = useTheme();

  const {
    score,
    totalQuestions,
    correctAnswers,
    incorrectAnswers,
    lesson,
    timeSpent,
    answers,
  } = route.params;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getPerformanceLevel = (score: number) => {
    if (score >= 90) return { level: 'Mükemmel', color: theme.colors.success, icon: '🏆' };
    if (score >= 80) return { level: 'Çok İyi', color: theme.colors.success, icon: '🎉' };
    if (score >= 70) return { level: 'İyi', color: theme.colors.warning, icon: '👍' };
    if (score >= 60) return { level: 'Orta', color: theme.colors.warning, icon: '📚' };
    return { level: 'Geliştirilmeli', color: theme.colors.error, icon: '💪' };
  };

  const performance = getPerformanceLevel(score);

  const StatCard = ({ title, value, subtitle, color }: {
    title: string;
    value: string;
    subtitle?: string;
    color: string;
  }) => (
    <View style={[styles.statCard, { backgroundColor: theme.colors.surface }]}>
      <Text style={[styles.statTitle, { color: theme.colors.textSecondary }]}>
        {title}
      </Text>
      <Text style={[styles.statValue, { color }]}>
        {value}
      </Text>
      {subtitle && (
        <Text style={[styles.statSubtitle, { color: theme.colors.textMuted }]}>
          {subtitle}
        </Text>
      )}
    </View>
  );

  const handleRetakeQuiz = () => {
    navigation.navigate('Quiz', {
      lesson,
      categoryName: lesson,
    });
  };

  const handleBackToHome = () => {
    navigation.navigate('Home');
  };

  const handleViewStatistics = () => {
    navigation.navigate('Statistics');
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Performance Header */}
        <View style={[styles.performanceHeader, { backgroundColor: theme.colors.surface }]}>
          <Text style={[styles.performanceIcon]}>
            {performance.icon}
          </Text>
          <Text style={[styles.performanceTitle, { color: theme.colors.text }]}>
            {performance.level}
          </Text>
          <Text style={[styles.scoreText, { color: performance.color }]}>
            %{score}
          </Text>
          <Text style={[styles.lessonText, { color: theme.colors.textSecondary }]}>
            {lesson}
          </Text>
        </View>

        {/* Statistics Cards */}
        <View style={styles.statsContainer}>
          <StatCard
            title="Doğru Cevaplar"
            value={correctAnswers.toString()}
            subtitle={`${totalQuestions} sorudan`}
            color={theme.colors.success}
          />
          <StatCard
            title="Yanlış Cevaplar"
            value={incorrectAnswers.toString()}
            subtitle={`${totalQuestions} sorudan`}
            color={theme.colors.error}
          />
          <StatCard
            title="Süre"
            value={formatTime(timeSpent)}
            subtitle="Toplam süre"
            color={theme.colors.info}
          />
          <StatCard
            title="Ortalama"
            value={`${Math.round(timeSpent / totalQuestions)}s`}
            subtitle="Soru başına"
            color={theme.colors.warning}
          />
        </View>

        {/* Progress Bar */}
        <View style={[styles.progressSection, { backgroundColor: theme.colors.surface }]}>
          <Text style={[styles.progressTitle, { color: theme.colors.text }]}>
            Başarı Oranı
          </Text>
          <View style={styles.progressBarContainer}>
            <View style={[styles.progressBarBackground, { backgroundColor: theme.colors.border }]}>
              <View
                style={[
                  styles.progressBarFill,
                  {
                    width: `${score}%`,
                    backgroundColor: performance.color,
                  },
                ]}
              />
            </View>
            <Text style={[styles.progressPercentage, { color: theme.colors.text }]}>
              %{score}
            </Text>
          </View>
        </View>

        {/* Answer Breakdown */}
        <View style={[styles.breakdownSection, { backgroundColor: theme.colors.surface }]}>
          <Text style={[styles.breakdownTitle, { color: theme.colors.text }]}>
            Cevap Dağılımı
          </Text>
          <View style={styles.breakdownContainer}>
            <View style={styles.breakdownItem}>
              <View style={[styles.breakdownDot, { backgroundColor: theme.colors.success }]} />
              <Text style={[styles.breakdownText, { color: theme.colors.text }]}>
                Doğru: {correctAnswers}
              </Text>
            </View>
            <View style={styles.breakdownItem}>
              <View style={[styles.breakdownDot, { backgroundColor: theme.colors.error }]} />
              <Text style={[styles.breakdownText, { color: theme.colors.text }]}>
                Yanlış: {incorrectAnswers}
              </Text>
            </View>
          </View>
        </View>

        {/* Motivation Message */}
        <View style={[styles.motivationSection, { backgroundColor: theme.colors.surface }]}>
          <Text style={[styles.motivationTitle, { color: theme.colors.text }]}>
            {score >= 80 ? 'Tebrikler!' : 'Devam Et!'}
          </Text>
          <Text style={[styles.motivationText, { color: theme.colors.textSecondary }]}>
            {score >= 90
              ? 'Mükemmel performans! Bilgileriniz çok güçlü.'
              : score >= 80
              ? 'Çok başarılı bir performans sergilediz!'
              : score >= 70
              ? 'İyi bir performans! Biraz daha pratik yaparak gelişebilirsiniz.'
              : score >= 60
              ? 'Orta düzeyde bir performans. Daha fazla çalışma ile başarıyı artırabilirsiniz.'
              : 'Gelişim için daha fazla pratik yapmanız önerilir. Vazgeçmeyin!'}
          </Text>
        </View>
      </ScrollView>

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.primaryButton, { backgroundColor: theme.colors.primary }]}
          onPress={handleRetakeQuiz}
          activeOpacity={0.8}
        >
          <Text style={[styles.primaryButtonText, { color: theme.colors.onPrimary }]}>
            🔄 Tekrar Dene
          </Text>
        </TouchableOpacity>

        <View style={styles.secondaryButtons}>
          <TouchableOpacity
            style={[styles.secondaryButton, { backgroundColor: theme.colors.surface }]}
            onPress={handleViewStatistics}
            activeOpacity={0.8}
          >
            <Text style={[styles.secondaryButtonText, { color: theme.colors.text }]}>
              📊 İstatistikler
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.secondaryButton, { backgroundColor: theme.colors.surface }]}
            onPress={handleBackToHome}
            activeOpacity={0.8}
          >
            <Text style={[styles.secondaryButtonText, { color: theme.colors.text }]}>
              🏠 Ana Sayfa
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  performanceHeader: {
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 16,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  performanceIcon: {
    fontSize: 64,
    marginBottom: 10,
  },
  performanceTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  scoreText: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  lessonText: {
    fontSize: 16,
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statCard: {
    width: (screenWidth - 60) / 2,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  statTitle: {
    fontSize: 14,
    marginBottom: 8,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  statSubtitle: {
    fontSize: 12,
  },
  progressSection: {
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  progressTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBarBackground: {
    flex: 1,
    height: 12,
    borderRadius: 6,
    marginRight: 15,
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 6,
    minWidth: 8,
  },
  progressPercentage: {
    fontSize: 16,
    fontWeight: 'bold',
    minWidth: 40,
  },
  breakdownSection: {
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  breakdownTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
  },
  breakdownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  breakdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  breakdownDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  breakdownText: {
    fontSize: 16,
    fontWeight: '500',
  },
  motivationSection: {
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  motivationTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  motivationText: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  primaryButton: {
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  primaryButtonText: {
    fontSize: 16,
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

export default ResultScreen;