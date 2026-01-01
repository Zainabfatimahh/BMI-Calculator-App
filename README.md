📱 BMI Calculator App — React Native (Expo)

A clean and functional BMI Calculator mobile app built using React Native and Expo, focused on smooth user flow, clean UI, and stable Android builds.

This is a personal project created to strengthen my skills in mobile app development, Expo Router navigation, and APK generation using EAS Build.



✨ Project Highlights

📌 Complete mobile app (UI → logic → APK)

🧭 File-based navigation using Expo Router

📐 Real-time BMI calculation

🎨 Custom splash screen & app icon

📦 Android APK generated using Expo EAS Build

🛠 Debugged real-world runtime and configuration issues



🚀 Features

Gender selection screen

Height input using slider

Weight input with increment/decrement buttons

BMI calculation using standard formula

Result screen with recalculation option

Smooth navigation flow

Android APK support


🛠 Tech Stack

React Native

Expo

Expo Router

JavaScript (ES6+)

EAS Build

@react-native-community/slider



📂 Project Structure

bmi-calculator/
├── app/
│   ├── _layout.js
│   ├── index.js
│   ├── gender.js
│   ├── input.js
│   └── result.js
│
├── constants/
│   └── theme.js
│
├── assets/
│   └── images/
│
├── app.json
├── eas.json
└── package.json



📐 BMI Formula Used

BMI = weight (kg) / (height (m) × height (m))


▶️ Run the Project Locally

git clone https://github.com/your-username/bmi-calculator.git
cd bmi-calculator
npm install
npx expo start

Scan the QR code using the Expo Go app (Android).


📦 APK Build

The Android APK was generated using Expo EAS Build:

eas build -p android --profile preview


🧠 Learning Outcomes

Built a complete React Native app using Expo

Implemented file-based navigation with Expo Router

Worked with native components like sliders

Managed app configuration, splash screen, and icons

Debugged production-level crashes and warnings

Generated and tested a real Android APK


👩‍💻 Author

Zainab Fatimah
Frontend & React Native Developer
Personal Project



