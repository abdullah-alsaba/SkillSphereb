import courses from "@/data/courses.json";
import { notFound } from "next/navigation";

export default function CourseDetailsPage({ params }) {
  const course = courses.find((c) => c.id === params.id);

  if (!course) return notFound();

  return (
    <main className="min-h-screen bg-base-100">
      <div className="bg-base-200 py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <span className="badge badge-primary mb-3">{course.category}</span>
          <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
          <p className="text-base-content/70 text-lg mb-6">
            {course.description}
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-base-content/60">
            <span>⭐ {course.rating} Rating</span>
            <span>👨‍🎓 {course.students} Students</span>
            <span>🎓 Instructor: {course.instructor}</span>
            <span>⏱ {course.duration}</span>
            <span>📶 {course.level}</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {course.learningOutcomes?.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-primary mt-1">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold mb-4">Course Curriculum</h2>
          <div className="space-y-3">
            {course.curriculum?.map((section, i) => (
              <div key={i} className="collapse collapse-arrow bg-base-200">
                <input type="checkbox" />
                <div className="collapse-title font-semibold">
                  {section.title}
                </div>
                <div className="collapse-content">
                  <ul className="space-y-1 pt-2">
                    {section.lessons.map((lesson, j) => (
                      <li
                        key={j}
                        className="text-sm text-base-content/70 flex gap-2"
                      >
                        <span>▶</span> {lesson}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-base-200 rounded-2xl p-6 h-fit sticky top-24">
          <image
            src={course.image}
            alt={course.title}
            className="rounded-xl w-full object-cover mb-5"
          />
          <p className="text-3xl font-bold text-primary mb-4">
            ${course.price}
          </p>
          <button className="btn btn-primary w-full mb-3">Enroll Now</button>
          <button className="btn btn-outline w-full">Add to Wishlist</button>
          <ul className="mt-6 space-y-2 text-sm text-base-content/70">
            <li>📅 Last updated: {course.lastUpdated}</li>
            <li>🌐 Language: {course.language}</li>
            <li>📜 Certificate included</li>
            <li>♾ Full lifetime access</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
