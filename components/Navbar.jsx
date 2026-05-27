import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/profile", label: "My Profile" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-2xl font-bold tracking-tight text-orange-600">
          SkillSphere
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-600 transition hover:text-orange-600"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 sm:flex">
          <Link href="/login" className="btn btn-ghost rounded-lg text-orange-600">
            Login
          </Link>
          <Link href="/register" className="btn rounded-lg border-0 bg-orange-500 text-white hover:bg-orange-600">
            Register
          </Link>
        </div>

        <div className="dropdown dropdown-end sm:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-square">
            <span className="text-xl">☰</span>
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content z-[1] mt-3 w-52 rounded-box border border-slate-200 bg-white p-2 shadow-lg"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/login">Login</Link>
            </li>
            <li>
              <Link href="/register">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

