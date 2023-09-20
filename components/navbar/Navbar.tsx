"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [showNavSlider, setShowNavSlider] = useState<boolean>(false);

  const handleOpenNav = () => {
    setShowNavSlider(!showNavSlider);
  };

  return (
    <nav className="fixed top-0 right-0 left-0 flex justify-between transparent text-white text-4xl p-2">
      <Link href="/">Better Reads</Link>
      <button onClick={handleOpenNav}>Menu</button>
      {showNavSlider && (
        <div className="fixed inset-y-0 right-0 h-screen w-96 bg-black transition 500 ease-in-out">
          <div className="flex justify-end">
            <button className="p-2" onClick={handleOpenNav}>
              Close
            </button>
          </div>

          <ul className="flex flex-col gap-4 p-4">
            <li>Home</li>
            <li>News</li>
            <li>Trending</li>
          </ul>
        </div>
      )}
    </nav>
  );
}
