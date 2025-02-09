import { auth, provider, signInWithPopup, signOut } from "../firebaseConfig";
import { useState } from "react";

const Header = () => {
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Błąd logowania:", error);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-xl font-bold text-blue-600">MyApp</div>
      <div>
        {user ? (
          <div className="flex items-center space-x-2">
            <img
              src={user.photoURL}
              alt="Avatar"
              className="h-8 w-8 rounded-full"
            />
            <span className="text-gray-700">{user.displayName}</span>
            <button
              onClick={handleLogout}
              className="ml-4 bg-red-500 text-white px-3 py-1 rounded"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={handleLogin}
            className="bg-white border flex items-center px-4 py-2 rounded shadow"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google"
              className="h-5 w-5 mr-2"
            />
            Google
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
