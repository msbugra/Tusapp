# 🏥 Dersli Quiz - Turkish Medical Quiz App

A modern React Native quiz application for Turkish medical students preparing for TUS (Tıpta Uzmanlık Sınavı) exams.

## 📱 Features

- **Multiple Medical Categories**: Internal Medicine, Gynecology, Biochemistry, Pharmacology, Anatomy, Microbiology, Pathology, and more
- **Interactive Quiz Interface**: Modern, user-friendly quiz experience
- **Dark/Light Theme**: Automatic system theme detection with manual override
- **Progress Tracking**: Real-time quiz progress and performance analytics
- **Detailed Results**: Comprehensive score breakdown with explanations
- **Offline Capability**: Works without internet connection
- **Turkish Language**: Fully localized for Turkish medical students

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or newer)
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development - macOS only)

### Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd TusQuizApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Install iOS dependencies (iOS only)**
   ```bash
   cd ios && pod install && cd ..
   ```

4. **Start the Metro bundler**
   ```bash
   npm start
   # or
   yarn start
   ```

5. **Run the app**
   
   For Android:
   ```bash
   npm run android
   # or
   yarn android
   ```
   
   For iOS:
   ```bash
   npm run ios
   # or
   yarn ios
   ```

## 🛠️ Development Setup

### Setting up React Native Development Environment

1. **Install React Native CLI globally**
   ```bash
   npm install -g react-native-cli
   ```

2. **For Android Development:**
   - Install Android Studio
   - Configure Android SDK
   - Set up Android emulator or connect physical device
   - Enable USB debugging on physical device

3. **For iOS Development (macOS only):**
   - Install Xcode from App Store
   - Install Xcode Command Line Tools
   - Set up iOS Simulator or connect physical device

### Environment Variables

Create a `.env` file in the root directory (optional):
```env
APP_NAME=DersliQuiz
VERSION=1.0.0
```

## 📂 Project Structure

```
TusQuizApp/
├── src/
│   ├── components/          # Reusable UI components
│   ├── contexts/           # React contexts (Theme, etc.)
│   ├── data/              # Quiz questions and data
│   ├── screens/           # Screen components
│   └── utils/             # Utility functions
├── android/               # Android-specific files
├── ios/                   # iOS-specific files
├── App.tsx               # Main app component
├── package.json          # Dependencies and scripts
└── README.md            # This file
```

## 🎯 Usage

1. **Select a Category**: Choose from various medical subjects
2. **Start Quiz**: Answer multiple-choice questions
3. **Review Results**: See detailed performance analysis
4. **Track Progress**: Monitor improvement over time

## 📊 Quiz Categories

- **Dahiliye** (Internal Medicine)
- **Kadın Hastalıkları ve Doğum** (Gynecology & Obstetrics)
- **Biyokimya** (Biochemistry)
- **Farmakoloji** (Pharmacology)
- **Küçük Stajlar** (Minor Clerkships)
- **Anatomi** (Anatomy)
- **Mikrobiyoloji** (Microbiology)
- **Patoloji** (Pathology)
- **Genel Cerrahi** (General Surgery)
- **Pediatri** (Pediatrics)
- **Fizyoloji, Histoloji ve Embriyoloji** (Physiology, Histology & Embryology)

## 🎨 Themes

The app supports both light and dark themes:
- **Auto**: Follows system theme
- **Light**: Clean, bright interface
- **Dark**: Easy on the eyes for night study

## 🔧 Configuration

### Adding New Questions

Questions are stored in `src/data/questions.ts`. To add new questions:

```typescript
{
  id: 11,
  lesson: "Category Name",
  question: "Your question text",
  options: {
    A: "Option A",
    B: "Option B", 
    C: "Option C",
    D: "Option D",
    E: "Option E"
  },
  correct: "A",
  explanation: "Detailed explanation here",
  subcategory: "Subcategory (optional)"
}
```

### Customizing Themes

Edit `src/contexts/ThemeContext.tsx` to modify color schemes:

```typescript
const lightTheme = {
  colors: {
    primary: '#0f766e',
    background: '#ffffff',
    // ... other colors
  }
};
```

## 📱 Building for Production

### Android APK
```bash
cd android
./gradlew assembleRelease
```

### iOS IPA
1. Open `ios/TusQuizApp.xcworkspace` in Xcode
2. Select your team and signing certificates
3. Archive and export IPA

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 👥 Authors

- **Development Team** - TUS Quiz App

## 🆘 Support

If you encounter any issues:

1. Check the [React Native documentation](https://reactnative.dev/docs/getting-started)
2. Ensure all dependencies are properly installed
3. Verify your development environment setup
4. Check device/emulator compatibility

## 🔄 Updates

To update the app:

```bash
npm update
# or
yarn upgrade
```

For major React Native updates, follow the [React Native Upgrade Guide](https://react-native-community.github.io/upgrade-helper/).

---

**Happy Learning! 📚🎓**

*Designed for Turkish medical students preparing for TUS exams.*