import { initializeApp ,getAuth } from 'firebase/app';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_KEY,
  authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_MESSAGING_APP_ID,
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// auth
export const auth = getAuth(firebaseApp);