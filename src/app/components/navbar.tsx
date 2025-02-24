"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-pink-400 px-4 py-2">
      {/* Left: Logo */}
      <div className="flex items-center">
        {/* White logo SVG: /white_logo.svg */}
        {/* Remove <a>, move classes to <Link> */}
        <Link href="/" className="flex items-center">
          <Image
            src="/white_logo.svg"
            alt="Gym Logo"
            width={40}
            height={40}
            priority
          />
          {/* Optional Gym Name if you want text next to logo */}
          {/* <span className="ml-2 text-white font-bold text-lg">Phoenix Gym</span> */}
        </Link>
      </div>

      {/* Middle: Nav Links (hidden on mobile) */}
      <ul className="hidden md:flex space-x-8">
        <li>
          {/* Remove nested <a>, apply classes to <Link> */}
          <Link href="#schedule" className="text-white hover:text-gray-100">
            Schedule
          </Link>
        </li>
        <li>
          <Link href="#classes" className="text-white hover:text-gray-100">
            Classes
          </Link>
        </li>
      </ul>

      {/* Right: Contact Us Button (hidden on mobile) */}
      <div className="hidden md:block">
        {/* This is a standard <a> tag (not inside <Link>) for external WhatsApp link */}
        <a
          href="https://wa.me/6281808418666"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          <Image
            src="/whatsapp_icon.svg"
            alt="WhatsApp Icon"
            width={20}
            height={20}
            className="mr-2"
          />
          Contact Us
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          // "X" icon
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M6 6L18 18M6 18L18 6" stroke="white" strokeWidth="2" />
          </svg>
        ) : (
          // Hamburger icon
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M4 5h16v2H4zM4 11h16v2H4zM4 17h16v2H4z" />
          </svg>
        )}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-pink-400 flex flex-col items-center md:hidden space-y-4 py-4 z-10">
          <Link
            href="#schedule"
            className="text-white hover:text-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Schedule
          </Link>
          <Link
            href="#classes"
            className="text-white hover:text-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Classes
          </Link>
          {/* Contact Us button (external link) */}
          <a
            href="https://wa.me/6281808418666"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          >
            <Image
              src="/whatsapp_icon.svg"
              alt="WhatsApp Icon"
              width={20}
              height={20}
              className="mr-2"
            />
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}
