# 📱 GitHub'dan APK İndirme ve Kurulum Rehberi

## 🚀 GitHub'dan Direkt APK İndirme Yöntemleri

### 📥 Yöntem 1: GitHub Releases'den İndirme (Önerilen)

#### 🎯 Release APK İndirme:
1. **GitHub Repository** sayfasına gidin
2. **"Releases"** bölümüne tıklayın (sağ tarafta)
3. **En son sürümü** seçin (örn: v1.0.0)
4. **Assets** bölümünden **`TusQuizApp-release.apk`** dosyasını indirin
5. Telefona aktarın ve kurun

#### 🔗 Direkt Link Örnekleri:
```
https://github.com/USERNAME/TusQuizApp/releases/latest/download/TusQuizApp-release.apk
https://github.com/USERNAME/TusQuizApp/releases/download/v1.0.0/TusQuizApp-release.apk
```

### 📦 Yöntem 2: GitHub Actions Artifacts'den İndirme

#### 🔧 Development APK İndirme:
1. **Actions** sekmesine tıklayın
2. **"🚀 Build and Release APK"** workflow'unu seçin  
3. **En son başarılı build**'i seçin (yeşil ✅ işareti)
4. **Artifacts** bölümünden **`TusQuizApp-debug.apk`** indirin
5. ZIP dosyasını açın ve APK'yı çıkarın

## 🛠️ GitHub Repository Kurulumu

### Repository'yi GitHub'a Yükleme:

#### 1️⃣ GitHub Repository Oluşturma:
```bash
# GitHub'da yeni repository oluşturun: TusQuizApp
git init
git add .
git commit -m "🎉 Initial commit - Turkish Medical Quiz App"
git branch -M main
git remote add origin https://github.com/USERNAME/TusQuizApp.git
git push -u origin main
```

#### 2️⃣ İlk Tag Oluşturma (Release için):
```bash
git tag v1.0.0
git push origin v1.0.0
```

### GitHub Actions Otomatik Build:

#### ✅ Otomatik APK Build Özellikleri:
- **Her commit'te** Debug APK oluşturur
- **Tag'lerde** Release APK oluşturur
- **GitHub Releases** otomatik yayınlar
- **APK dosyalarını** direkt indirilebilir yapar

## 📲 Telefona Kurulum

### 🔗 Direkt Telefon İndirilmesi:

#### Android Browser'dan:
1. Telefon tarayıcısında GitHub release linkini açın
2. APK dosyasını direkt indirin
3. İndirilenler'den dosyaya dokunun
4. Kurulumu tamamlayın

#### QR Kod ile (Opsiyonel):
- GitHub release linkini QR koda çevirin
- Telefon kamerasıyla QR kodu okutun
- Direkt APK sayfasına yönlendirin

### 📱 Kurulum Adımları:

#### 1️⃣ Bilinmeyen Kaynakları Açın:
**Android 8.0+:**
- Ayarlar → Güvenlik → Bilinmeyen kaynaklardan yükleme
- Tarayıcınızı veya dosya yöneticinizi seçin
- İzin verin

**Android 7.0 ve altı:**
- Ayarlar → Güvenlik → Bilinmeyen kaynaklar → Açık

#### 2️⃣ APK'yı Kurun:
- İndirilen APK'ya dokunun
- Yükle'ye basın
- Kurulum tamamlanana bekleyin
- Uygulamayı açın

## 🔄 Otomatik Güncelleme Sistemi

### GitHub Actions ile Otomatik Build:

#### 📋 Build Tetikleyicileri:
- **Push** (main/master branch) → Debug APK
- **Tag** (v*) → Release APK + GitHub Release
- **Pull Request** → Test Build
- **Manuel** → İsteğe bağlı build

#### 📊 Build Bilgileri:
- **Build süresi**: ~5-10 dakika
- **APK boyutu**: 10-20MB (sıkıştırılmış)
- **Platform**: Ubuntu (GitHub Actions)
- **Node.js**: v18, Java: 11, Android SDK: 33

## 📈 Sürüm Yönetimi

### Yeni Sürüm Yayınlama:

#### 🏷️ Tag ile Release:
```bash
# Yeni özellikler ekleyin
git add .
git commit -m "✨ Add new medical categories"

# Yeni sürüm tag'i oluşturun
git tag v1.1.0
git push origin v1.1.0

# GitHub Actions otomatik olarak:
# ✅ Release APK'yı build eder
# ✅ GitHub Release oluşturur  
# ✅ APK'yı release'e ekler
```

#### 📝 Release Notes:
GitHub Actions otomatik olarak şunları içeren release notları oluşturur:
- **Yeni özellikler** listesi
- **Kurulum talimatları**
- **Sistem gereksinimleri**
- **İndirme linkleri**

## 🌐 Paylaşım Linkleri

### 📤 Kullanıcılarla Paylaşım:

#### 🔗 Release Linkleri:
```
Son sürüm APK:
https://github.com/USERNAME/TusQuizApp/releases/latest

Belirli sürüm:
https://github.com/USERNAME/TusQuizApp/releases/tag/v1.0.0

Direkt APK indirme:
https://github.com/USERNAME/TusQuizApp/releases/latest/download/TusQuizApp-release.apk
```

#### 📱 Mobil Friendly Linkler:
- GitHub mobile sitesi optimize edilmiş
- APK indirme direkt telefonda çalışır
- QR kod ile kolay paylaşım

## 🔐 Güvenlik ve İmzalama

### 🔑 APK İmzalama:

#### Release APK'lar için:
- **GitHub Secrets** ile güvenli keystore
- **Otomatik imzalama** GitHub Actions'da
- **Doğrulanmış APK** dosyaları

#### Debug APK'lar için:
- **Debug keystore** (test amaçlı)
- **Geliştirme için güvenli**
- **Hızlı test ve paylaşım**

## 📊 İndirme İstatistikleri

### GitHub Analytics:

#### 📈 Takip Edilebilir Metrikler:
- **Release indirme sayıları**
- **Popüler sürümler**
- **Coğrafi dağılım**
- **Zaman bazlı analizler**

#### 🎯 Kullanıcı Geri Bildirimleri:
- **GitHub Issues** ile bug raporları
- **Release comments** ile öneriler
- **Star ve Fork** ile popülerlik

## 🛡️ Güvenlik Uyarıları

### ⚠️ Android Güvenlik Uyarıları:

#### Normal Uyarılar:
- **"Bilinmeyen geliştirici"** → Normal
- **"Bu uygulama zararlı olabilir"** → Beklenen
- **"Google Play Protect"** uyarıları → Göz ardı edin

#### Güvenlik İpuçları:
- **Sadece resmi GitHub** linklerinden indirin
- **HTTPS bağlantıları** kullanın
- **APK hash'lerini** kontrol edin (gelişmiş)

## 📞 Destek ve Sorun Giderme

### 🆘 Yaygın Sorunlar:

#### "APK İndirilemiyor":
- **Çözüm**: VPN kullanın veya farklı browser deneyin
- **Alternatif**: Actions Artifacts'den indirin

#### "Kurulum Başarısız":
- **Çözüm**: Eski sürümü kaldırın
- **Kontrol**: Bilinmeyen kaynaklar açık mı?

#### "Uygulama Açılmıyor":
- **Çözüm**: Telefonu yeniden başlatın
- **Kontrol**: Android sürümü uyumlu mu? (5.0+)

### 📧 İletişim:
- **GitHub Issues**: Teknik sorunlar için
- **Email**: info@dersli-quiz.com
- **Repository**: Star ve Follow edin

---

## 🎯 Hızlı Başlangıç

### 📱 3 Adımda APK İndirme:

1. **GitHub Releases'e gidin**: [Repository]/releases
2. **Son sürümü indirin**: TusQuizApp-release.apk
3. **Telefona kurun**: Bilinmeyen kaynakları açıp yükleyin

### 🔄 Güncellemeler:
- **GitHub'ı takip edin** → Yeni sürüm bildirimlerini alın
- **Releases sayfasını** bookmark'layın
- **Otomatik güncelleme** yakında eklenecek

**GitHub'dan kolay APK indirme! 🚀📱**