"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="text-gray-900 font-bold text-xl tracking-tight">
          Swiat<span className="text-blue-600">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm text-gray-500">
          <Link href="#usecases" className="hover:text-gray-900 transition-colors">Use Cases</Link>
          <Link href="#participants" className="hover:text-gray-900 transition-colors">Participants</Link>
          <Link href="#news" className="hover:text-gray-900 transition-colors">News</Link>
          <Link href="#about" className="hover:text-gray-900 transition-colors">About</Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="#"
            className="text-sm bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-lg transition-colors"
          >
            Express Interest
          </Link>
        </div>

        <button
          className="md:hidden text-gray-500 hover:text-gray-900"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 text-sm text-gray-500">
          <Link href="#usecases" onClick={() => setOpen(false)}>Use Cases</Link>
          <Link href="#participants" onClick={() => setOpen(false)}>Participants</Link>
          <Link href="#news" onClick={() => setOpen(false)}>News</Link>
          <Link href="#about" onClick={() => setOpen(false)}>About</Link>
          <hr className="border-gray-100" />
          <Link href="#" className="bg-blue-600 text-white font-medium px-4 py-2 rounded-lg text-center">
            Express Interest
          </Link>
        </div>
      )}
    </nav>
  );
}
