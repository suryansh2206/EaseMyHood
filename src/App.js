import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router";
import Register from "./components/authentication/register";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </>
  );
};
export default App;
