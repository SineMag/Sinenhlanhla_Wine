import { useState } from "react";
import "./App.css";
import Layout from "./pages/Layout";
import { Route, Routes } from "react-router-dom";
import FirstLayoutPage from "./pages/FirstLayoutPage";
import SecondLayoutPage from "./pages/SecondLayoutPage";
import ThirdLayoutPage from "./pages/ThirdLayoutPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FirstLayoutPage />} />
        <Route path="SecondLayoutPage" element={<SecondLayoutPage />} />

        <Route path="/admin" element={<Layout />}>
        <Route path="ThirdLayoutPage" element={<ThirdLayoutPage />}></Route>

        </Route>
      </Routes>
    </>
  );
}

export default App;
