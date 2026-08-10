"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    authClient.getSession().then(({ data }) => {
      if (data?.user) setUser(data.user);
    });
  }, []);

  const handleLogout = async () => {
    await authClient.signOut();
    setUser(null);
    router.push("/login");
  };

  return (
    <nav className="navbar bg-base-100 shadow-sm px-4 lg:px-12 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/courses">All Courses</Link>
            </li>
            {user && (
              <li>
                <Link href="/profile">My Profile</Link>
              </li>
            )}
          </ul>
        </div>
        <Link href="/" className="text-2xl font-black text-primary">
          Skill<span className="text-base-content">Sphere</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/courses">All Courses</Link>
          </li>
          {user && (
            <li>
              <Link href="/profile">Profile</Link>
            </li>
          )}
        </ul>
      </div>

      <div className="navbar-end gap-3">
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                {user.image ? (
                  <img
                    src={user.image}
                    alt={user.name}
                    className="rounded-full w-10 h-10 object-cover"
                  />
                ) : (
                  <div className="bg-primary text-primary-content w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold">
                    {user.name?.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="menu-title px-4 py-2">
                <span className="font-semibold text-base-content">
                  {user.name}
                </span>
                <span className="text-xs text-base-content/50">
                  {user.email}
                </span>
              </li>
              <div className="divider my-0" />
              <li>
                <Link href="/profile">My Profile</Link>
              </li>
              <li>
                <Link href="/profile/update">Update Profile</Link>
              </li>
              <div className="divider my-0" />
              <li>
                <button onClick={handleLogout} className="text-error">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <Link href="/login" className="btn btn-ghost btn-sm">
              Login
            </Link>
            <Link href="/register" className="btn btn-primary btn-sm">
              Get Started
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
