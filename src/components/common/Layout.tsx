import React from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "./Navbar";
import { FaCopyright } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>InGoods: Pusatnya Barang Impor Murah dan Berkualitas</title>
        <meta name="description" content="InGoods adalah solusi Anda untuk membeli barang impor dengan mudah dan aman. Kami menyediakan berbagai macam barang impor dengan harga yang terjangkau. Temukan berbagai macam barang impor berkualitas dengan harga murah di InGoods. Kami selalu memberikan penawaran menarik untuk setiap pelanggan." />
        <meta name="keywords" content="Impor Ekspor, Jual Barang Impor, Barang Impor Murah" />
      </Head>
      <Navbar />
      <main
        className={inter.className}
      >
        {children}
      </main>
      <footer className="flex items-center justify-center bg-primary-color py-2 text-white gap-2">
        Copyright <FaCopyright /> InGoods {new Date().getFullYear()}
      </footer>
    </>
  );
};

export default Layout;
