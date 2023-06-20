import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAbJ6Fpt9pdfeFeTKcTb3UWLhhp6W1GCvU",
  authDomain: "taskthree-485fc.firebaseapp.com",
  projectId: "taskthree-485fc",
  storageBucket: "taskthree-485fc.appspot.com",
  messagingSenderId: "979816805327",
  appId: "1:979816805327:web:61a2e1a6c2a4533aa818ba"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app =  createApp(App)

registerPlugins(app)

app.mount('#app')

