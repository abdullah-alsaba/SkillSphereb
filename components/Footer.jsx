import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid w-full max-w-[1280px] gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <h3 className="text-lg font-bold text-slate-900">SkillSphere</h3>
          <p className="mt-3 text-sm text-slate-500">
            Empowering professionals through high-impact, curated educational experiences.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-bold text-slate-800">Platform</h4>
          <ul className="space-y-2 text-sm text-slate-500">
            <li><Link href="/courses" className="hover:text-orange-600">Courses</Link></li>
            <li><Link href="/" className="hover:text-orange-600">Instructors</Link></li>
            <li><Link href="/" className="hover:text-orange-600">Roadmap</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-bold text-slate-800">Company</h4>
          <ul className="space-y-2 text-sm text-slate-500">
            <li><Link href="/" className="hover:text-orange-600">About Us</Link></li>
            <li><Link href="/" className="hover:text-orange-600">Contact Us</Link></li>
            <li><Link href="/" className="hover:text-orange-600">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-bold text-slate-800">Legal</h4>
          <ul className="space-y-2 text-sm text-slate-500">
            <li><Link href="/" className="hover:text-orange-600">Privacy Policy</Link></li>
            <li><Link href="/" className="hover:text-orange-600">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center justify-between gap-3 px-4 py-5 text-sm text-slate-500 sm:flex-row sm:px-6 lg:px-8">
          <p>© 2026 SkillSphere. Energized Learning.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-orange-600">LinkedIn</a>
            <a href="#" className="hover:text-orange-600">X</a>
            <a href="#" className="hover:text-orange-600">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

