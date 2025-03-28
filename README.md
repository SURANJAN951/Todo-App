🚀 Smart To-Do App
A feature-rich, dynamic, and visually appealing To-Do App built with React, Redux, and Vite. This app is designed to not only manage tasks efficiently but also provide task analytics, real-time weather insights, and voice-based task input to enhance user experience.

🌟 Features
Task Management: Add, categorize, prioritize, and delete tasks effortlessly.

Real-Time Weather 🌦️: Get weather updates for outdoor tasks based on location.

Task Progress Analytics 📊: Visual representation of completed vs. pending tasks & priority breakdown.

Speech-to-Text Input 🎤: Add tasks using voice commands for hands-free experience. 

Authentication System 🔒: Secure login system to manage tasks individually.

Responsive UI 📱: Works seamlessly on mobile, tablet, and desktop.

Persistent Storage 💾: Tasks and authentication status remain saved even after page refresh.


🚀 Getting Started
Follow these simple steps to set up and run the project on your local machine:

📦 Prerequisites
Ensure you have the following installed:

Node.js (>= 16.0)

npm or yarn

⚙️ Installation & Setup
Clone the Repository


git clone https://github.com/SURANJAN951/todo-app.git
cd todo-app
Install Dependencies


npm install
Set Up Environment Variables Create a .env file in the root directory and add your API key:


VITE_RAPIDAPI_KEY=your_api_key_here
Run the App

npm run dev
The app will be live at http://localhost:5173/.

📂 Project Structure
📦 src
 ┣ 📂 components
 ┃ ┣ 📜 Auth.jsx
 ┃ ┣ 📜 TaskInput.jsx
 ┃ ┣ 📜 TaskList.jsx
 ┃ ┣ 📜 Weather.jsx
 ┃ ┗ 📜 TaskAnalytics.jsx
 ┣ 📂 redux
 ┃ ┣ 📜 store.js
 ┃ ┣ 📜 tasksSlice.js
 ┃ ┣ 📜 authSlice.js
 ┃ ┗📜 store.js
 ┣ 📜 App.jsx
 ┣ 📜 main.jsx
 ┗ 📜 index.css

🛠️ Technologies Used
Frontend: React, Redux, Vite, MUI

Data Visualization: Chart.js / Recharts

Weather API: RapidAPI

State Management: Redux Toolkit

Speech Recognition: Web Speech API

💡 Future Enhancements
🔔 Task Reminders: Get notified about upcoming tasks.

📅 Calendar Integration: Sync tasks with Google Calendar.

🌍 Multi-language Support: Expand to different languages.

🎯 Why This Project?
This To-Do App goes beyond basic task management. With real-time weather, analytics, and voice input, it offers a seamless, interactive, and intelligent way to manage daily activities, making it stand out from traditional to-do lists.
