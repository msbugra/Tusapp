#!/bin/bash

echo "🔥 Dersli Quiz APK Builder - Demo Version"
echo "================================================"

# Demo APK oluşturma scripti
echo "📱 Creating Demo APK..."

# APK klasörü oluştur
mkdir -p apk-build

# Demo APK bilgileri
cat > apk-build/app-info.txt << 'EOF'
🏥 Dersli Quiz - TUS Hazırlık Uygulaması
=======================================

📊 İstatistikler:
- 1000+ Tıp Sorusu
- 11 Farklı Kategori  
- Offline Çalışma
- Türkçe Arayüz

📱 Sistem Gereksinimleri:
- Android 5.0+ (API 21+)
- 50MB Boş Alan
- 2GB RAM

🎯 Kategoriler:
- Dahiliye (Internal Medicine)
- Kadın Hastalıkları ve Doğum
- Biyokimya (Biochemistry)
- Farmakoloji (Pharmacology)
- Anatomi (Anatomy)
- Mikrobiyoloji (Microbiology)
- Patoloji (Pathology)
- Genel Cerrahi (General Surgery)
- Pediatri (Pediatrics)
- Küçük Stajlar (Minor Clerkships)
- Fizyoloji, Histoloji ve Embriyoloji

📥 Kurulum:
1. APK dosyasını indirin
2. "Bilinmeyen Kaynaklar"ı açın
3. APK'yı kurun
4. Öğrenmeye başlayın!

🔗 GitHub: https://github.com/msbugra/Tusapp
🌐 Web: https://msbugra.github.io/Tusapp/

İyi çalışmalar! 📚🎓
EOF

echo "✅ Demo APK bilgileri oluşturuldu: apk-build/app-info.txt"

# Web-based APK alternatifleri
echo ""
echo "🌐 APK ALTERNATIVES:"
echo "1️⃣ GitHub Pages: https://msbugra.github.io/Tusapp/"
echo "2️⃣ Repository: https://github.com/msbugra/Tusapp"
echo "3️⃣ PWA Version: Tarayıcıdan kullanılabilir"
echo ""

# Hızlı hosting çözümleri
echo "🚀 HOSTING OPTIONS:"
echo "📁 Google Drive: APK'yı Drive'a yükle"
echo "🌐 Netlify: netlify.com → Deploy manually"
echo "⚡ Vercel: GitHub'dan otomatik deploy"
echo ""

echo "🎉 Demo APK sistemi hazır!"
echo "📱 Gerçek APK için React Native build gerekli."

# GitHub Release için hazırla
if [ ! -f "README.md" ]; then
    cp apk-build/app-info.txt README.md
    echo "✅ README.md oluşturuldu"
fi

echo ""
echo "🔗 GitHub Release oluşturmak için:"
echo "1. github.com/msbugra/Tusapp/releases"
echo "2. 'Create a new release' → Tag: v1.0.0"
echo "3. Bu dosyaları ekle: apk-build/"