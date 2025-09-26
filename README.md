# 💬 StackChat

**StackChat** is a modern, full-stack real-time chat application with video calling, friend requests, and sleek UI built for seamless communication. Designed for students, teams, and communities.

---

## 🚀 Tech Stack

### 🖥️ Frontend
- React.js
- Tailwind CSS
- Stream Chat SDK (UI Components + Video Calling)
- Zustand (Global State for theme, etc.)
- React Query (Data fetching & caching)
- Lucide Icons
- DaisyUI

### 🧠 Backend
- Express JS
- MongoDB Atlas
- JWT Authentication (custom implementation)

### 🔒 Auth
- Full JWT auth: signup, login, logout, onboarding
- Protected routes
- Stream token generation using authenticated users

---

## ✨ Features

- ✅ User Signup/Login
- ✅ JWT-based Authentication
- ✅ Profile & Onboarding
- ✅ Add Friends / Accept Requests
- ✅ One-to-One Real-time Chat
- ✅ Video Calling via Stream API
- ✅ Theme Toggle (Light/Dark)
- ✅ Fully responsive UI
- ✅ Chat loader, toast notifications, clean UI transitions

---

## 🛠️ Setup Instructions

### 🔧 Backend

1. Clone the repo and move into the backend directory:
    ```bash
    git clone https://github.com/Yash-1485/StackChat.git
    cd StackChat/backend
    ```

2. Install dependecies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the backend root:
    ```
    JWT_SECRET_KEY=your-jwt-secret-key
    PORT=8000
    STREAM_API_KEY=your-stream-api-key
    STREAM_SECRET_KEY=your-stream-secret-key
    MONGO_URI=your-mongodb-uri
    ```

4. Start server:
    ```bash
    npm run dev
    ```

---

### 🌐 Frontend (React)

1. Move into the frontend directory:
    ```bash
    cd ../frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file:
    ```
    VITE_STREAM_API_KEY=your-stream-api-key
    VITE_BACKEND_URL=http://localhost:8000
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

---

## 📦 Future Improvements

- ✅ Group Chat Support
- ✅ Notifications via Firebase
- ✅ Settings Page
- ✅ Profile Edit and Image Upload
- ✅ Message Reactions / Typing Indicators
- ✅ Socket.IO-based fallback (for custom backend)

---

> Built with ❤️ by Yash Parekh
