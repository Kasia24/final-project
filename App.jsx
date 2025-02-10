import React, { useState, useEffect } from "react";
import GoogleLoginButton from "./src/Google";
import { auth } from "./src/firebaseConfig"; // Poprawiony import

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Nasłuchuj na zmiany stanu użytkownika
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await auth.signOut();
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
          <GoogleLoginButton />
        </div>
      )}
    </div>
  );
};

export default App;
