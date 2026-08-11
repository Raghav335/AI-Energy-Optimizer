# ⚡ AI Energy Optimizer

AI Energy Optimizer is an AI-powered web application designed to monitor, analyze, and optimize electricity consumption. The platform combines React.js, Node.js, MongoDB, Python, Flask, and Machine Learning to provide real-time energy monitoring and intelligent demand prediction.

It includes secure JWT authentication, dynamic user profiles, live energy analytics, AI-based predictions, smart energy recommendations, grid alerts, weather integration, solar output monitoring, and interactive charts.
The system uses a dedicated Python Flask AI service to predict energy demand based on parameters such as time and temperature, while the React dashboard presents these insights through a modern and responsive interface.

## 🌐 Live Demo

🚀 **Frontend:** https://ai-energy-optimizer-zeta.vercel.app

⚙️ **Backend:** https://ai-energy-optimizer-backend.onrender.com

🤖 **AI API:** https://ai-energy-optimizer-fjjy.onrender.com

## ✨ Features

- 🔐 Secure User Authentication using JWT
- 👤 User Registration & Login
- 🧑‍💻 Dynamic Logged-in User Profile
- 📊 Interactive Energy Analytics Dashboard
- ⚡ Real-Time Energy Monitoring
- 📈 Live Energy Analytics & Charts
- 🤖 AI-Based Energy Demand Prediction
- 🐍 Python & Machine Learning Integration
- 🌦️ Real-Time Weather Data
- ☀️ Solar Output Monitoring
- ⚡ Grid Frequency Monitoring
- 🔌 Voltage Monitoring
- 🌙 Modern & Responsive UI
- 📱 Mobile-Friendly Design
- ☁️ Cloud Deployment using Vercel & Render

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- Recharts
- Lucide React

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- JWT Authentication
- bcrypt.js
- Axios
- CORS
- dotenv

### AI / Machine Learning

- Python
- Flask
- Flask-CORS
- Machine Learning Model
- REST API

### Deployment

- Frontend: Vercel
- Node.js Backend: Render
- AI Backend: Render
- Database: MongoDB Atlas

## 📂 Project Structure

```text
AI-Energy-Optimizer/
│
├── client/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── config/
│   ├── utils/
│   └── server.js
│
├── ai/
│   ├── app.py
│   ├── model.py
│   ├── requirements.txt
│   └── data/
│
└── README.md
```

## 🚀 Installation

### 1. Clone Repository

```bash
git clone https://github.com/Raghav335/AI-Energy-Optimizer.git
cd AI-Energy-Optimizer
```

### 2. Frontend Setup

```bash
cd client
npm install
npm run dev
```

### 3. Backend Setup

Open a new terminal:

```bash
cd server
npm install
npm start
```

### 4. AI Service Setup

Open another terminal:

```bash
cd ai
pip install -r requirements.txt
python app.py
```

## 🔑 Environment Variables

Create a `.env` file inside the **server** folder:

```env
PORT=5000
MONGO_URI=YOUR_MONGODB_URI
JWT_SECRET=YOUR_SECRET_KEY
AI_API_URL=Your_BACKEND_URL
```

> ⚠️ Never commit your `.env` file or private credentials to GitHub.

## 🤖 AI Prediction

The project includes a dedicated Python Flask AI service for energy demand prediction.

### AI Architecture

```text
React Frontend
      ↓
Node.js / Express Backend
      ↓
Python Flask AI API
      ↓
Machine Learning Model
      ↓
AI Energy Prediction
```

The AI service accepts parameters such as:

```text
hour
temperature
```

Example request:

```text
/predict?hour=14&temperature=32
```

The prediction is then returned through the backend and displayed on the dashboard.

## 🌦️ Weather Integration

The platform integrates real-time weather information and displays:

- 🌡️ Temperature
- 💧 Humidity
- 💨 Wind Speed
- 📍 City Information

Weather data is fetched through the backend and displayed directly on the dashboard.

## 📊 Real-Time Analytics

The dashboard provides live energy analytics including:

- ⚡ Current Load
- 🤖 AI Prediction
- ☀️ Solar Output
- ⚡ Grid Frequency
- 🔌 Voltage
- 📈 Live Power Charts

Analytics data is automatically refreshed to provide a real-time monitoring experience.

## 🔐 Authentication

The application uses JWT-based authentication with:

- User Registration
- Secure Login
- Password Hashing
- JWT Token Generation
- Dynamic User Name Display

Each logged-in user sees their own name on the dashboard.

## 🎯 Future Enhancements

- 🤖 AI Chat Assistant
- 🔔 Smart Energy Alerts
- 🌦️ Advanced Weather-Based AI Prediction
- 📊 Historical Energy Analytics
- ☀️ Solar Energy Optimization
- 🌍 Multi-language Support

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Push your branch
5. Open a Pull Request

## 👨‍💻 Developer

**Raghav Gupta**

📧 Email: raghavgupta805288@gmail.com

🌐 GitHub: https://github.com/Raghav335

## 📄 License

This project is licensed under the MIT License.

---

⭐ If you like this project, don't forget to star the repository.