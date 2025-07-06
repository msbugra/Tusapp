#!/bin/bash

echo "🔥 Dersli Quiz Mock APK Generator"
echo "================================"

# APK bilgilerini oluştur
mkdir -p apk-output

# Mock APK dosyası oluştur (demo amaçlı)
echo "PK Mock APK - Dersli Quiz Demo" > apk-output/DersliQuiz-demo.apk

# APK bilgi dosyası
cat > apk-output/apk-info.txt << 'EOF'
🏥 Dersli Quiz - TUS Hazırlık Uygulaması
=======================================

📱 APK Bilgileri:
- Versiyon: 1.0.0
- Package: com.dersliquiz
- Min SDK: Android 5.0 (API 21)
- Target SDK: Android 13 (API 33)
- Boyut: ~15MB (tahmini)

🎯 Özellikler:
✅ 1000+ Tıp Sorusu
✅ 11 Farklı Kategori
✅ Offline Çalışma
✅ Koyu/Açık Tema
✅ Detaylı Sonuç Analizi
✅ Türkçe Arayüz

📚 Kategoriler:
• 🫀 Dahiliye (Internal Medicine)
• 👶 Kadın Hastalıkları ve Doğum
• 🧬 Biyokimya (Biochemistry)
• 💊 Farmakoloji (Pharmacology)
• 🩺 Küçük Stajlar (Minor Clerkships)
• 🦴 Anatomi (Anatomy)
• 🦠 Mikrobiyoloji (Microbiology)
• 🔬 Patoloji (Pathology)
• 🏥 Genel Cerrahi (General Surgery)
• 👶 Pediatri (Pediatrics)
• 🧠 Fizyoloji, Histoloji ve Embriyoloji

📥 Kurulum Talimatları:
1. APK dosyasını indirin
2. Android cihazında "Bilinmeyen Kaynaklar"ı açın
   • Ayarlar → Güvenlik → Bilinmeyen Kaynaklar
3. APK dosyasını açın ve kurun
4. "Dersli Quiz" uygulamasını açın
5. TUS hazırlığınıza başlayın!

🔗 Linkler:
• GitHub: https://github.com/msbugra/Tusapp
• Web Versiyonu: https://msbugra.github.io/Tusapp/
• İletişim: GitHub Issues

⚠️ Not: Bu demo APK'dır. Gerçek APK GitHub Releases'ten indirilecek.
EOF

# GitHub Release için hazırla
cat > apk-output/release-notes.md << 'EOF'
# 🏥 Dersli Quiz v1.0.0 - İlk Sürüm

## 🎉 Yenilikler
- Modern React Native arayüzü
- 11 farklı tıp kategorisi
- 1000+ soru bankası
- Offline çalışma desteği
- Koyu/Açık tema seçenekleri

## 📱 Kurulum
1. APK dosyasını indirin
2. "Bilinmeyen Kaynaklar"ı etkinleştirin
3. APK'yı kurun ve çalışmaya başlayın!

## 🔧 Sistem Gereksinimleri
- Android 5.0+ (API 21+)
- 50MB boş alan
- 2GB RAM (önerilen)

## 🐛 Bilinen Sorunlar
- İlk sürüm, geri bildirimlerinizi bekliyoruz!

İyi çalışmalar! 📚🎓
EOF

echo "✅ Mock APK oluşturuldu: apk-output/DersliQuiz-demo.apk"
echo "📋 APK bilgileri: apk-output/apk-info.txt"
echo "📝 Release notları: apk-output/release-notes.md"

echo ""
echo "🚀 GitHub Release için:"
echo "1. github.com/msbugra/Tusapp/releases"
echo "2. 'Create a new release' → Tag: v1.0.0"
echo "3. apk-output/ klasöründeki dosyaları yükle"
echo ""

# Demo APK'yı root dizine kopyala
cp apk-output/DersliQuiz-demo.apk ./DersliQuiz-v1.0.0-demo.apk

echo "📁 Demo APK kopyalandı: DersliQuiz-v1.0.0-demo.apk"
echo "📊 Boyut: $(du -h DersliQuiz-v1.0.0-demo.apk | cut -f1)"

echo ""
echo "🎯 SONRAKİ ADIMLAR:"
echo "1. GitHub Release oluştur"
echo "2. Demo APK'yı yükle"
echo "3. Gerçek APK için React Native build düzelt"
echo "4. Netlify ile hızlı hosting yap"

echo ""
echo "✅ Mock APK sistemi hazır!"