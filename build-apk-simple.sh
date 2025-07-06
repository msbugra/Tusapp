#!/bin/bash

echo "🔥 Dersli Quiz APK Builder"
echo "========================="

# Renkli output için
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}📱 Building Android APK...${NC}"

# Proje kontrolü
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ package.json bulunamadı!${NC}"
    exit 1
fi

if [ ! -d "android" ]; then
    echo -e "${RED}❌ Android klasörü bulunamadı!${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Proje dosyaları bulundu${NC}"

# APK build
echo -e "${YELLOW}🔧 APK build başlıyor...${NC}"

cd android

# Gradle wrapper kontrolü
if [ ! -f "gradlew" ]; then
    echo -e "${RED}❌ gradlew bulunamadı!${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Gradle wrapper hazır${NC}"

# Debug APK build
echo -e "${YELLOW}🏗️ Debug APK oluşturuluyor...${NC}"

# Java ve Android SDK kontrolü
if ! command -v java &> /dev/null; then
    echo -e "${RED}❌ Java bulunamadı! Java 11+ gerekli.${NC}"
    echo "   Çözüm: sudo apt install openjdk-11-jdk"
    exit 1
fi

echo -e "${GREEN}✅ Java bulundu: $(java -version 2>&1 | head -n 1)${NC}"

# Gradle build
echo -e "${YELLOW}🚀 Gradle build çalıştırılıyor...${NC}"

./gradlew assembleDebug

BUILD_STATUS=$?

if [ $BUILD_STATUS -eq 0 ]; then
    echo -e "${GREEN}✅ APK başarıyla oluşturuldu!${NC}"
    
    # APK dosyasını bul
    APK_PATH="app/build/outputs/apk/debug/app-debug.apk"
    
    if [ -f "$APK_PATH" ]; then
        echo -e "${GREEN}📱 APK konumu: android/$APK_PATH${NC}"
        
        # APK'yı root dizine kopyala
        cp "$APK_PATH" "../DersliQuiz-debug.apk"
        echo -e "${GREEN}📋 APK kopyalandı: DersliQuiz-debug.apk${NC}"
        
        # APK bilgileri
        APK_SIZE=$(du -h "../DersliQuiz-debug.apk" | cut -f1)
        echo -e "${GREEN}📊 APK boyutu: $APK_SIZE${NC}"
        
        echo ""
        echo -e "${GREEN}🎉 APK HAZIR!${NC}"
        echo "📁 Dosya: DersliQuiz-debug.apk"
        echo "📱 Kurulum: Telefona aktar ve kur"
        echo "⚙️ Ayar: Bilinmeyen Kaynaklar'ı aç"
        echo ""
        
    else
        echo -e "${RED}❌ APK dosyası bulunamadı: $APK_PATH${NC}"
        exit 1
    fi
else
    echo -e "${RED}❌ APK build başarısız! Exit code: $BUILD_STATUS${NC}"
    echo ""
    echo "🔧 Yaygın çözümler:"
    echo "1. Java 11+ yükleyin: sudo apt install openjdk-11-jdk"
    echo "2. Android SDK yükleyin"
    echo "3. Dependencies'leri kontrol edin: npm install"
    echo "4. Gradle cache'i temizleyin: ./gradlew clean"
    echo ""
    exit 1
fi

cd ..

echo -e "${GREEN}🚀 APK build tamamlandı!${NC}"