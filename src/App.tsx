import { useState } from "react";
import "./App.css";
import Layout from "./pages/Layout";
import { Route, Routes } from "react-router-dom";
import FirstLayoutPage from "./pages/FirstLayoutPage";
import SecondLayoutPage from "./pages/SecondLayoutPage";
import ThirdLayoutPage from "./pages/ThirdLayoutPage";
import FourZeroFour from "./pages/FourZeroFour";
import Template from "./pages/Template";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FirstLayoutPage />} />
        <Route path="SecondLayoutPage" element={<SecondLayoutPage />} />

        <Route path="/admin" element={<Layout />}>
        <Route path="ThirdLayoutPage" element={<ThirdLayoutPage />} />

<Route path="/admin/:firstname" element={<Template />} />
        </Route>

        <Route path="*" element={<FourZeroFour />}/>

        



      </Routes>
    </>
  );
}

export default App;
