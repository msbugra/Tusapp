# 🚀 GitHub'a Yükleme ve Otomatik APK Build Rehberi

## 📂 GitHub Repository Oluşturma ve Yükleme

### 1️⃣ GitHub'da Repository Oluşturma

#### 🌐 GitHub.com'da:
1. **GitHub.com**'a gidin ve giriş yapın
2. **"+"** butonuna tıklayın → **"New repository"** seçin
3. **Repository name**: `TusQuizApp` yazın
4. **Description**: `Turkish Medical Quiz App - TUS Sınavı Hazırlık Uygulaması`
5. **Public** seçin (ücretsiz APK paylaşımı için)
6. **"Create repository"** butonuna tıklayın

#### ✅ Repository Ayarları:
- **Repository ismi**: `TusQuizApp`
- **Görünürlük**: Public (önemli!)
- **README**: Eklemeyın (zaten var)
- **License**: MIT veya Apache 2.0 (isteğe bağlı)

### 2️⃣ Yerel Projeyi Git'e Hazırlama

#### 📁 Proje Dizininde Terminal Açın:
```bash
# Git repository'yi başlatın
git init

# Dosyaları staging area'ya ekleyin
git add .

# İlk commit'i oluşturun
git commit -m "🎉 Initial commit - Turkish Medical Quiz App

✨ Features:
- React Native quiz application
- 11 medical categories for TUS exam
- Dark/Light theme support
- Offline capability
- Turkish language interface
- Automatic APK building with GitHub Actions"

# Ana branch'i main olarak ayarlayın
git branch -M main

# GitHub repository'yi remote olarak ekleyin
git remote add origin https://github.com/KULLANICI_ADINIZ/TusQuizApp.git

# İlk push'u yapın
git push -u origin main
```

**⚠️ KULLANICI_ADINIZ'ı kendi GitHub kullanıcı adınızla değiştirin!**

### 3️⃣ GitHub Actions'ı Aktifleştirme

#### 🤖 Otomatik Build Sistemi:
Repository yüklendikten sonra GitHub Actions otomatik olarak çalışacak:

1. **Actions** sekmesine gidin
2. **"🚀 Build and Release APK"** workflow'unu görün
3. **İlk build** otomatik başlayacak (~5-10 dakika)
4. **Build tamamlandığında** Artifacts bölümünde APK bulacaksınız

## 🏷️ Release Oluşturma (APK Yayınlama)

### 📋 İlk Release için Tag Oluşturma:

#### 🔖 Terminal'de Tag Oluşturma:
```bash
# Yeni versiyon tag'i oluşturun
git tag v1.0.0

# Tag'i GitHub'a gönderin
git push origin v1.0.0
```

#### ✨ Otomatik Olarak Gerçekleşenler:
1. **GitHub Actions** build'i başlatır
2. **Release APK** oluşturulur
3. **GitHub Release** sayfası otomatik oluşur
4. **APK dosyası** release'e eklenir
5. **İndirme linkleri** hazır hale gelir

### 🎯 Release Sonucu:
- **Release sayfası**: `https://github.com/KULLANICI_ADINIZ/TusQuizApp/releases`
- **Direkt APK linki**: `https://github.com/KULLANICI_ADINIZ/TusQuizApp/releases/latest/download/TusQuizApp-release.apk`

## 🔄 Güncellemeler ve Yeni Sürümler

### 📝 Kod Değişiklikleri Yapma:

#### 🛠️ Geliştirme Süreci:
```bash
# Değişiklikleri yapın (yeni sorular, özellikler vs.)
# Örnek: src/data/questions.ts dosyasına yeni sorular ekleyin

# Değişiklikleri commit edin
git add .
git commit -m "✨ Add 50 new anatomy questions

- Added comprehensive anatomy question set
- Improved question explanations  
- Fixed minor UI bugs"

# GitHub'a gönderin (Debug APK otomatik oluşur)
git push origin main
```

#### 🚀 Yeni Sürüm Yayınlama:
```bash
# Yeni versiyon tag'i oluşturun
git tag v1.1.0

# Tag'i GitHub'a gönderin (Release APK + GitHub Release oluşur)
git push origin v1.1.0
```

### 📊 Sürüm Numaralama:
- **v1.0.0**: İlk stabil sürüm
- **v1.1.0**: Yeni özellikler eklendi
- **v1.1.1**: Küçük hatalar düzeltildi
- **v2.0.0**: Büyük güncellemeler

## 🔐 Güvenlik ve Secrets (Gelişmiş)

### 🔑 Release APK için Keystore Kurulumu:

#### ⚠️ Sadece Güvenli Release APK için:
1. **Settings** → **Secrets and variables** → **Actions**
2. Aşağıdaki secrets'ları ekleyin:

```
ANDROID_KEYSTORE: [Base64 encoded keystore file]
KEYSTORE_ALIAS: [Your key alias]
KEYSTORE_PASSWORD: [Your keystore password]  
KEY_PASSWORD: [Your key password]
```

#### 📝 Keystore Oluşturma:
```bash
# Yeni keystore oluşturun
keytool -genkeypair -v -storetype PKCS12 \
  -keystore android/app/my-upload-key.keystore \
  -alias my-key-alias \
  -keyalg RSA \
  -keysize 2048 \
  -validity 10000

# Base64'e çevirin (GitHub Secret için)
base64 android/app/my-upload-key.keystore
```

## 📱 APK Paylaşım Stratejisi

### 🌐 Kullanıcılarla Paylaşım:

#### 🔗 Paylaşım Linkleri:
```
📱 Ana İndirme Sayfası:
https://github.com/KULLANICI_ADINIZ/TusQuizApp/releases

🔄 Son Sürüm (Her Zaman Güncel):
https://github.com/KULLANICI_ADINIZ/TusQuizApp/releases/latest

⚡ Direkt APK İndirme:
https://github.com/KULLANICI_ADINIZ/TusQuizApp/releases/latest/download/TusQuizApp-release.apk
```

#### 📢 Sosyal Medya Paylaşımı:
```
🏥 Dersli Quiz - TUS Sınavı Hazırlık Uygulaması!

✅ 11 farklı tıp dalından sorular
✅ Offline çalışma
✅ Koyu/Açık tema
✅ Detaylı sonuç analizi
✅ Tamamen ücretsiz!

📱 Android APK İndir:
[GitHub Link]

#TUS #TıpEğitimi #MedicalQuiz #TUS2024
```

## 📈 Analytics ve Takip

### 📊 GitHub İstatistikleri:

#### 🎯 Takip Edilebilir Metrikler:
- **Release indirme sayıları**
- **Repository star/fork sayısı**
- **Traffic ve ziyaretçi istatistikleri**
- **Clone ve indirme verileri**

#### 📋 GitHub Insights:
1. **Repository** → **Insights** → **Traffic**
2. **Release** sayfasında indirme sayıları
3. **Actions** sekmesinde build istatistikleri

## 🛠️ Maintenance (Bakım)

### 🔄 Düzenli Bakım Görevleri:

#### 📅 Haftalık:
- **Issues** kontrol edin
- **Pull Request**'leri gözden geçirin
- **Build**'lerin başarılı olduğunu kontrol edin

#### 📅 Aylık:
- **Dependencies** güncelleyin: `npm update`
- **Security** açıklıklarını kontrol edin
- **New features** kullanıcı geri bildirimlerine göre ekleyin

#### 📅 Sürüm Öncesi:
- **Test** işlemlerini yapın
- **Release notes** hazırlayın
- **APK'yı manuel test** edin

## 🆘 Sorun Giderme

### ❌ Yaygın Sorunlar ve Çözümleri:

#### 🔴 "Build Failed" Hatası:
```bash
# Çözüm 1: Dependencies'leri kontrol edin
npm install

# Çözüm 2: Cache'i temizleyin
npm start -- --reset-cache

# Çözüm 3: GitHub Actions'da log'ları kontrol edin
```

#### 🔴 "Permission Denied" Hatası:
```bash
# Çözüm: Git credentials'ları kontrol edin
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# SSH key ekleyin veya HTTPS kullanın
```

#### 🔴 APK İndirme Problemi:
- **Repository Public** olduğundan emin olun
- **Release** düzgün oluşturulmuş mu kontrol edin
- **Actions** permissions aktif mi bakın

### 📞 Destek Alımı:
- **GitHub Issues**: Teknik problemler için
- **GitHub Discussions**: Genel sorular için
- **Stack Overflow**: React Native sorunları için

---

## 🎯 Hızlı Başlangıç Özetı

### 📋 5 Adımda GitHub'a Yükleme:

1. **GitHub'da repository oluşturun**: `TusQuizApp`
2. **Projeyi Git'e ekleyin**: `git init` → `git add .` → `git commit`
3. **GitHub'a gönderin**: `git push origin main`
4. **İlk tag oluşturun**: `git tag v1.0.0` → `git push origin v1.0.0`
5. **APK'yı indirin**: Releases sayfasından

### 🎉 Sonuç:
- ✅ **GitHub Repository**: Kodunuz güvende
- ✅ **Otomatik Build**: Her commit'te APK
- ✅ **Public APK**: Herkes indirebilir
- ✅ **Versiyon Takibi**: Profesyonel sürüm yönetimi
- ✅ **İstatistikler**: Kullanım analizi

**GitHub'da profesyonel APK paylaşımı! 🚀📱**