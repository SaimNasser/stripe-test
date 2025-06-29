# Stripe Test

This project includes a React Native mobile app using **Expo** and a **Node/Express** backend server.

---

## 1. 📱 Expo (React Native App)

### Setup

1. Create a `.env` file by copying from the provided `env_sample` and add your environment keys.
2. Install required libraries:

   ```
   npx expo install
   ```

3. Start the Expo development server:

   ```
   npx expo start
   ```

### Running the App

- **On Device:**
  - Download the [Expo Go](https://expo.dev/client) app.
  - Scan the QR code from the terminal using your phone's **Camera** app.

- **On Simulator:**
  - Press `i` in the terminal to launch the iOS simulator (Mac only).
  - Press `a` to launch the Android emulator (if available and properly set up).

---

## 2. 🌐 Server (Node/Express)

### Setup

1. Navigate to the server directory:

   ```
   cd server
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Create a `.env` file by copying from `env_sample` and add the `PORT` and any necessary keys.

4. Start the server:

   ```
   node index.js
   ```

---
