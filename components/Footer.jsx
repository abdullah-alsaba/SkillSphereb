import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-base font-bold text-slate-900">SkillSphere</h3>
            <p className="text-sm text-slate-500 leading-6">
              Empowering professionals through high-impact, curated educational
              experiences. Join the future of learning.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-slate-900">Platform</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>
                <Link href="/courses" className="hover:text-slate-900">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-slate-900">
                  Instructors
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-slate-900">
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-slate-900">Company</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>
                <Link href="/" className="hover:text-slate-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-slate-900">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-slate-900">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-slate-900">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>
                <Link href="/" className="hover:text-slate-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-slate-900">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-100 pt-6 text-center text-xs text-slate-400">
          © 2024 SkillSphere. Energized Learning.
        </div>
      </div>
    </footer>
  );
}
