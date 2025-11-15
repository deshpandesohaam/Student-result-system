import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBBv99eVCdaGZgRlZrq6Bsz25dgcXicpf0",
  authDomain: "student-result-system-f8eb9.firebaseapp.com",
  projectId: "student-result-system-f8eb9",
  storageBucket: "student-result-system-f8eb9.appspot.com",
  messagingSenderId: "717302760011",
  appId: "1:717302760011:web:07a67fd1ce95b192a503ce",
  measurementId: "G-N34DD91Y7V",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
