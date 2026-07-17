import os
import json
import firebase_admin
from firebase_admin import credentials, auth
from app.core.config import settings


class FirebaseService:
    _instance = None
    _initialized = False

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

    def __init__(self):
        if not self._initialized:
            self._initialize_firebase()
            self._initialized = True

    def _initialize_firebase(self):
        """Initialize Firebase Admin SDK for local development and Render."""
        try:
            # Check if Firebase is already initialized
            firebase_admin.get_app()
            print("Firebase Admin SDK already initialized.")
            return

        except ValueError:
            # Firebase app has not been initialized yet
            pass

        try:
            # ---------------------------------------------------------
            # OPTION 1: Render / Production
            # Read Firebase service account JSON from environment variable
            # ---------------------------------------------------------
            firebase_json = os.getenv("FIREBASE_SERVICE_ACCOUNT_JSON")

            if firebase_json:
                service_account_info = json.loads(firebase_json)

                cred = credentials.Certificate(service_account_info)

                firebase_admin.initialize_app(cred)

                print(
                    "Firebase Admin SDK initialized from "
                    "FIREBASE_SERVICE_ACCOUNT_JSON environment variable."
                )

                return

            # ---------------------------------------------------------
            # OPTION 2: Local Development
            # Read firebase-service-account.json file
            # ---------------------------------------------------------
            if os.path.exists(settings.FIREBASE_SERVICE_ACCOUNT_PATH):

                cred = credentials.Certificate(
                    settings.FIREBASE_SERVICE_ACCOUNT_PATH
                )

                firebase_admin.initialize_app(cred)

                print(
                    "Firebase Admin SDK initialized with "
                    "local service account file."
                )

                return

            # ---------------------------------------------------------
            # OPTION 3: Default Google Application Credentials
            # ---------------------------------------------------------
            cred = credentials.ApplicationDefault()

            firebase_admin.initialize_app(cred)

            print(
                "Firebase Admin SDK initialized with "
                "default application credentials."
            )

        except json.JSONDecodeError as e:

            print(
                "Firebase initialization error: "
                "FIREBASE_SERVICE_ACCOUNT_JSON is not valid JSON."
            )

            print(f"JSON error: {e}")

            print(
                "Warning: Firebase Admin SDK not initialized. "
                "Authentication will not work."
            )

        except Exception as e:

            print(f"Firebase initialization error: {e}")

            print(
                "Warning: Firebase Admin SDK not initialized. "
                "Authentication will not work."
            )

    def verify_id_token(self, id_token: str) -> dict:
        """Verify Firebase ID token and return user information."""

        try:

            decoded_token = auth.verify_id_token(id_token)

            return decoded_token

        except Exception as e:

            raise ValueError(
                f"Invalid authentication credentials: {str(e)}"
            )


# Create singleton instance
firebase_service = FirebaseService()