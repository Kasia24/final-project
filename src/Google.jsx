import React from "react";
import { FcGoogle } from "react-icons/fc";
import { auth, provider } from "./firebaseConfig";
import { signInWithPopup } from "firebase/auth";

const GoogleLoginButton = () => {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User info:", result.user);
    } catch (error) {
      console.error("Error during Google login:", error.message);
    }
  };

  return (
    <button onClick={handleGoogleLogin} style={styles.button}>
      <FcGoogle style={styles.icon} />
      <span style={styles.text}>Google</span>
    </button>
  );
};

const styles = {
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "119.2px",
    height: "40px",
    backgroundColor: "rgba(170, 178, 197, 0.2)",
    color: "rgba(0, 0, 0, 1)",
    border: "1px solid rgba(170, 178, 197, 0.2)",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "500",
    boxShadow: "1px 2px 3px 0px rgba(170, 178, 197, 0.2)", // ✅ Dokładny cień
    transition: "background-color 0.2s ease",
    position: "absolute",
    top: "277px",
    left: "916.4px",
  },
  icon: {
    fontSize: "20px",
    marginRight: "8px",
  },
  text: {
    fontFamily: "Arial, sans-serif",
  },
};

export default GoogleLoginButton;
