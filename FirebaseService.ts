import {initializeApp} from "firebase/app";
import {getDatabase, ref, set, get, child} from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyC9VG24XyHTjwiyu9THEXtawZgcxMW83jI",
  authDomain: "pushtest-155ad.firebaseapp.com",
  databaseURL: "https://pushtest-155ad-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pushtest-155ad",
  storageBucket: "pushtest-155ad.appspot.com",
  messagingSenderId: "563672699801",
  appId: "1:563672699801:web:3ce5224b05e5e4ecf47908",
  measurementId: "G-3MQB9J3FLS"
};

export const _ = initializeApp(firebaseConfig);
const db = getDatabase();
const dbRef = ref(db);

export const saveToken = async(userId: string, token:string)=>{
  const values = (await get(child(dbRef,`userTokens/${userId}/`))).val()??{};

  const payload = {...values,token};
  set(ref(db,`userTokens/${userId}/`),payload);
};

export const getToken = async (userId:string) =>{
  const values = (await get(child(dbRef,`userTokens/${userId}`))).val();
  return values ?? {};
}