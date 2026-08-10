# ⚡ AI Energy Optimizer

An AI-powered web application designed to monitor, analyze, and predict energy consumption. The platform combines real-time energy analytics, weather data, secure authentication, interactive charts, and a Python-based Machine Learning service to provide intelligent energy insights.

## 🌐 Live Demo

https://ai-energy-optimizer-zeta.vercel.app

## ✨ Features

- 🔐 Secure User Authentication (JWT)
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
- 🌙 Modern & Responsive UI
- 📱 Mobile-Friendly Design
- ☁️ Cloud Deployment (Vercel + Render)

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

##🚀 Installation ##

#Clone Repository#
git clone https://github.com/Raghav335/AI-Energy-Optimizer.git
cd AI-Energy-Optimizer

##Frontend##

cd client
npm install
npm run dev

##Backend##

cd server
npm install
npm start

##AI Service##

cd ai
pip install -r requirements.txt
python app.py

##🔑 Environment Variables##

PORT=5000
MONGO_URI=YOUR_MONGODB_URI
JWT_SECRET=YOUR_SECRET_KEY

##🤖 AI Prediction API##

The project includes a dedicated Python Flask AI service for energy demand prediction.

Frontend
   ↓
Node.js / Express Backend
   ↓
Python Flask AI API
   ↓
Machine Learning Model
   ↓
AI Energy Prediction

The AI service accepts parameters such as:

hour
temperature

##🌦️ Weather Integration##

The platform integrates real-time weather information to display:
🌡️ Temperature
💧 Humidity
💨 Wind Speed
📍 City Information

Weather data is fetched through the backend and displayed on the dashboard.

##📊 Real-Time Analytics##

The dashboard provides live energy analytics including:
⚡ Current Load
🤖 AI Prediction
☀️ Solar Output
⚡ Grid Frequency
🔌 Voltage
📈 Live Power Charts

Analytics data is automatically refreshed to provide a real-time monitoring experience.

##🔐 Authentication##
The application uses JWT-based authentication with:
User Registration
Secure Login
Password Hashing
JWT Token Generation
Dynamic User Name Display
Each logged-in user sees their own name on the dashboard.

##🎯 Future Enhancements##

🤖 AI Chat Assistant
🔔 Smart Energy Alerts
🌦️ Weather-Based AI Prediction
📊 Historical Energy Analytics
☀️ Solar Energy Optimization
🌍 Multi-language Support

##🤝 Contributing##
Contributions are welcome!

1.Fork the repository
2.Create a new branch
3.Commit your changes
4.Push your branch
5.Open a Pull Request

##👨‍💻 Developer##
Raghav Gupta
📧 Email: raghavgupta805288@gmail.com
🌐 GitHub: https://github.com/Raghav335

##📄 License##
This project is licensed under the MIT License.

##⭐ If you like this project, don't forget to star the repository.##