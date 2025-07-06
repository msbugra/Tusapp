# 🔧 GitHub Actions APK Build Sorun Giderme Rehberi

## 🚫 "APK Bulunamadı" Sorunları

### 🔍 Sorun Teşhisi

APK'lar görünmüyorsa şu durumlardan biri söz konusu olabilir:

#### 1️⃣ **Repository Ayarları Problemi**
- Repository **PUBLIC** değil
- GitHub Actions **disabled** (kapalı)
- Workflow permissions eksik

#### 2️⃣ **Build Çalışmamış**
- İlk commit yapılmamış
- Tag oluşturulmamış
- GitHub Actions başlamamış

#### 3️⃣ **Build Başarısız**
- Dependencies eksik
- Gradle konfigürasyonu hatalı
- Java/Node.js versiyonu uyumlu değil

## 🛠️ Adım Adım Çözüm

### 📋 1️⃣ Repository Ayarlarını Kontrol Edin

#### ✅ Repository Durumu:
```bash
# GitHub'da kontrol edin:
# - Repository PUBLIC mu?
# - Actions sekmesi var mı?
# - Settings → Actions → General → Allow all actions
```

#### 🔧 Repository Ayarlarını Düzeltin:
1. **Repository Settings** → **General**
2. **"Change repository visibility"** → **Make public**
3. **Actions** → **General** → **Allow all actions**
4. **Actions permissions** → **Allow GitHub Actions**

### 📋 2️⃣ GitHub Actions'ı Çalıştırın

#### 🚀 Manuel Trigger:
1. **Actions** sekmesine gidin
2. **"🚀 Build and Release APK"** seçin
3. **"Run workflow"** butonuna basın
4. **"Run workflow"** tıklayın (main branch)

#### 🏷️ Tag ile Otomatik Trigger:
```bash
# Terminal'de tag oluşturun
git tag v1.0.0
git push origin v1.0.0

# Bu otomatik olarak Release APK build'i tetikler
```

### 📋 3️⃣ Build Durumunu Kontrol Edin

#### 🔍 Build Logs:
1. **Actions** → **Latest workflow run**
2. **"build-android"** job'ına tıklayın
3. **Her step'i kontrol edin**
4. **Hata varsa logları inceleyin**

#### ⚠️ Yaygın Hata Mesajları:

**"gradlew: Permission denied":**
```bash
# Çözüm: Gradlew dosyasını executable yapın
chmod +x android/gradlew
git add android/gradlew
git commit -m "🔧 Fix gradlew permissions"
git push origin main
```

**"Gradle version not supported":**
```bash
# Çözüm: Gradle versiyonunu güncelleyin
# android/gradle/wrapper/gradle-wrapper.properties dosyasında:
distributionUrl=https\://services.gradle.org/distributions/gradle-8.0-bin.zip
```

**"Java version not supported":**
```bash
# Çözüm: GitHub Actions Java versiyonunu kontrol edin
# .github/workflows/build-apk.yml dosyasında:
java-version: '17'  # veya '11'
```

### 📋 4️⃣ Eksik Dosyaları Ekleyin

#### 📁 Gerekli Dosyalar:

**.github/workflows/build-apk.yml** ✅ (Hazır)
**android/gradlew** ✅ (Hazır)
**android/gradlew.bat** ✅ (Hazır)
**android/gradle/wrapper/gradle-wrapper.properties** ✅ (Hazır)

#### 📦 Gradle Wrapper Jar (Eksik):
```bash
# Gradle wrapper jar dosyasını oluşturun
cd android
./gradlew wrapper
# Eğer bu çalışmazsa:
gradle wrapper --gradle-version 8.0
```

#### 🔄 Dosyaları Commit Edin:
```bash
git add .
git commit -m "🔧 Add missing Gradle wrapper files"
git push origin main
```

## 🎯 Hızlı Çözüm Checklist

### ✅ 5 Dakikada Çözüm:

1. **Repository Public** yap
2. **Actions permissions** aç
3. **Terminal'de çalıştır**:
   ```bash
   chmod +x android/gradlew
   git add .
   git commit -m "🔧 Fix permissions and add missing files"
   git push origin main
   git tag v1.0.0
   git push origin v1.0.0
   ```
4. **GitHub Actions** çalışmasını bekle (5-10 dakika)
5. **Releases** sayfasını kontrol et

### 🔄 Alternatif Çözüm: Manuel APK Build

#### 💻 Yerel Bilgisayarda APK Oluştur:
```bash
# Dependencies'leri kur
npm install

# Android APK'yı build et
cd android
./gradlew assembleDebug

# APK'yı bul
# android/app/build/outputs/apk/debug/app-debug.apk
```

#### 📤 Manuel Upload:
1. **GitHub Releases** → **"Create a new release"**
2. **Tag version**: `v1.0.0`
3. **Release title**: `Dersli Quiz v1.0.0`
4. **Upload APK** manually
5. **Publish release**

## 🚨 Acil Durum Çözümleri

### 🔥 Hızlı APK Paylaşımı (GitHub Actions Olmadan)

#### 📱 Direkt APK Paylaşımı:
1. **Yerel APK build** edin
2. **Google Drive/Dropbox** yükleyin
3. **Public link** oluşturun
4. **Linki paylaşın**

#### 🌐 Alternatif Hosting:
- **Firebase Hosting** (Ücretsiz)
- **Netlify** (Ücretsiz)
- **Vercel** (Ücretsiz)

### 🔄 GitHub Actions Sıfırlama

#### 🧹 Temiz Başlangıç:
```bash
# Workflow'u sil ve yeniden oluştur
rm -rf .github/workflows/build-apk.yml
git add .
git commit -m "🗑️ Remove old workflow"
git push origin main

# Yeni workflow'u ekle
# (Yukarıdaki build-apk.yml dosyasını yeniden oluştur)
git add .
git commit -m "✨ Add new workflow"
git push origin main
```

## 📊 Build Durumu Kontrol

### 🔍 Debug Bilgileri:

#### 📋 GitHub Actions Status:
```
✅ Başarılı: Yeşil check mark
⚠️ Beklemede: Sarı circle
❌ Başarısız: Kırmızı X
🔄 Çalışıyor: Mavi circle
```

#### 📈 Build Süreleri:
- **Debug APK**: 3-5 dakika
- **Release APK**: 5-10 dakika
- **İlk build**: 10-15 dakika (cache yok)

### 🎯 Başarı Göstergeleri:

#### ✅ Build Başarılı:
- **Actions** → Yeşil check mark
- **Artifacts** bölümünde APK dosyası
- **Releases** sayfasında APK linki

#### ❌ Build Başarısız:
- **Actions** → Kırmızı X
- **Logs** bölümünde hata mesajı
- **Artifacts** bölümü boş

## 📞 Destek Alma

### 🆘 Hâlâ Çalışmıyor mu?

#### 🔧 Detaylı Bilgi Paylaşın:
1. **Repository URL**
2. **Build logs** (hata mesajları)
3. **Actions screenshots**
4. **Denediğiniz çözümler**

#### 📧 Yardım Kanalları:
- **GitHub Issues** → Repository'nizde issue açın
- **GitHub Discussions** → Community help
- **Stack Overflow** → React Native + GitHub Actions

### 🎯 Garantili Çözüm:

#### 💯 %100 Çalışır Yöntem:
1. **Yeni repository** oluşturun
2. **Bütün dosyaları** kopyalayın
3. **Adım adım yükleyin**
4. **Her commit'te kontrol edin**

---

## 🎉 Başarı Sonrası

### 🚀 APK Hazır Olunca:

#### 🔗 Paylaşım Linkleri:
```
📱 Ana Sayfa:
https://github.com/KULLANICI_ADINIZ/TusQuizApp/releases

⚡ Direkt İndirme:
https://github.com/KULLANICI_ADINIZ/TusQuizApp/releases/latest/download/TusQuizApp-release.apk
```

#### 📢 Duyuru Yapın:
- **Sosyal medya** paylaşımı
- **Arkadaşlarınızla** linki paylaşın
- **Tıp öğrencisi grupları**nda tanıtın

**GitHub Actions APK build sorunları çözülüyor! 🛠️✅**