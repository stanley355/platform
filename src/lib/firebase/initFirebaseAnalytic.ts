import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const initFirebaseAnalytic = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyBDP4Uqybgxrl-etiQmBy58He7B82S32Tw",
    authDomain: "platform-fb471.firebaseapp.com",
    projectId: "platform-fb471",
    storageBucket: "platform-fb471.appspot.com",
    messagingSenderId: "1046705971556",
    appId: "1:1046705971556:web:f99ea8f39e31c714df9a71",
    measurementId: "G-3DL6N6HRN8"
  };

  if (process.env.NEXT_PUBLIC_APP_ENV !== "develop") {
    const app = initializeApp(firebaseConfig);
    getAnalytics(app);
  }
};

export default initFirebaseAnalytic;