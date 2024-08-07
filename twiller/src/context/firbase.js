import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
   apiKey: "AIzaSyDA96rHuqTn3xa5GLm_AIEMhaQFobKvakc",
  authDomain: "twiller-2ae04.firebaseapp.com",
  projectId: "twiller-2ae04",
  storageBucket: "twiller-2ae04.appspot.com",
  messagingSenderId: "242791597111",
  appId: "1:242791597111:web:2d2dbfabc0dd034096ebb2",
  measurementId: "G-YDM9MG91Z1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
// const analytics = getAnalytics(app);
