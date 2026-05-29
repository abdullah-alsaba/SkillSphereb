import Image from "next/image";
import Link from "next/link";
import courses from "@/data/courses.json";
import CourseCard from "@/components/CourseCard";

const instructors = [
  {
    name: "Dr. Aris Thorne",
    role: "Senior Architect @ Google",
    bio: "Expert in Distributed Systems and Cloud Infrastructure.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Sarah Jenkins",
    role: "Creative Director",
    bio: "Award-winning designer with 15+ years experience.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Michael Chen",
    role: "AI Research Lead",
    bio: "Specialist in AI, Machine Learning, and Big Data.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Elena Rodriguez",
    role: "Full Stack Engineer",
    bio: "Passionate educator specializing in Javascript ecosystems.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
  },
];

const tips = [
  { icon: "🕐", title: "Micro-Learning", desc: "Study in 15-minute bursts to improve retention." },
  { icon: "🔁", title: "Active Recall", desc: "Test yourself regularly to cement concepts." },
  { icon: "👥", title: "Peer Reviews", desc: "Share work and get feedback from our community." },
  { icon: "📅", title: "Spaced Repetition", desc: "Our algorithm schedules reviews perfectly." },
];

export default function Home() {
  const popular = courses.filter((c) => c.popular).slice(0, 3);
  const trending = courses.filter((c) => c.trending).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-slate-50 py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-orange-100 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-100 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600">
              ⚡ NEW COURSES AVAILABLE
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight max-w-xl">
              Upgrade Your Skills Today
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-7 max-w-lg">
              Join over 50,000 learners mastering new technologies and business strategies with our industry-leading experts.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/courses" className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-7 py-3 rounded-xl">
                Explore Courses
              </Link>
              <button className="border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 text-sm font-semibold px-7 py-3 rounded-xl">
                View Roadmap
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop"
                alt="Students collaborating"
                width={1600}
                height={1067}
                className="h-65 sm:h-80 lg:h-95 w-full rounded-xl object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white border border-slate-100 rounded-xl px-4 py-3 shadow-md flex items-center gap-2">
              <svg className="h-4 w-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div>
                <p className="text-xs font-bold text-slate-900">Certified Learning</p>
                <p className="text-xs text-slate-500">Accredited by Global Tech</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-2">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Popular Courses</h2>
              <p className="text-sm text-slate-500 mt-1">Start your journey with our most-enrolled learning paths.</p>
            </div>
            <Link href="/courses" className="text-sm font-medium text-orange-500 hover:underline">Browse All →</Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {popular.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Trending Courses */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-orange-500">Hot Right Now</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">Trending Courses</h2>
              <p className="text-sm text-slate-500 mt-1">Most popular courses this week among our learners.</p>
            </div>
            <Link href="/courses" className="text-sm font-medium text-orange-500 hover:underline">View All →</Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trending.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Learning Tips */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="grid grid-cols-2 gap-4">
              {tips.map((tip) => (
                <div key={tip.title} className="bg-slate-50 rounded-2xl p-5">
                  <span className="text-2xl">{tip.icon}</span>
                  <h4 className="mt-2 text-sm font-semibold text-slate-900">{tip.title}</h4>
                  <p className="mt-1 text-xs text-slate-500 leading-5">{tip.desc}</p>
                </div>
              ))}
            </div>
            <div className="space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Effective Learning Tips</h2>
              <p className="text-sm text-slate-600 leading-7">
                We do not just provide content; we provide a methodology. Our platform is built on neuroscientist principles to ensure your time spent learning is as efficient as possible.
              </p>
              <ul className="space-y-3">
                {[
                  "Personalized learning paths based on your goals",
                  "Interactive coding environments and sandboxes",
                  "Downloadable resources for offline study",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#" className="inline-flex items-center gap-1 text-sm font-medium text-orange-500 hover:underline">
                Learn more about our methodology →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Top Instructors */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Learn From The Best</h2>
            <p className="mt-2 text-sm text-slate-500">
              Our instructors are active professionals from top-tier companies like Google, Meta, and Stripe.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {instructors.map((ins) => (
              <div key={ins.name} className="flex flex-col items-center text-center">
                <div className="relative h-24 w-24">
                  <Image src={ins.image} alt={ins.name} fill className="rounded-full object-cover" />
                  <span className="absolute bottom-0 right-0 h-6 w-6 bg-orange-500 rounded-full flex items-center justify-center">
                    <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
                <h3 className="mt-4 text-sm font-bold text-slate-900">{ins.name}</h3>
                <p className="text-xs font-medium text-orange-500">{ins.role}</p>
                <p className="mt-1 text-xs text-slate-500">{ins.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-800 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Ready to transform your career?</h2>
          <p className="mt-3 text-sm text-slate-400">
            Join SkillSphere today and get access to over 500+ premium courses with a single subscription.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full max-w-xs bg-slate-700 border-0 text-white placeholder-slate-400 text-sm px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-6 py-3 rounded-lg">
              Get Started Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
}