# Code-genaration-Narrative-to-IEC-61131
AI tool that converts natural language into IEC 61131 PLC code

🚀 Code Generation – Narrative to IEC 61131

AI-powered platform that converts natural language into IEC 61131 PLC code for industrial automation.

🌐 Live Demo

👉 https://plc-xi.vercel.app/

📌 Features

🔐 Firebase Authentication (Google Sign-in)

⚡ React + Vite frontend

🚀 FastAPI backend

💬 Chat-based AI interface

🤖 IEC 61131-3 PLC code generation

📊 Structured outputs (text, ladder logic, PLC code)

🧾 Monaco Editor for code display

📋 Copy-to-clipboard

🔒 Protected routes

🔄 Chat history with Firestore

🏗️ Tech Stack

->Frontend: React, Vite, Tailwind CSS

->Backend: FastAPI (Python)

->Auth & DB: Firebase Authentication, Firestore

->AI: Gemini API

📂 Project Structure
frontend/   # React frontend
server/     # FastAPI backend

⚙️ Setup
Prerequisites

Node.js (v16+)

Python (3.8+)

Firebase project

🔹 Frontend
cd frontend
npm install
npm run dev

Create .env.local:

VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id

🔹 Backend
cd server
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r requirements.txt
python main.py

🚀 Usage

Start frontend and backend

Open http://localhost:5173

Login with Google

Enter prompt → Get PLC code

📡 API Endpoints

->GET /health → Health check

->POST /api/v1/ai/chat → AI chat

->GET /api/v1/user/profile → User data

->POST /api/v1/chat/sessions → Create session

🔮 Future Improvements

->File upload & PLC export

->Advanced ladder diagram visualization

->Better AI accuracy

->Notifications & error handling

🎯 Use Cases

->PLC programmers

->Automation engineers

->Students learning industrial control systems
