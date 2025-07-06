import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  BackHandler,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import { useTheme } from '../contexts/ThemeContext';
import { Question, getRandomQuestions } from '../data/questions';

type QuizScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Quiz'>;
type QuizScreenRouteProp = { params: { lesson: string; categoryName: string } };

interface QuizAnswer {
  questionId: number;
  userAnswer: string;
  isCorrect: boolean;
  timeSpent: number;
}

const QuizScreen = () => {
  const navigation = useNavigation<QuizScreenNavigationProp>();
  const route = useRoute<QuizScreenRouteProp>();
  const { theme } = useTheme();
  
  const { lesson, categoryName } = route.params;
  
  // Quiz State
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0);
  const [startTime, setStartTime] = useState(Date.now());
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  // Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Initialize quiz
  useEffect(() => {
    const quizQuestions = getRandomQuestions(lesson, 20);
    setQuestions(quizQuestions);
    setStartTime(Date.now());
  }, [lesson]);

  // Back handler
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      handleExitQuiz();
      return true;
    });

    return () => backHandler.remove();
  }, []);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleAnswerSelect = (answer: string) => {
    if (showExplanation) return;
    setSelectedAnswer(answer);
  };

  const handleSubmitAnswer = () => {
    if (!selectedAnswer || !currentQuestion) return;

    const isCorrect = selectedAnswer === currentQuestion.correct;
    const questionStartTime = startTime;
    const questionEndTime = Date.now();
    const questionTimeSpent = Math.floor((questionEndTime - questionStartTime) / 1000);

    const newAnswer: QuizAnswer = {
      questionId: currentQuestion.id,
      userAnswer: selectedAnswer,
      isCorrect,
      timeSpent: questionTimeSpent,
    };

    setAnswers(prev => [...prev, newAnswer]);
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      finishQuiz();
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setStartTime(Date.now());
    }
  };

  const finishQuiz = () => {
    const correctAnswers = answers.filter(a => a.isCorrect).length + 
                          (selectedAnswer === currentQuestion.correct ? 1 : 0);
    const totalQuestions = questions.length;
    const score = Math.round((correctAnswers / totalQuestions) * 100);

    navigation.navigate('Result', {
      score,
      totalQuestions,
      correctAnswers,
      incorrectAnswers: totalQuestions - correctAnswers,
      lesson,
      timeSpent,
      answers: [...answers, {
        questionId: currentQuestion.id,
        userAnswer: selectedAnswer || '',
        isCorrect: selectedAnswer === currentQuestion.correct,
        timeSpent: 0,
      }],
    });
  };

  const handleExitQuiz = () => {
    Alert.alert(
      'Quiz\'ten Çık',
      'Quiz\'i tamamlamadan çıkmak istediğinizden emin misiniz?',
      [
        { text: 'Devam Et', style: 'cancel' },
        { text: 'Çık', style: 'destructive', onPress: () => navigation.goBack() },
      ]
    );
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const OptionButton = ({ 
    option, 
    text, 
    isSelected, 
    isCorrect, 
    showResult 
  }: {
    option: string;
    text: string;
    isSelected: boolean;
    isCorrect: boolean;
    showResult: boolean;
  }) => {
    let backgroundColor = theme.colors.surface;
    let textColor = theme.colors.text;
    let borderColor = theme.colors.border;

    if (showResult) {
      if (isCorrect) {
        backgroundColor = theme.colors.success;
        textColor = theme.colors.onSuccess;
        borderColor = theme.colors.success;
      } else if (isSelected && !isCorrect) {
        backgroundColor = theme.colors.error;
        textColor = theme.colors.onError;
        borderColor = theme.colors.error;
      }
    } else if (isSelected) {
      backgroundColor = theme.colors.primary;
      textColor = theme.colors.onPrimary;
      borderColor = theme.colors.primary;
    }

    return (
      <TouchableOpacity
        style={[
          styles.optionButton,
          {
            backgroundColor,
            borderColor,
          },
        ]}
        onPress={() => handleAnswerSelect(option)}
        disabled={showExplanation}
        activeOpacity={0.8}
      >
        <Text style={[styles.optionLabel, { color: textColor }]}>
          {option}
        </Text>
        <Text style={[styles.optionText, { color: textColor }]}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  };

  if (questions.length === 0) {
    return (
      <View style={[styles.container, styles.loadingContainer, { backgroundColor: theme.colors.background }]}>
        <Text style={[styles.loadingText, { color: theme.colors.text }]}>
          Sorular yükleniyor...
        </Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: theme.colors.surface }]}>
        <View style={styles.headerLeft}>
          <Text style={[styles.questionNumber, { color: theme.colors.text }]}>
            {currentQuestionIndex + 1} / {questions.length}
          </Text>
          <Text style={[styles.timer, { color: theme.colors.textSecondary }]}>
            ⏱️ {formatTime(timeSpent)}
          </Text>
        </View>
        <TouchableOpacity
          style={[styles.exitButton, { backgroundColor: theme.colors.error }]}
          onPress={handleExitQuiz}
        >
          <Text style={[styles.exitButtonText, { color: theme.colors.onError }]}>
            Çık
          </Text>
        </TouchableOpacity>
      </View>

      {/* Progress Bar */}
      <View style={[styles.progressContainer, { backgroundColor: theme.colors.border }]}>
        <View
          style={[
            styles.progressBar,
            { 
              width: `${progress}%`,
              backgroundColor: theme.colors.primary,
            },
          ]}
        />
      </View>

      {/* Question */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={[styles.questionText, { color: theme.colors.text }]}>
          {currentQuestion.question}
        </Text>

        {/* Options */}
        <View style={styles.optionsContainer}>
          {Object.entries(currentQuestion.options).map(([option, text]) => (
            <OptionButton
              key={option}
              option={option}
              text={text}
              isSelected={selectedAnswer === option}
              isCorrect={option === currentQuestion.correct}
              showResult={showExplanation}
            />
          ))}
        </View>

        {/* Explanation */}
        {showExplanation && (
          <View style={[styles.explanationContainer, { backgroundColor: theme.colors.surface }]}>
            <Text style={[styles.explanationTitle, { color: theme.colors.text }]}>
              Açıklama:
            </Text>
            <Text style={[styles.explanationText, { color: theme.colors.textSecondary }]}>
              {currentQuestion.explanation}
            </Text>
          </View>
        )}
      </ScrollView>

      {/* Bottom Button */}
      <View style={styles.bottomContainer}>
        {!showExplanation ? (
          <TouchableOpacity
            style={[
              styles.submitButton,
              {
                backgroundColor: selectedAnswer ? theme.colors.primary : theme.colors.border,
              },
            ]}
            onPress={handleSubmitAnswer}
            disabled={!selectedAnswer}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.submitButtonText,
                {
                  color: selectedAnswer ? theme.colors.onPrimary : theme.colors.textMuted,
                },
              ]}
            >
              Cevabı Onayla
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.nextButton, { backgroundColor: theme.colors.success }]}
            onPress={handleNextQuestion}
            activeOpacity={0.8}
          >
            <Text style={[styles.nextButtonText, { color: theme.colors.onSuccess }]}>
              {isLastQuestion ? 'Quiz\'i Bitir' : 'Sonraki Soru'}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    fontWeight: '500',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  headerLeft: {
    flex: 1,
  },
  questionNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  timer: {
    fontSize: 14,
  },
  exitButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  exitButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  progressContainer: {
    height: 4,
    marginHorizontal: 20,
    borderRadius: 2,
    marginTop: 10,
  },
  progressBar: {
    height: '100%',
    borderRadius: 2,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  questionText: {
    fontSize: 18,
    lineHeight: 26,
    marginBottom: 25,
    fontWeight: '500',
  },
  optionsContainer: {
    marginBottom: 20,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    borderWidth: 2,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  optionLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 12,
    minWidth: 20,
  },
  optionText: {
    fontSize: 16,
    flex: 1,
    lineHeight: 22,
  },
  explanationContainer: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  explanationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  explanationText: {
    fontSize: 15,
    lineHeight: 22,
  },
  bottomContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  submitButton: {
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  nextButton: {
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default QuizScreen;