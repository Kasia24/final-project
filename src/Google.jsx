import React from "react";
import { FaGoogle } from "react-icons/fa";
import firebaseConfig from "./firebaseConfig";

const GoogleLoginButton = () => {
  const handleGoogleLogin = async () => {
    try {
      const provider = firebaseConfig.provider;
      const result = await firebaseConfig.auth().signInWithPopup(provider);
      const user = result.user;
      console.log("User info:", user);
      // Możesz teraz przechować dane użytkownika w stanie aplikacji lub przekierować go do innej strony.
    } catch (error) {
      console.error("Error during Google login:", error.message);
    }
  };

  return (
    <button onClick={handleGoogleLogin} style={styles.button}>
      <FaGoogle style={styles.icon} />
      Zaloguj się przez Google
    </button>
  );
};

const styles = {
  button: {
    display: "flex",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#4285F4",
    color: "white",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  },
  icon: {
    marginRight: "10px",
  },
};

export default GoogleLoginButton;
