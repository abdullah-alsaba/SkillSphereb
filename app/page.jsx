import Link from "next/link";
import courses from "@/data/courses.json";
import CourseCard from "@/components/CourseCard";

const instructors = [
  {
    name: "Dr. Aris Thorne",
    role: "Senior Architect @ Google",
    bio: "Expert in Distributed Systems and Cloud Infrastructure.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200",
  },
  {
    name: "Sarah Jenkins",
    role: "Creative Director",
    bio: "Award-winning designer with 15+ years experience.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
  },
  {
    name: "Michael Chen",
    role: "Data Scientist",
    bio: "Specialist in AI, Machine Learning, and Big Data.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
  },
  {
    name: "Elena Rodriguez",
    role: "Full Stack Engineer",
    bio: "Passionate educator specializing in Javascript ecosystems.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
  },
];

const tips = [
  {
    icon: "⏱",
    title: "Micro-Learning",
    desc: "Study in 15-minute bursts to improve retention.",
  },
  {
    icon: "🧠",
    title: "Active Recall",
    desc: "Test yourself regularly to cement concepts.",
  },
  {
    icon: "👥",
    title: "Peer Reviews",
    desc: "Share work and get feedback from our community.",
  },
  {
    icon: "🔁",
    title: "Spaced Repetition",
    desc: "Our algorithm schedules reviews perfectly.",
  },
];

export default function HomePage() {
  const popular = courses.slice(0, 3);
  const trending = courses.slice(3, 6);

  return (
    <main>
      {/* Hero */}
      <section className="bg-base-200 py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <span className="badge badge-outline badge-sm mb-4">
              ✦ NEW COURSES AVAILABLE
            </span>
            <h1 className="text-5xl lg:text-6xl font-black leading-tight mb-6">
              Upgrade Your Skills Today
            </h1>
            <p className="text-base-content/60 text-lg mb-8 max-w-md">
              Join over 50,000 learners mastering new technologies and business
              strategies with our industry-leading experts.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/courses" className="btn btn-primary btn-lg">
                Explore Courses
              </Link>
              <button className="btn btn-outline btn-lg">View Roadmap</button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600"
              alt="Learning"
              className="rounded-2xl shadow-2xl w-full max-w-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-3xl font-bold">Popular Courses</h2>
          <Link href="/courses" className="text-primary text-sm font-medium">
            Browse All →
          </Link>
        </div>
        <p className="text-base-content/60 mb-10">
          Start your journey with our most-enrolled learning paths.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popular.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* Trending Courses */}
      <section className="bg-base-200 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-3xl font-bold">Trending Now</h2>
            <Link href="/courses" className="text-primary text-sm font-medium">
              Browse All →
            </Link>
          </div>
          <p className="text-base-content/60 mb-10">
            The most popular courses this week.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trending.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Learning Tips */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="grid grid-cols-2 gap-4 flex-1">
            {tips.map((tip, i) => (
              <div key={i} className="card bg-base-100 shadow p-5">
                <span className="text-2xl mb-2">{tip.icon}</span>
                <h4 className="font-bold mb-1">{tip.title}</h4>
                <p className="text-sm text-base-content/60">{tip.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">Effective Learning Tips</h2>
            <p className="text-base-content/60 mb-6">
              We don't just provide content; we provide a methodology. Our
              platform is built on neuroscientific principles to ensure your
              time spent learning is as efficient as possible.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-2 items-start">
                <span className="text-primary mt-1">✔</span>
                Personalized learning paths based on your goals
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-primary mt-1">✔</span>
                Interactive coding environments and sandboxes
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-primary mt-1">✔</span>
                Downloadable resources for offline study
              </li>
            </ul>
            <button className="text-primary font-medium">
              Learn more about our methodology →
            </button>
          </div>
        </div>
      </section>

      {/* Top Instructors */}
      <section className="bg-base-200 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2">Learn From The Best</h2>
          <p className="text-base-content/60 mb-12">
            Our instructors are active professionals from top-tier companies
            like Google, Meta, and Stripe.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {instructors.map((ins, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <div className="avatar">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={ins.image} alt={ins.name} />
                  </div>
                </div>
                <h4 className="font-bold">{ins.name}</h4>
                <p className="text-xs text-primary">{ins.role}</p>
                <p className="text-xs text-base-content/60 text-center">
                  {ins.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral text-neutral-content py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to transform your career?
          </h2>
          <p className="text-neutral-content/70 mb-8">
            Join SkillSphere today and get access to over 500+ premium courses
            with a single subscription.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered flex-1 bg-neutral-content/10 text-neutral-content placeholder:text-neutral-content/40 border-neutral-content/20"
            />
            <Link href="/register" className="btn btn-primary">
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
