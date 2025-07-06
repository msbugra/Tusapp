@echo off
echo 🏥 TUS Quiz App - APK Builder (Windows)
echo =====================================
echo.

REM Check if package.json exists
if not exist "package.json" (
    echo ❌ package.json not found. Please run this script from the project root directory.
    pause
    exit /b 1
)

REM Check if Android project exists
if not exist "android" (
    echo ❌ Android directory not found. Please ensure the React Native project is properly set up.
    pause
    exit /b 1
)

echo 📱 Checking dependencies...

REM Install dependencies if needed
if not exist "node_modules" (
    echo ⚠️  Node modules not found. Installing dependencies...
    call npm install
    if errorlevel 1 (
        echo ❌ Failed to install dependencies
        pause
        exit /b 1
    )
)

echo ✅ Dependencies are ready

REM Create index.js if it doesn't exist
if not exist "index.js" (
    echo 📱 Creating index.js entry file...
    echo /**> index.js
    echo  * @format>> index.js
    echo  */>> index.js
    echo.>> index.js
    echo import {AppRegistry} from 'react-native';>> index.js
    echo import App from './App';>> index.js
    echo import {name as appName} from './app.json';>> index.js
    echo.>> index.js
    echo AppRegistry.registerComponent(appName, () => App);>> index.js
    echo ✅ Created index.js
)

REM Create app.json if it doesn't exist
if not exist "app.json" (
    echo 📱 Creating app.json...
    echo {> app.json
    echo   "name": "TusQuizApp",>> app.json
    echo   "displayName": "Dersli Quiz">> app.json
    echo }>> app.json
    echo ✅ Created app.json
)

REM Create babel.config.js if it doesn't exist
if not exist "babel.config.js" (
    echo 📱 Creating babel.config.js...
    echo module.exports = {> babel.config.js
    echo   presets: ['module:metro-react-native-babel-preset'],>> babel.config.js
    echo };>> babel.config.js
    echo ✅ Created babel.config.js
)

echo.
echo Choose APK type to build:
echo 1) Debug APK (for testing)
echo 2) Release APK (for distribution)
echo.
set /p choice=Enter your choice (1-2): 

if "%choice%"=="1" (
    set BUILD_TYPE=debug
) else if "%choice%"=="2" (
    set BUILD_TYPE=release
) else (
    echo ❌ Invalid choice. Defaulting to debug APK.
    set BUILD_TYPE=debug
)

echo.
echo 📱 Cleaning previous builds...
cd android
call gradlew clean
cd ..

if "%BUILD_TYPE%"=="debug" (
    echo 📱 Building Debug APK...
    echo.
    
    cd android
    call gradlew assembleDebug
    
    if errorlevel 1 (
        echo ❌ Failed to build Debug APK
        cd ..
        pause
        exit /b 1
    )
    
    echo ✅ Debug APK built successfully!
    
    REM Copy APK to project root
    copy app\build\outputs\apk\debug\app-debug.apk ..\TusQuizApp-debug.apk
    
    echo ✅ Debug APK copied to: TusQuizApp-debug.apk
    cd ..
)

if "%BUILD_TYPE%"=="release" (
    echo 📱 Building Release APK...
    echo.
    echo ⚠️  Note: You need to set up signing keys for release APK
    echo    See: https://reactnative.dev/docs/signed-apk-android
    echo.
    
    cd android
    call gradlew assembleRelease
    
    if errorlevel 1 (
        echo ❌ Failed to build Release APK
        echo ⚠️  Make sure you have set up signing keys properly
        cd ..
        pause
        exit /b 1
    )
    
    echo ✅ Release APK built successfully!
    
    REM Copy APK to project root
    copy app\build\outputs\apk\release\app-release.apk ..\TusQuizApp-release.apk
    
    echo ✅ Release APK copied to: TusQuizApp-release.apk
    cd ..
)

echo.
echo 🎉 APK Build Complete!
echo ======================
echo.

if exist "TusQuizApp-debug.apk" (
    echo 📱 Debug APK: TusQuizApp-debug.apk
)

if exist "TusQuizApp-release.apk" (
    echo 📱 Release APK: TusQuizApp-release.apk
)

echo.
echo 📋 Installation Instructions:
echo ==============================
echo 1. Enable 'Unknown Sources' in Android Settings
echo 2. Transfer APK file to your Android device
echo 3. Tap the APK file to install
echo.
echo ✨ Happy Testing! ✨
echo.
pause