# 📱 Dersli Quiz APK Kurulum Rehberi

## 🚀 1. ADIM: APK Dosyasını Oluşturun

### Kolay Yöntem (Otomatik):
```bash
./build-apk.sh
```

### Manuel Yöntem:
```bash
cd android
./gradlew assembleDebug
```

## 📲 2. ADIM: APK Dosyasını Telefona Aktarın

### Yöntem A: USB Kablo ile
1. **USB Kablosu** ile telefonunuzu bilgisayara bağlayın
2. **Dosya Aktarımı** modunu seçin (MTP/Medya Aktarımı)
3. APK dosyasını (`TusQuizApp-debug.apk`) telefona kopyalayın
4. **İndirilenler** klasörüne atmanızı öneriyoruz

### Yöntem B: WhatsApp ile (En Kolay)
1. APK dosyasını kendinize WhatsApp'tan gönderin
2. Telefonunuzda WhatsApp'ı açın
3. Dosyayı telefona indirin

### Yöntem C: Google Drive/Dropbox ile
1. APK dosyasını bulut depolama servisine yükleyin
2. Telefonunuzdan bulut uygulamasını açın
3. Dosyayı telefona indirin

### Yöntem D: Email ile
1. APK dosyasını kendinize email ile gönderin
2. Telefonunuzdan emaili açın
3. Eki telefona indirin

## ⚙️ 3. ADIM: Android Ayarlarını Yapın

### Android 8.0 ve Üzeri:
1. **Ayarlar** → **Güvenlik ve Gizlilik** → **Bilinmeyen Kaynaklardan Yükleme**
2. Kullanacağınız uygulamayı (Dosya Yöneticisi, Chrome, WhatsApp vb.) seçin
3. **Bu kaynağa izin ver** seçeneğini açın

### Android 7.0 ve Altı:
1. **Ayarlar** → **Güvenlik** → **Bilinmeyen Kaynaklar**
2. Bu seçeneği **açık** konuma getirin

## 📱 4. ADIM: APK Dosyasını Kurun

1. **Dosya Yöneticisi** uygulamasını açın
2. **İndirilenler** klasörüne gidin
3. **TusQuizApp-debug.apk** dosyasını bulun
4. Dosyaya **dokunun**
5. **Yükle** butonuna basın
6. Kurulum tamamlanana kadar bekleyin
7. **Aç** butonuna basın veya **Bitti** deyin

## 🎯 5. ADIM: Uygulamayı Başlatın

1. Ana ekranda **Dersli Quiz** simgesini bulun
2. Simgeye dokunarak uygulamayı açın
3. İlk açılışta izinleri kabul edin
4. Quiz yapmaya başlayın! 🎉

## 🔧 Alternatif Kurulum Yöntemleri

### ADB ile Kurulum (Gelişmiş):
```bash
adb install TusQuizApp-debug.apk
```

### Dosya Yöneticisi Uygulamaları:
- **ES Dosya Yöneticisi**
- **Cx Dosya Yöneticisi** 
- **Total Commander**
- **Mi Dosya Yöneticisi**

## ⚠️ Güvenlik Uyarıları

### Normal Uyarılar (Endişe Etmeyin):
- **"Bu uygulama zararlı olabilir"** - Normal, çünkü Play Store'dan değil
- **"Bilinmeyen geliştiriciden"** - Beklenen durum
- **"Güvenlik taraması yapılamadı"** - APK imzalı değil

### Bu Uyarıları Geçmek İçin:
1. **Yine de yükle** veya **Devam et** butonuna basın
2. **Uygulama güvenilir** diye onaylayın

## 🛠️ Sorun Giderme

### Kurulum Başarısız Olursa:

**Problem 1: "Uygulama yüklenemedi"**
- **Çözüm**: Eski versiyonu silip tekrar deneyin
- Ayarlar → Uygulamalar → Dersli Quiz → Kaldır

**Problem 2: "Dosya açılamıyor"**
- **Çözüm**: APK dosyasını tekrar indirin
- Dosya bozuk olabilir

**Problem 3: "Yükleme engellendi"**
- **Çözüm**: Bilinmeyen kaynaklar ayarını kontrol edin
- Play Protect'i geçici olarak kapatın

**Problem 4: "İzin reddedildi"**
- **Çözüm**: Dosya yöneticisine bilinmeyen kaynak izni verin

### Performans Sorunları:
- **Telefonu yeniden başlatın**
- **Gereksiz uygulamaları kapatın**
- **Depolama alanı kontrol edin** (en az 50MB boş alan)

## 📋 Gereksinimler

### Minimum Sistem Gereksinimleri:
- **Android**: 5.0 (API level 21) ve üzeri
- **RAM**: 2GB ve üzeri önerilir
- **Depolama**: 50MB boş alan
- **İşlemci**: ARM veya x86

### Önerilen Ayarlar:
- **Ekran Boyutu**: 5 inç ve üzeri
- **Çözünürlük**: 720p ve üzeri
- **İnternet**: İsteğe bağlı (offline çalışır)

## 🎊 Başarılı Kurulum Sonrası

### İlk Kullanım:
1. **Ders kategorisi** seçin
2. **Quiz Başlat** butonuna basın
3. **Soruları** cevaplayın
4. **Sonuçlarınızı** görün

### Özellikler:
- ✅ **11 farklı tıp kategorisi**
- ✅ **Karanlık/Açık tema**
- ✅ **Detaylı sonuç analizi**
- ✅ **Offline çalışma**
- ✅ **Türkçe arayüz**

## 📞 Destek

### Sorun Yaşarsanız:
1. Telefonu yeniden başlatın
2. APK dosyasını tekrar indirin
3. Farklı dosya yöneticisi deneyin
4. Android sürümünüzü kontrol edin

### İletişim:
- **Email**: info@dersli-quiz.com
- **GitHub**: Issues bölümünde rapor edebilirsiniz

---

## 🎯 Hızlı Özet

1. **APK Oluştur**: `./build-apk.sh` çalıştır
2. **Telefona Aktar**: USB/WhatsApp/Email ile
3. **Bilinmeyen Kaynakları Aç**: Güvenlik ayarlarından
4. **APK'yı Kur**: Dosyaya dokunup yükle
5. **Uygulamayı Başlat**: Ana ekranda Dersli Quiz'e dokun

**Başarılar! Bol şans! 🍀📚**