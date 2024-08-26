import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import app from "./firebaseconfig"; // Подставьте верный путь к файлу firebaseconfig с вашим конфигурацией

export const updateRecordScore = async (currentScore: number) => {
  const db = getFirestore(app);
  const docRef = doc(db, "scores", "record");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const recordScore = docSnap.data().score;

    if (currentScore > recordScore) {
      await setDoc(doc(db, "scores", "record"), { score: currentScore });
    }
  }
};
