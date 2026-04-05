import {
  getFirestore,
  collection,
  getDocs,
  Firestore,
  getDoc,
  doc,
  query,
  addDoc,
  where,
} from "firebase/firestore";
import app from "./firebase";
import bcrypt from "bcrypt"; // Tambahan dari baris 7

const db = getFirestore(app);

export async function retrieveProducts(collectionName: string) {
  const snapshot = await getDocs(collection(db, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
}

export async function retrieveDataByID(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(db, collectionName, id));
  const data = snapshot.data();
  return data;
}

export async function signUp(
  userData: { 
    email: string; 
    fullname: string; 
    password: string;
    role?: string; // Tambahan dari baris 31
  },
  callback: Function
) {
  const q = query(
    collection(db, "users"),
    where("email", "==", userData.email)
  );
  
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (data.length > 0) {
    // Jika data ditemukan, berarti email sudah terdaftar
    callback({
      status: "error",
      message: "User already exists",
    });
  } else {
    // Proses pendaftaran (Blok kode baris 55-70)
    userData.password = await bcrypt.hash(userData.password, 10);
    userData.role = "member";
    
    await addDoc(collection(db, "users"), userData)
      .then(() => {
        callback({
          status: "success",
          message: "User registered successfully",
        });
      })
      .catch((error) => {
        callback({
          status: "error",
          message: error.message,
        });
      });
  }
}