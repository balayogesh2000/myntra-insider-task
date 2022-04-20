import React from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home/Home";
import { LoaderProvider } from "./context/LoaderContext";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Header from "./components/Header/Header";
import ProtectedRoute from "./utils/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./context/AuthContext";
import { useAuthContext } from "./store/auth-context";

axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("token");

const App = () => {
  const authCtx = useAuthContext();
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Header />
      <AuthProvider>
        <LoaderProvider>
          <Routes>
            {/* {!authCtx.isLoggedIn && <Route path="/login" element={<Login />} />}
            {!authCtx.isLoggedIn && (
              <Route path="/signup" element={<Signup />} />
            )} */}
            <Route
              path="/"
              element={
                // <ProtectedRoute>
                <Home />
                // </ProtectedRoute>
              }
            />
            <Route path="*" element={<p>Not found</p>} />
          </Routes>
        </LoaderProvider>
      </AuthProvider>
    </div>
  );
};

export default App;
