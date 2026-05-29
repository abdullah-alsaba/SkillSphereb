"use client";
import { useState } from "react";
import courses from "@/data/courses.json";
import CourseCard from "@/components/CourseCard";

export default function CoursesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", ...new Set(courses.map((c) => c.category))];

  const filtered = courses.filter((c) => {
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "All" || c.category === category;
    return matchSearch && matchCategory;
  });

  return (
    <main className="min-h-screen bg-base-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2">All Courses</h1>
        <p className="text-center text-base-content/60 mb-8">
          Explore all our available courses and start learning today
        </p>

        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <input
            type="text"
            placeholder="Search courses..."
            className="input input-bordered w-full md:w-2/3"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="select select-bordered w-full md:w-1/3"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-base-content/50 text-lg mt-20">
            No courses found.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
