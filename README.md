# AI-Powered Narrative-to-IEC 61131-3 Code Generator

An intelligent full-stack PLC programming assistant that transforms natural-language industrial automation requirements into IEC 61131-3 programming solutions, including Structured Text (ST) and conceptual Ladder Logic representations.

The application uses a React + Vite frontend, FastAPI backend, Firebase Authentication and Firestore, and Gemini AI for PLC-focused code generation and analysis.

---

## 🚀 Live Demo

👉 **Live Application:** [Add Deployed Application Link]

---

## 🎥 Demo Video

👉 **Project Demo Video:** [Add Google Drive Video Link]

---

## ✨ Key Features

- 🤖 AI-powered IEC 61131-3 programming assistant
- 📝 Natural language to PLC code generation
- 🪜 Conceptual ASCII Ladder Diagram generation
- 💻 Structured Text (ST) generation
- ✅ AI-generated logic validation and executability assessment
- 🔄 Consistency checks between PLC code and Ladder representations
- 🔐 Firebase Authentication with Google Sign-In
- 💬 Chat sessions and conversation history management
- 📚 Knowledge Library to save useful and accurate responses
- 🔍 Search functionality for saved Library responses
- 👎 Accuracy feedback mechanism for incorrect responses
- 🔥 Firebase Firestore integration
- ⚡ FastAPI backend
- ⚛️ React + Vite frontend
- 📋 Copy-to-clipboard functionality
- 🛡️ Protected routes for authenticated users

---

## 🛠️ Technology Stack

### Frontend

- React
- Vite
- JavaScript
- Tailwind CSS
- shadcn/ui
- Firebase Authentication
- Firebase Firestore

### Backend

- Python
- FastAPI
- Uvicorn
- Firebase Admin SDK
- Google Gemini API

### Database & Authentication

- Firebase Authentication
- Firebase Firestore

### AI

- Google Gemini API
- PLC-focused system prompting
- Structured JSON response generation

---

## 📁 Project Structure

```text
Code-genaration-Narrative-to-IEC-61131/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── contexts/
│   │   ├── lib/
│   │   └── pages/
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── app/
│   │   ├── api/
│   │   ├── core/
│   │   ├── models/
│   │   └── services/
│   ├── main.py
│   └── requirements.txt
│
├── .gitignore
└── README.md
```

---

## ⚙️ Setup & Installation

### Prerequisites

Before running the project, make sure you have:

- Node.js v16 or higher
- Python v3.8 or higher
- Git
- A Firebase project
- A Gemini API key

---

### 1. Clone the Repository

Clone the project from GitHub:

```bash
git clone https://github.com/Priyavarshini13/Code-genaration-Narrative-to-IEC-61131.git
```

Navigate to the project:

```bash
cd Code-genaration-Narrative-to-IEC-61131
```

---

### 2. Frontend Setup

Navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Configure your Firebase web application credentials in:

```text
frontend/src/lib/firebase.js
```

Use the Firebase web configuration obtained from your Firebase project.

> Do not place Firebase Admin service-account credentials in the frontend.

---

### 3. Backend Setup

Navigate to the server directory:

```bash
cd server
```

Create a Python virtual environment:

```bash
python -m venv venv
```

Activate the virtual environment.

#### Windows

```bash
venv\Scripts\activate
```

#### macOS/Linux

```bash
source venv/bin/activate
```

Install the required Python dependencies:

```bash
pip install -r requirements.txt
```

---

### 4. Configure Firebase Admin SDK

Open your Firebase project and generate a Firebase Admin SDK service-account key.

Download the JSON file and rename it to:

```text
firebase-service-account.json
```

Place the file inside the `server` directory:

```text
server/
├── firebase-service-account.json
├── main.py
└── ...
```

> ⚠️ Never commit `firebase-service-account.json` to GitHub. The service-account file contains sensitive private credentials and should be excluded using `.gitignore`.

---

### 5. Configure Gemini API

Create a `.env` file inside the `server` directory:

```text
server/.env
```

Add your Gemini API key:

```env
GEMINI_API_KEY=your_gemini_api_key
```

Replace `your_gemini_api_key` with your actual Gemini API key.

> ⚠️ Never commit your `.env` file or Gemini API key to GitHub.

---

## ▶️ How to Run the Project

Both the backend and frontend must be running during local development.

### Terminal 1 — Start the Backend

Navigate to the server directory:

```bash
cd server
```

Activate the virtual environment on Windows:

```bash
venv\Scripts\activate
```

Start the FastAPI server:

```bash
python main.py
```

The backend will typically be available at:

```text
http://localhost:8000
```

---

### Terminal 2 — Start the Frontend

Navigate to the frontend directory:

```bash
cd frontend
```

Start the Vite development server:

```bash
npm run dev
```

The frontend will typically be available at:

```text
http://localhost:5173
```

Open the frontend URL in your browser.

Sign in using Google Authentication to access the IEC 61131-3 programming assistant.

---

## 🔌 API Endpoints

### System

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Root endpoint |
| GET | `/health` | Backend health check |

### User

Authentication is required.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/v1/user/profile` | Get authenticated user profile |
| POST | `/api/v1/user/verify-token` | Verify Firebase authentication token |
| GET | `/api/v1/user/protected` | Access protected endpoint |

### AI

Authentication is required.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/v1/ai/chat` | Send a PLC-related query to the AI assistant |
| GET | `/api/v1/ai/status` | Get AI service status |

### Chat Sessions

Authentication is required.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/v1/chat/sessions` | Create a new chat session |
| GET | `/api/v1/chat/sessions` | Get user chat sessions |
| GET | `/api/v1/chat/sessions/{id}/messages` | Get messages from a chat session |
| POST | `/api/v1/chat/sessions/{id}/messages` | Send a message in a chat session |
| PUT | `/api/v1/chat/sessions/{id}` | Update a chat session title |
| DELETE | `/api/v1/chat/sessions/{id}` | Delete a chat session |

### Knowledge Library

Authentication is required.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/v1/library/entries` | Save an accurate response to the Library |
| GET | `/api/v1/library/entries` | Get saved Library entries |
| POST | `/api/v1/library/search` | Search saved Library entries |
| GET | `/api/v1/library/stats` | Get Library statistics |

---

## 🔒 Security Notes

The following files should never be committed to GitHub:

```text
.env
firebase-service-account.json
venv/
node_modules/
```

Make sure these files and directories are included in `.gitignore`.

If a Firebase service-account private key or Gemini API key is accidentally exposed publicly, revoke the credential immediately and generate a new one.

---

## 📌 Usage

1. Start the FastAPI backend.
2. Start the React frontend.
3. Open the application in your browser.
4. Sign in using Google Authentication.
5. Create a new chat.
6. Enter a PLC or industrial automation requirement in natural language.
7. View the generated explanation, Ladder representation, and IEC 61131-3 Structured Text.
8. Review the validation information provided with generated logic.
9. Mark inaccurate responses using the feedback option.
10. Save accurate and useful responses to the Knowledge Library.
11. Search previously saved responses from the Library.

---

## 🚀 Future Enhancements

- Support additional IEC 61131-3 languages
- Improve automated PLC logic validation
- Add vendor-specific PLC code generation
- Add PLC compiler/runtime integration for executable validation
- Improve Ladder Diagram visualization
- Add more advanced industrial automation use cases
- Implement file upload and Firebase Storage integration
- Add automated testing for generated PLC logic

---

## 👩‍💻 Author

**Priyavarshini V**

GitHub: Priyavarshini13
