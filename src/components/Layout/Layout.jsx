import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

function Layout({basket}) {
  return (
    <div className="container">
        <Header basket={basket}/>
        <Outlet />
    </div>
  )
}

export default Layout