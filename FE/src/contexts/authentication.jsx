import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const AuthContext = React.createContext();

function AuthProvider(props) {
  const [session, setSession] = useState({
    loading: null,
    error: null,
    user: null,
    admin: null,
  });
  const navigate = useNavigate();

  const login = async (data) => {
    try {
      setSession({ ...session, error: null });
      console.log("Sending login request with data:", data);
      const results = await axios.post(
        "http://localhost:4000/auth/login",
        data
      );
      console.log("Login response:", results);

      if (!results.data.token) {
        console.error("Login failed, no token received:", results.data.message);
        setSession({ ...session, error: results.data.message });
      } else {
        const token = results.data.token;
        const userDataFromToken = jwtDecode(token);
        console.log("Decoded token data:", userDataFromToken);
        setSession({ ...session, user: userDataFromToken, error: null });
        const redirectPage = localStorage.getItem("previousPage") || "/";
        navigate(redirectPage);
        localStorage.setItem("token", token);
        localStorage.removeItem("previousPage");
      }
    } catch (error) {
      console.error("Login error:", error);
      setSession({ ...session, error: error.message });
    }
  };

  // const adminLogin = async (data) => {
  //   try {
  //     setSession({ ...session, error: null });
  //     console.log("Sending admin login request with data:", data);
  //     const results = await axios.post(
  //       "http://localhost:4000/auth/admin/login",
  //       data
  //     );
  //     console.log("Admin login response:", results);

  //     if (!results.data.token) {
  //       console.error(
  //         "Admin login failed, no token received:",
  //         results.data.message
  //       );
  //       setSession({ ...session, error: results.data.message });
  //     } else {
  //       const token = results.data.token;
  //       const userDataFromToken = jwtDecode(token);
  //       console.log("Decoded admin token data:", userDataFromToken);

  //       if (userDataFromToken.role !== "admin") {
  //         console.error("Unauthorized access: user is not an admin");
  //         setSession({ ...session, error: "Unauthorized access" });
  //         navigate("/");
  //       } else {
  //         setSession({ ...session, admin: userDataFromToken, error: null });
  //         navigate("/admin");
  //         localStorage.setItem("role", "admin");
  //         localStorage.setItem("token", token);
  //       }
  //     }
  //   } catch (error) {
  //     console.error("Admin login error:", error);
  //     setSession({ ...session, error: error.message });
  //   }
  // };

  const register = async (data) => {
    try {
      console.log("Sending registration request with data:", data);
      const result = await axios.post(
        "http://localhost:4000/auth/register",
        data
      );
      console.log("Registration response:", result);

      if (result.data.message === "Register Successfully") {
        setSession({ ...session, error: null });
        navigate("/login");
      } else if (result.data.message === "Email already signed in") {
        setSession({ ...session, error: result.data.message });
        navigate("/register");
      }
    } catch (error) {
      console.error("Register error:", error);
      setSession({ ...session, error: error.message });
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setSession({ loading: null, error: null, user: null, admin: null });
    navigate("/");
  };

  const isAuthenicated = Boolean(localStorage.getItem("token"));

  return (
    <AuthContext.Provider
      value={{
        session,
        login,
        logout,
        register,
        isAuthenicated,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
