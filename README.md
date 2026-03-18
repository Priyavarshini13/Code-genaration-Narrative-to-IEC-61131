# Code-genaration-Narrative-to-IEC-61131
AI tool that converts natural language into IEC 61131 PLC code

React + FastAPI Firebase Authentication App
A full-stack application with React frontend and FastAPI backend, featuring Firebase authentication and storage.

🚀 Live Demo

👉 Visit the App Here: https://plc-xi.vercel.app/

Project Structure
├── frontend/          # React + Vite frontend
│   ├── src/
│   │   ├── components/   # UI components
│   │   ├── contexts/     # React contexts
│   │   ├── lib/         # Utilities and configs
│   │   └── pages/       # Page components
│   └── package.json
└── server/            # FastAPI backend
    ├── main.py        # FastAPI application
    └── requirements.txt
Features
✅ React frontend with Vite
✅ Tailwind CSS 3 for styling
✅ shadcn/ui components
✅ Firebase Authentication (Google Sign-in)
✅ Firebase Firestore for chat storage
✅ Protected routes
✅ FastAPI backend
✅ Firebase Admin SDK integration
✅ Chat sessions and history management
✅ Real-time chat interface
✅ IEC 61131-3 Programming Assistant
✅ Structured JSON responses (text, ladder diagrams, PLC code)
✅ Monaco Editor for code display
✅ Copy-to-clipboard functionality
🔄 Firebase Storage (ready for implementation)
Setup Instructions
Prerequisites
Node.js (v16 or higher)
Python (v3.8 or higher)
Firebase Project
Firebase Configuration
Go to Firebase Console
Create a new project or select existing one
Enable Authentication and set up Google provider
Enable Firestore Database
Enable Storage
Get your Firebase config and service account key
Frontend Setup
Navigate to frontend directory:

cd frontend
Install dependencies:

npm install
Create .env.local file with your Firebase config:

VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=your-app-id
Start development server:

npm run dev
Backend Setup
Navigate to server directory:

cd server
Create virtual environment:

python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
Install dependencies:

pip install -r requirements.txt
Download your Firebase service account key and save as firebase-service-account.json in the server directory

Start the server:

python main.py
Usage
Start both frontend and backend servers
Open http://localhost:5173 in your browser
Click "Continue with Google" to authenticate
You'll be redirected to the protected home page
API Endpoints
System
GET / - Root endpoint
GET /health - Health check
User (requires authentication)
GET /api/v1/user/profile - Get user profile
POST /api/v1/user/verify-token - Verify token validity
GET /api/v1/user/protected - Protected endpoint example
AI (requires authentication)
POST /api/v1/ai/chat - Chat with Gemini AI
GET /api/v1/ai/status - Get AI service status
Chat Sessions (requires authentication)
POST /api/v1/chat/sessions - Create new chat session
GET /api/v1/chat/sessions - Get all user chat sessions
GET /api/v1/chat/sessions/{id}/messages - Get messages for a session
POST /api/v1/chat/sessions/{id}/messages - Send message to session
PUT /api/v1/chat/sessions/{id} - Update session title
DELETE /api/v1/chat/sessions/{id} - Delete chat session
Next Steps
Add more protected routes
Implement file upload with Firebase Storage
Add user management features
Implement database integration
Add error handling and notifications
