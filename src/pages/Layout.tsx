import React from "react";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import FirstLayoutPage from "./FirstLayoutPage";

export default function Layout() {
  return (
    <>
      <nav>
        <Link to={""}>FirstLayoutPage</Link>
        <Link to={""}>SecondLayoutPage</Link>
        <Link to={""}>ThirdLayoutPage</Link>
      </nav>
      <Outlet />
      <footer>
        This is my footer
      </footer>
    </>
  );
}
