"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-orange-500">
          SkillSphere
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium text-slate-700 hover:text-orange-500"
          >
            Home
          </Link>
          <Link
            href="/courses"
            className="text-sm font-medium text-slate-700 hover:text-orange-500"
          >
            Courses
          </Link>
          <Link
            href="/profile"
            className="text-sm font-medium text-slate-700 hover:text-orange-500"
          >
            My Profile
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm font-medium text-slate-700 hover:text-orange-500"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2 rounded-lg"
          >
            Register
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <svg
            className="h-6 w-6 text-slate-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 pb-4 flex flex-col gap-3 pt-3">
          <Link
            href="/"
            className="text-sm font-medium text-slate-700"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/courses"
            className="text-sm font-medium text-slate-700"
            onClick={() => setOpen(false)}
          >
            Courses
          </Link>
          <Link
            href="/profile"
            className="text-sm font-medium text-slate-700"
            onClick={() => setOpen(false)}
          >
            My Profile
          </Link>
          <Link
            href="/login"
            className="text-sm font-medium text-slate-700"
            onClick={() => setOpen(false)}
          >
            Login
          </Link>
          <Link
            href="/register"
            className="bg-orange-500 text-white text-sm font-semibold px-5 py-2 rounded-lg text-center"
            onClick={() => setOpen(false)}
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  );
}
