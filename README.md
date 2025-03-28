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
npm or yarn (Comes with Node.js)

⚙️ Installation & Setup
1️⃣ Clone the Repository

git clone https://github.com/SURANJAN951/todo-app.git
cd todo-app
2️⃣ Install Dependencies

npm install
3️⃣ Set Up Environment Variables
Create a .env file in the root directory and add your API key:


VITE_RAPIDAPI_KEY=your_api_key_here
4️⃣ Run the App

npm run dev
The app will be live at http://localhost:5173/.

🛠️ Technologies Used
Technology	         	Installation
React	                  	npm install react
Redux Toolkit	          	npm install @reduxjs/toolkit react-redux
React Router	          	npm install react-router-dom
MUI (Material-UI)		    npm install @mui/material @emotion/react @emotion/styled
Redux thunk	                npm i redux-thunk
Chart.js	               npm install chart.js
Recharts	               npm install recharts

📂 Project Structure
css
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
 ┃ ┗ 📜 store.js
 ┣ 📜 App.jsx
 ┣ 📜 main.jsx
 ┗ 📜 index.css

 

