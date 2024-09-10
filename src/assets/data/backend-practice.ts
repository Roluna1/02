/*// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, get } from "firebase/database";
import { FormatProduct } from "./products";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvoY3YT4Fu5wexP54g2BPicS79Vn4VSSk",
  authDomain: "roluna-1.firebaseapp.com",
  databaseURL: "https://roluna-1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "roluna-1",
  storageBucket: "roluna-1.appspot.com",
  messagingSenderId: "694885216808",
  appId: "1:694885216808:web:a2ca66a0e38789f96afb1d",
  measurementId: "G-MN4BR38BRM"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//console.log(analytics)
const database = getDatabase(app);
// Define the path to your data
export const productsRef = ref(database, 'products');
// Fetch data from the path

export let productFetch: FormatProduct[];
get(productsRef).then((snapshot) => {
  if (snapshot.exists()) {
    let data = snapshot.val();
    productFetch = data
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error("Error fetching data:", error);
});
*/