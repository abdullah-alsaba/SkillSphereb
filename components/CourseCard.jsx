import Image from "next/image";
import Link from "next/link";

export default function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover"
        />
        <span className="absolute top-3 left-3 bg-slate-800/80 text-white text-xs font-medium px-2.5 py-1 rounded-md">
          {course.category}
        </span>
      </div>

      <div className="p-4 space-y-2">
        <h3 className="text-sm font-semibold text-slate-900 line-clamp-2 leading-snug">
          {course.title}
        </h3>
        <p className="text-xs text-slate-500">By {course.instructor}</p>

        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`h-3.5 w-3.5 ${i < Math.floor(course.rating) ? "text-orange-400" : "text-slate-200"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-xs text-slate-500 ml-1">
            {course.rating} ({course.students.toLocaleString()})
          </span>
        </div>

        <div className="flex items-center justify-between pt-1">
          <span className="text-base font-bold text-slate-900">
            ${course.price}
          </span>
          <span className="text-xs text-slate-400">{course.duration}</span>
        </div>

        <Link
          href={`/courses/${course.id}`}
          className="block w-full text-center text-sm font-semibold text-orange-500 border border-orange-500 rounded-lg py-2 mt-1 hover:bg-orange-500 hover:text-white transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
