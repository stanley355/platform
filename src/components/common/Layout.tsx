import React from "react";
import classNames from "classnames";
import { Inter } from "next/font/google";
import Navbar from "./Navbar";
import { FaCopyright } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main
        className={inter.className}
      >
        {children}
      </main>
      <footer className="flex justify-center ">
        Copyright <FaCopyright /> InGoods {new Date().getFullYear()}
      </footer>
    </>
  );
};

export default Layout;
