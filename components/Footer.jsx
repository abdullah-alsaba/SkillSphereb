import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand & Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-white">Skill<span className="text-primary">Sphere</span></h3>
            <p className="text-sm text-slate-400 leading-6">
              Empowering professionals through high-impact, curated educational
              experiences. Join the future of learning.
            </p>
            <div className="space-y-2 text-sm text-slate-400">
              <p className="flex items-center gap-2">
                <span>📧</span> support@skillsphere.com
              </p>
              <p className="flex items-center gap-2">
                <span>📞</span> +1 (555) 234-5678
              </p>
              <p className="flex items-center gap-2">
                <span>📍</span> Tech Hub Tower, San Francisco, CA
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Platform</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/courses" className="hover:text-white transition-colors">
                  All Courses
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Top Instructors
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Learning Tips
                </Link>
              </li>
              <li>
                <Link href="/profile" className="hover:text-white transition-colors">
                  My Account
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  About SkillSphere
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Press & Media
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Help & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Social Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Legal & Social</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>

            <div className="pt-2">
              <p className="text-xs font-semibold text-slate-400 mb-3 uppercase">Connect With Us</p>
              <div className="flex gap-3 text-lg">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-xs btn-neutral hover:btn-primary" aria-label="Facebook">
                  🌐
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-xs btn-neutral hover:btn-primary" aria-label="Twitter">
                  🐦
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-xs btn-neutral hover:btn-primary" aria-label="LinkedIn">
                  💼
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-xs btn-neutral hover:btn-primary" aria-label="GitHub">
                  💻
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} SkillSphere. All rights reserved. Built for Assignment 8.
        </div>
      </div>
    </footer>
  );
}
