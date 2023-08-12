import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Home from "./pages/home/Home";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import PrivateRoutes from "./components/HOC/PrivateRoute";
import Layout from "./components/layout/Layout";
import { isUserLoggedIn } from "./actions/action";

function App() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn);
    }
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
