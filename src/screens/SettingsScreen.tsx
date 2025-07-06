import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

const SettingsScreen = () => {
  const { theme, toggleTheme, isSystemTheme, setSystemTheme } = useTheme();

  const SettingItem = ({ 
    title, 
    subtitle, 
    rightComponent,
    onPress 
  }: {
    title: string;
    subtitle?: string;
    rightComponent?: React.ReactNode;
    onPress?: () => void;
  }) => (
    <TouchableOpacity
      style={[styles.settingItem, { backgroundColor: theme.colors.surface }]}
      onPress={onPress}
      disabled={!onPress}
      activeOpacity={onPress ? 0.7 : 1}
    >
      <View style={styles.settingContent}>
        <Text style={[styles.settingTitle, { color: theme.colors.text }]}>
          {title}
        </Text>
        {subtitle && (
          <Text style={[styles.settingSubtitle, { color: theme.colors.textSecondary }]}>
            {subtitle}
          </Text>
        )}
      </View>
      {rightComponent}
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Tema Ayarları */}
        <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
          Tema Ayarları
        </Text>
        
        <SettingItem
          title="Sistem Temasını Kullan"
          subtitle="Cihazınızın tema ayarını takip eder"
          rightComponent={
            <Switch
              value={isSystemTheme}
              onValueChange={setSystemTheme}
              trackColor={{ 
                false: theme.colors.border, 
                true: theme.colors.primary 
              }}
              thumbColor={theme.colors.onSurface}
            />
          }
        />

        {!isSystemTheme && (
          <SettingItem
            title="Koyu Tema"
            subtitle={theme.dark ? "Aktif" : "Pasif"}
            rightComponent={
              <Switch
                value={theme.dark}
                onValueChange={toggleTheme}
                trackColor={{ 
                  false: theme.colors.border, 
                  true: theme.colors.primary 
                }}
                thumbColor={theme.colors.onSurface}
              />
            }
          />
        )}

        {/* Uygulama Bilgileri */}
        <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
          Uygulama
        </Text>
        
        <SettingItem
          title="Versiyon"
          subtitle="1.0.0"
        />

        <SettingItem
          title="Geliştirici"
          subtitle="TUS Quiz App"
        />

        {/* Hakkında */}
        <View style={[styles.aboutSection, { backgroundColor: theme.colors.surface }]}>
          <Text style={[styles.aboutTitle, { color: theme.colors.text }]}>
            Dersli Quiz Hakkında
          </Text>
          <Text style={[styles.aboutText, { color: theme.colors.textSecondary }]}>
            Bu uygulama tıp öğrencileri için geliştirilmiş bir quiz uygulamasıdır. 
            TUS sınavına hazırlık sürecinde bilgilerinizi test edebilir ve 
            eksik olduğunuz konuları belirleyebilirsiniz.
          </Text>
          <Text style={[styles.aboutText, { color: theme.colors.textSecondary }]}>
            Sorular farklı tıp branşlarından seçilerek hazırlanmış olup, 
            güncel tıp literatürüne uygun açıklamalar içermektedir.
          </Text>
        </View>

        {/* İletişim */}
        <View style={[styles.contactSection, { backgroundColor: theme.colors.surface }]}>
          <Text style={[styles.contactTitle, { color: theme.colors.text }]}>
            İletişim
          </Text>
          <Text style={[styles.contactText, { color: theme.colors.textSecondary }]}>
            Geri bildirimleriniz ve önerileriniz için:
          </Text>
          <Text style={[styles.contactEmail, { color: theme.colors.primary }]}>
            info@dersli-quiz.com
          </Text>
        </View>
      </ScrollView>
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
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
    marginTop: 20,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 8,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  settingContent: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 2,
  },
  settingSubtitle: {
    fontSize: 14,
    opacity: 0.8,
  },
  aboutSection: {
    padding: 20,
    borderRadius: 16,
    marginTop: 20,
    marginBottom: 10,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
  },
  aboutText: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 12,
  },
  contactSection: {
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  contactText: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 8,
  },
  contactEmail: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default SettingsScreen;