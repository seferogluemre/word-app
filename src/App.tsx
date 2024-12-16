import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

const WordsList: React.FC = () => {
  const [words, setWords] = useState<any[]>([]);

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "words"));
        const wordsList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setWords(wordsList);
      } catch (error) {
        console.error("Veriler alınırken hata oluştu:", error);
      }
    };

    fetchWords();
  }, []);

  return (
    <div>
      <h1>Words Listesi</h1>
      <ul>
        {words.map((word) => (
          <li key={word.id}>{JSON.stringify(word)}</li>
        ))}
      </ul>
    </div>
  );
};

export default WordsList;
