#!/bin/bash

echo "🏥 TUS Quiz App - APK Builder"
echo "============================="
echo ""

# Color codes for better output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_step() {
    echo -e "${BLUE}📱 $1${NC}"
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "package.json not found. Please run this script from the project root directory."
    exit 1
fi

# Check if Android project exists
if [ ! -d "android" ]; then
    print_error "Android directory not found. Please ensure the React Native project is properly set up."
    exit 1
fi

# Check dependencies
print_step "Checking dependencies..."

if [ ! -d "node_modules" ]; then
    print_warning "Node modules not found. Installing dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        print_error "Failed to install dependencies"
        exit 1
    fi
fi

print_success "Dependencies are ready"

# Create index.js if it doesn't exist
if [ ! -f "index.js" ]; then
    print_step "Creating index.js entry file..."
    cat > index.js << 'EOF'
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
EOF
    print_success "Created index.js"
fi

# Create app.json if it doesn't exist
if [ ! -f "app.json" ]; then
    print_step "Creating app.json..."
    cat > app.json << 'EOF'
{
  "name": "TusQuizApp",
  "displayName": "Dersli Quiz"
}
EOF
    print_success "Created app.json"
fi

# Create babel.config.js if it doesn't exist
if [ ! -f "babel.config.js" ]; then
    print_step "Creating babel.config.js..."
    cat > babel.config.js << 'EOF'
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
};
EOF
    print_success "Created babel.config.js"
fi

# Ask user which type of APK to build
echo ""
echo "Choose APK type to build:"
echo "1) Debug APK (for testing)"
echo "2) Release APK (for distribution)"
echo "3) Both"
echo ""
read -p "Enter your choice (1-3): " choice

case $choice in
    1)
        BUILD_TYPE="debug"
        ;;
    2)
        BUILD_TYPE="release"
        ;;
    3)
        BUILD_TYPE="both"
        ;;
    *)
        print_error "Invalid choice. Defaulting to debug APK."
        BUILD_TYPE="debug"
        ;;
esac

# Clean previous builds
print_step "Cleaning previous builds..."
cd android
./gradlew clean
cd ..

# Build Debug APK
if [ "$BUILD_TYPE" = "debug" ] || [ "$BUILD_TYPE" = "both" ]; then
    print_step "Building Debug APK..."
    echo ""
    
    cd android
    ./gradlew assembleDebug
    
    if [ $? -eq 0 ]; then
        print_success "Debug APK built successfully!"
        
        # Copy APK to project root
        cp app/build/outputs/apk/debug/app-debug.apk ../TusQuizApp-debug.apk
        
        APK_SIZE=$(du -h ../TusQuizApp-debug.apk | cut -f1)
        print_success "Debug APK copied to: TusQuizApp-debug.apk (Size: $APK_SIZE)"
    else
        print_error "Failed to build Debug APK"
        cd ..
        exit 1
    fi
    cd ..
fi

# Build Release APK
if [ "$BUILD_TYPE" = "release" ] || [ "$BUILD_TYPE" = "both" ]; then
    print_step "Building Release APK..."
    echo ""
    
    # Check if release keystore exists, if not, create one
    if [ ! -f "android/app/my-upload-key.keystore" ]; then
        print_warning "Release keystore not found. Creating a new one..."
        print_warning "You'll be asked to enter passwords and information for the keystore."
        echo ""
        
        keytool -genkeypair -v -storetype PKCS12 -keystore android/app/my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
        
        if [ $? -ne 0 ]; then
            print_error "Failed to create keystore"
            exit 1
        fi
        
        # Create gradle.properties for release signing
        echo "" >> android/gradle.properties
        echo "MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore" >> android/gradle.properties
        echo "MYAPP_UPLOAD_KEY_ALIAS=my-key-alias" >> android/gradle.properties
        echo "MYAPP_UPLOAD_STORE_PASSWORD=password123" >> android/gradle.properties
        echo "MYAPP_UPLOAD_KEY_PASSWORD=password123" >> android/gradle.properties
        
        print_warning "⚠️  IMPORTANT: Update the passwords in android/gradle.properties with your actual keystore passwords!"
    fi
    
    cd android
    ./gradlew assembleRelease
    
    if [ $? -eq 0 ]; then
        print_success "Release APK built successfully!"
        
        # Copy APK to project root
        cp app/build/outputs/apk/release/app-release.apk ../TusQuizApp-release.apk
        
        APK_SIZE=$(du -h ../TusQuizApp-release.apk | cut -f1)
        print_success "Release APK copied to: TusQuizApp-release.apk (Size: $APK_SIZE)"
    else
        print_error "Failed to build Release APK"
        cd ..
        exit 1
    fi
    cd ..
fi

echo ""
echo "🎉 APK Build Complete!"
echo "======================"
echo ""

# Show final results
if [ -f "TusQuizApp-debug.apk" ]; then
    DEBUG_SIZE=$(du -h TusQuizApp-debug.apk | cut -f1)
    echo "📱 Debug APK: TusQuizApp-debug.apk ($DEBUG_SIZE)"
fi

if [ -f "TusQuizApp-release.apk" ]; then
    RELEASE_SIZE=$(du -h TusQuizApp-release.apk | cut -f1)
    echo "📱 Release APK: TusQuizApp-release.apk ($RELEASE_SIZE)"
fi

echo ""
echo "📋 Installation Instructions:"
echo "=============================="
echo "1. Enable 'Unknown Sources' in Android Settings"
echo "2. Transfer APK file to your Android device"
echo "3. Tap the APK file to install"
echo ""
echo "🔧 For Google Play Store:"
echo "=========================="
echo "1. Use the Release APK (TusQuizApp-release.apk)"
echo "2. Upload to Google Play Console"
echo "3. Follow Google Play publishing guidelines"
echo ""
echo "✨ Happy Testing! ✨"