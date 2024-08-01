import { signOut } from "firebase/auth";
import { auth } from "./Firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SignOut = () => {
  const navigate = useNavigate();

  useEffect(() => {
    signOut(auth)
      .then(() => {
        // Sign-out successful, redirect to login
        navigate("/login");
      })
      .catch((error) => {
        // An error happened, handle it if needed
        console.error("Error signing out: ", error);
      });
  }, [navigate]);
  return <div>Signing you ou...</div>;
};

export default SignOut;
