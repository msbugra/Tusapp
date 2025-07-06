#!/bin/bash

echo "🏥 Setting up TUS Quiz App - React Native Project"
echo "=================================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "   Download from: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js found: $(node --version)"

# Check if we have npm or yarn
if command -v yarn &> /dev/null; then
    PACKAGE_MANAGER="yarn"
    echo "✅ Yarn found: $(yarn --version)"
elif command -v npm &> /dev/null; then
    PACKAGE_MANAGER="npm"
    echo "✅ NPM found: $(npm --version)"
else
    echo "❌ No package manager found. Please install npm or yarn."
    exit 1
fi

# Initialize React Native project if not already done
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    if [ "$PACKAGE_MANAGER" = "yarn" ]; then
        yarn install
    else
        npm install
    fi
else
    echo "✅ Dependencies already installed"
fi

# Check if React Native CLI is installed
if ! command -v react-native &> /dev/null; then
    echo "📱 Installing React Native CLI globally..."
    if [ "$PACKAGE_MANAGER" = "yarn" ]; then
        yarn global add react-native-cli
    else
        npm install -g react-native-cli
    fi
fi

# Setup iOS dependencies (if on macOS)
if [[ "$OSTYPE" == "darwin"* ]]; then
    if command -v pod &> /dev/null; then
        echo "🍎 Setting up iOS dependencies..."
        cd ios && pod install && cd ..
        echo "✅ iOS setup complete"
    else
        echo "⚠️  CocoaPods not found. Install with: sudo gem install cocoapods"
        echo "   Then run: cd ios && pod install && cd .."
    fi
else
    echo "ℹ️  Skipping iOS setup (not on macOS)"
fi

# Create development environment info
echo ""
echo "🚀 Setup Complete!"
echo "=================="
echo ""
echo "To start development:"
echo "1. Start Metro bundler: $PACKAGE_MANAGER start"
echo "2. Run on Android: $PACKAGE_MANAGER run android"
if [[ "$OSTYPE" == "darwin"* ]]; then
    echo "3. Run on iOS: $PACKAGE_MANAGER run ios"
fi
echo ""
echo "📱 Make sure you have:"
echo "   - Android Studio installed (for Android)"
if [[ "$OSTYPE" == "darwin"* ]]; then
    echo "   - Xcode installed (for iOS)"
fi
echo "   - An emulator/simulator running or device connected"
echo ""
echo "📚 For more help, check README.md"
echo ""
echo "Happy coding! 🎉"