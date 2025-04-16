"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        flex items-center
        bg-brandHotPink
        px-[80px] py-2
        font-inter font-semibold text-[22.48px]
      "
    >
      {/* Left: Logo */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/white_logo.svg"
            alt="Gym Logo"
            width={40}
            height={40}
            priority
          />
        </Link>
      </div>

      {/* Middle: Nav Links (Centered on desktop) */}
      <ul className="hidden md:flex flex-1 justify-center space-x-[250px]">
        <li>
          <Link href="#schedule" className="text-brandWhite hover:text-gray-100">
            Schedule
          </Link>
        </li>
        <li>
          <Link href="#classes" className="text-brandWhite hover:text-gray-100">
            Classes
          </Link>
        </li>
      </ul>

      {/* Right: Contact Us (hidden on mobile) */}
      <div className="hidden md:block">
        <a
          href="https://wa.me/6285711194565"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center
            bg-brandGreen text-brandWhite
            border-2 border-brandWhite
            rounded-[10px]
            px-4 py-2
            hover:bg-brandGreen
          "
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
        className="md:hidden text-brandWhite focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          /* "X" icon */
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M6 6L18 18M6 18L18 6" stroke="white" strokeWidth="2" />
          </svg>
        ) : (
          /* Hamburger icon */
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M4 5h16v2H4zM4 11h16v2H4zM4 17h16v2H4z" />
          </svg>
        )}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div
          className="
            absolute top-[56px] left-0 w-full
            bg-brandHotPink
            flex flex-col items-center
            md:hidden space-y-4 py-4 z-10
            font-inter font-semibold text-[22.48px]
          "
        >
          <Link
            href="#schedule"
            className="text-brandWhite hover:text-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Schedule
          </Link>
          <Link
            href="#classes"
            className="text-brandWhite hover:text-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Classes
          </Link>
          <a
            href="https://wa.me/6281808418666"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center
              bg-brandGreen text-brandWhite
              border-2 border-brandWhite
              rounded-[10px]
              px-4 py-2
              hover:bg-brandGreen
            "
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