import courses from "@/data/courses.json";
import { notFound } from "next/navigation";
import Link from "next/link";

export default function CourseDetailsPage({ params }) {
  const course = courses.find((c) => c.id === params.id);
  if (!course) return notFound();

  return (
    <main className="min-h-screen bg-base-100">
      {/* Hero */}
      <section className="bg-base-200 py-14 px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex-1">
            <div className="flex gap-2 mb-4">
              <span className="badge badge-primary">{course.category}</span>
              <span className="badge badge-warning">Bestseller</span>
            </div>
            <h1 className="text-4xl font-black leading-tight mb-4">
              {course.title}
            </h1>
            <p className="text-base-content/60 text-lg mb-6">
              {course.description}
            </p>

            <div className="flex items-center gap-4 mb-8">
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
                    alt={course.instructor}
                  />
                </div>
              </div>
              <div>
                <p className="font-bold">{course.instructor}</p>
                <p className="text-sm text-base-content/60">
                  Lead Designer @ TechFlow
                </p>
              </div>
              <div className="flex items-center gap-1 ml-4">
                <span className="text-warning">⭐</span>
                <span className="font-bold">{course.rating}</span>
                <span className="text-base-content/60 text-sm">
                  (1,240 reviews)
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="btn btn-primary btn-lg">Enroll Now</button>
              <div>
                <p className="line-through text-base-content/40 text-sm">
                  $199.99
                </p>
                <p className="text-2xl font-black text-primary">
                  ${course.price}
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 max-w-md w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <button className="btn btn-circle btn-lg bg-white text-black border-none hover:bg-white/90">
                  ▶
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
          <div className="flex-1">
            {/* What you'll learn */}
            <h2 className="text-2xl font-bold mb-6">What you'll learn</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-base-200 rounded-2xl p-6 mb-10">
              {course.learningOutcomes?.map((item, i) => (
                <div key={i} className="flex gap-2 items-start">
                  <span className="text-primary mt-1">✔</span>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Curriculum */}
            <h2 className="text-2xl font-bold mb-6">Curriculum</h2>
            <div className="space-y-4">
              {course.curriculum?.map((section, i) => (
                <div
                  key={i}
                  className="border border-base-300 rounded-xl overflow-hidden"
                >
                  <div className="flex items-center justify-between bg-base-100 px-5 py-4">
                    <div className="flex items-center gap-3">
                      <span className="text-primary font-bold text-sm">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h4 className="font-bold">{section.title}</h4>
                    </div>
                    <span className="text-sm text-base-content/60">
                      {section.lessons.length} Lessons
                    </span>
                  </div>
                  <div className="divide-y divide-base-200">
                    {section.lessons.map((lesson, j) => (
                      <div
                        key={j}
                        className="flex items-center justify-between px-5 py-3 bg-base-50"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-base-content/40">▶</span>
                          <span className="text-sm">{lesson}</span>
                        </div>
                        <span className="text-xs text-base-content/40">
                          {Math.floor(Math.random() * 20 + 5)}:00
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-72 flex flex-col gap-4">
            <div className="card bg-base-100 shadow p-6 sticky top-24">
              <h3 className="font-bold text-lg mb-4">Course Features</h3>
              <ul className="space-y-3 text-sm mb-6">
                <li className="flex gap-2 items-center">
                  <span>📹</span> 12.5 hours of HD video
                </li>
                <li className="flex gap-2 items-center">
                  <span>📄</span> 24 downloadable resources
                </li>
                <li className="flex gap-2 items-center">
                  <span>📱</span> Access on mobile and TV
                </li>
                <li className="flex gap-2 items-center">
                  <span>🎓</span> Certificate of completion
                </li>
                <li className="flex gap-2 items-center">
                  <span>♾</span> Full lifetime access
                </li>
              </ul>
              <button className="btn btn-outline btn-primary w-full mb-3">
                Share Course
              </button>
              <p className="text-center text-xs text-base-content/50">
                30-Day Money-Back Guarantee
              </p>
            </div>

            <div className="card bg-primary/10 shadow p-6 flex items-center gap-4">
              <span className="text-3xl">👥</span>
              <div>
                <p className="font-bold">
                  {course.students.toLocaleString()}+ Students
                </p>
                <p className="text-xs text-base-content/60">
                  Enrolled this month
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
 