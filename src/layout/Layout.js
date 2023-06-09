import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Navbar/Nav";

const Layout = () => {
    return (
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;
