// src/App.tsx
import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db, auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";

const WordsForm: React.FC = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [meaning, setMeaning] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      console.log("Giriş başarılı!");
    } catch (error) {
      console.error("Giriş sırasında hata oluştu:", error.message);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "words"), {
        isim: name,
        tarih: date || serverTimestamp(),
        anlam: meaning,
      });

      setName("");
      setDate("");
      setMeaning("");

      console.log("Veri başarıyla eklendi!");
    } catch (error) {
      console.error("Veri eklenirken hata oluştu:", error.message);
    }
  };

  return (
    <div>
      <h1>Word Ekleme Formu</h1>
      <button onClick={handleLogin}>Google ile Giriş Yap</button>
      <form onSubmit={handleSubmit}>
        <div>
          <label>İsim: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Kelime girin"
            required
          />
        </div>
        <div>
          <label>Anlam: </label>
          <input
            type="text"
            value={meaning}
            onChange={(e) => setMeaning(e.target.value)}
            placeholder="Kelimenin anlamını girin"
            required
          />
        </div>
        <div>
          <label>Tarih: </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button type="submit">Ekle</button>
      </form>
    </div>
  );
};

export default WordsForm;
