import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router";
import Register from "./components/authentication/register";
import Login from "./components/authentication/login";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
      </Routes>
    </>
  );
};
export default App;
