// App.jsx
import React, { useState, useEffect } from "react";
import GoogleLoginButton from "./GoogleLoginButton";
import firebase from "./firebase-config";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Nasłuchuj na zmiany stanu użytkownika
    const unsubscribe = firebase.auth().onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await firebase.auth().signOut();
    setUser(null);
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      {user ? (
        <div>
          <h1>Witaj, {user.displayName}!</h1>
          <button
            onClick={handleLogout}
            style={{ padding: "10px", cursor: "pointer" }}
          >
            Wyloguj się
          </button>
        </div>
      ) : (
        <div>
          <h1>Proszę, zaloguj się</h1>
          <GoogleLoginButton />
        </div>
      )}
    </div>
  );
};

export default App;
