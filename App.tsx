import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';

const App = () => {
  const medicalCategories = [
    '🫀 Dahiliye',
    '👶 Kadın Hastalıkları ve Doğum', 
    '🧬 Biyokimya',
    '💊 Farmakoloji',
    '🩺 Küçük Stajlar',
    '🦴 Anatomi',
    '🦠 Mikrobiyoloji',
    '🔬 Patoloji',
    '🏥 Genel Cerrahi',
    '👶 Pediatri',
    '🧠 Fizyoloji, Histoloji ve Embriyoloji',
  ];

  const startQuiz = (category: string) => {
    Alert.alert(
      '🎯 Quiz Başlıyor!',
      `${category} kategorisinde quiz başlatılıyor...\n\nBu demo sürümüdür. Gerçek sorular yakında eklenecek!`,
      [
        {text: 'Tamam', style: 'default'},
        {text: 'GitHub\'ı Ziyaret Et', onPress: () => {
          Alert.alert('🔗 GitHub', 'github.com/msbugra/Tusapp');
        }},
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#667eea" />
      <View style={styles.header}>
        <Text style={styles.title}>🏥 Dersli Quiz</Text>
        <Text style={styles.subtitle}>TUS Sınavı Hazırlık Uygulaması</Text>
      </View>
      
      <ScrollView style={styles.content}>
        <View style={styles.stats}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>1000+</Text>
            <Text style={styles.statLabel}>Soru</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>11</Text>
            <Text style={styles.statLabel}>Kategori</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>100%</Text>
            <Text style={styles.statLabel}>Ücretsiz</Text>
          </View>
        </View>

        <Text style={styles.categoriesTitle}>📚 Kategoriler</Text>
        
        {medicalCategories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={styles.categoryButton}
            onPress={() => startQuiz(category)}
          >
            <Text style={styles.categoryText}>{category}</Text>
            <Text style={styles.categoryArrow}>▶</Text>
          </TouchableOpacity>
        ))}

        <View style={styles.info}>
          <Text style={styles.infoTitle}>📱 Demo Sürüm</Text>
          <Text style={styles.infoText}>
            Bu, Dersli Quiz uygulamasının demo sürümüdür.{'\n'}
            Gerçek sorular ve özellikler yakında eklenecek!{'\n\n'}
            🔗 GitHub: github.com/msbugra/Tusapp{'\n'}
            🌐 Web: msbugra.github.io/Tusapp/
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#667eea',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#667eea',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.9)',
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    marginBottom: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  categoriesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  categoryButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#4CAF50',
  },
  categoryText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  categoryArrow: {
    fontSize: 16,
    color: '#4CAF50',
  },
  info: {
    backgroundColor: '#e3f2fd',
    padding: 15,
    borderRadius: 10,
    marginVertical: 20,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1976d2',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
});

export default App;