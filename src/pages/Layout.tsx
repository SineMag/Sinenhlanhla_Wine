import React from "react";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import FirstLayoutPage from "./FirstLayoutPage";

export default function Layout() {
  return (
    <>
      <nav>
        <Link to={"/"}>First Layout Page</Link>
        <Link to={"/SecondLayoutPage"}>Second Layout Page</Link>
        <Link to={"/admin/ThirdLayoutPage"}>Third Layout Page</Link>
      </nav>
      <Outlet />
      <footer>
        This is my footer
      </footer>
    </>
  );
}
