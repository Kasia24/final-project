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
    width: "17.17px", // Icon width
    height: "18px", // Icon height
    top: "288px",
    left: "936.16px",
  },
  text: {
    fontFamily: "Roboto, Arial, sans-serif", // Font family
    fontWeight: "500", // Font weight
    fontSize: "14px", // Font size
    lineHeight: "16.41px", // Line height
    letterSpacing: "2%", // Letter spacing
    width: "54.38px", // Width of the text area
    height: "20px", // Height of the text area
    top: "287px",
    left: "962.87px",
  },
};
export default GoogleLoginButton;
