import MegaMenu from "@/components/Frontend/MegaMenu";
import Navbar from "@/components/Frontend/Navbar";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white ">
      <Navbar />
      <div className="bg-white mx-auto py-4 fixed top-20 left-0 right-0 w-full z-50 border-t border-gray-400/300 container">
        <MegaMenu />
      </div>
      {children}
    </div>
  );
}
