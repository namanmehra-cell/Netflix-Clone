import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {
  getFirestore,collection,getDocs
} from 'firebase/firestore'




const firebaseConfig = {
  apiKey: "AIzaSyC47MqcygRYL2WfDv3l1fCFUkWOOWqqNno",
  authDomain: "netflix-clone-2bd1a.firebaseapp.com",
  projectId: "netflix-clone-2bd1a",
  storageBucket: "netflix-clone-2bd1a.appspot.com",
  messagingSenderId: "1061662899004",
  appId: "1:1061662899004:web:79d407d1fda8569cebbc39"
};
// initialize firebase app
const app = initializeApp(firebaseConfig);
// initialize authentication
export const auth = getAuth(app)
//initialize databse services
export const db = getFirestore()
// collection products from firestore
const colRef = collection(db,'products')
export const custRef = collection(db,'customers')
export default colRef;
