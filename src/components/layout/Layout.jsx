import React from "react";
import NavBar from "../header/Header";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-6">{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;
