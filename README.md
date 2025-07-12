# 🚴‍♂️ CyclinGo – Smart Signaling Companion App

**CyclinGo** is a mobile application developed in **React Native** that connects via **Bluetooth** to a smart signaling vest for cyclists. Designed to enhance road safety and visibility, CyclinGo offers customizable visual signals, real-time navigation, and a unique advertising display feature.

---

## 🔧 Features

### ✅ Smart Bluetooth Connectivity
- Seamlessly pairs with the **CyclinGo smart vest**.
- Sends real-time commands to trigger different **LED-based safety signals**.

### 🚦 Visual Safety Signals
- Choose from multiple **signal modes**:
  - Turn left / Turn right
  - Stop
  - Hazard alert
  - Custom patterns

### 🗺️ Maps & Navigation
- Integrated **maps feature** for route planning and GPS navigation.
- Syncs route information with the vest to optimize signaling.

### 📢 Ad Display Selection
- Select your preferred **advertisement to be shown** between safety signals.
- Supports **dynamic cycling ads** or **sponsored safety tips** displayed on the vest.

---

## 📱 Tech Stack

- **Frontend:** React Native (Typescript)
- **Connectivity:** Bluetooth Low Energy (BLE)
- **Maps:** Google Maps API (plugin)
- **Device:** Custom Arduino/ESP32-based LED signaling vest (external hardware)

---

## 🔗 Architecture Overview
[ CyclinGo App ] ↔ [ Bluetooth Module ] ↔ [ Smart Vest (Microcontroller + LED matrix) ]
The app communicates with the vest over Bluetooth to send signal commands and configuration data. Navigation and advertisement data are processed locally on the mobile device.

---

## 🛠 Setup & Installation

### Prerequisites
- React Native (>= 0.60)
- Android Studio / VS Code
- A compatible Android/iOS device with Bluetooth enabled

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/CyclinGo.git
   cd CyclinGo
2. Install dependencies:
   ```bash
   npm install
   ```
3.	Connect your device and run the app:
   ```bash
   npm run
   ```

⚠️ Ensure that location and Bluetooth permissions are enabled on your device.

---

### 👨‍💻 Contributors
  Prodan Radu-Matei – Mobile Developer, Bluetooth Integration
  
  Hardware team

---

### 📄 License

This project is licensed under the MIT License.

---

### 🙋‍♀️ Feedback & Contact

For feedback, suggestions, or contributions, feel free to open an issue or contact:

  LinkTree: https://linktr.ee/CyclinGo?fbclid=IwAR1UGBgWE4SitS-8xi7mAzJ0Eg7sbqK6IJ2a7-koHL8rJPk-lzOym3TNEao
  
  📧 mateiprodan1@gmail.com
  
  🔗 https://www.linkedin.com/in/matei-prodan-7624341a4/

---

### “Be visible. Be safe. Be in control – with CyclinGo.”
