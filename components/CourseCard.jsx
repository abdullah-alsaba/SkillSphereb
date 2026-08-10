import Image from "next/image";
import Link from "next/link";

export default function CourseCard({ course }) {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden">
      <Image
        src={course.image}
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col gap-2">
        <span className="badge badge-primary badge-sm">{course.category}</span>
        <h3 className="font-bold text-lg leading-snug">{course.title}</h3>
        <p className="text-base-content/60 text-sm line-clamp-2">
          {course.description}
        </p>
        <div className="flex items-center justify-between text-sm text-base-content/60 mt-1">
          <span>⭐ {course.rating}</span>
          <span>{course.students.toLocaleString()} students</span>
        </div>
        <div className="flex items-center justify-between text-sm text-base-content/60">
          <span>⏱ {course.duration}</span>
          <span className="badge badge-outline badge-sm">{course.level}</span>
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-primary font-bold text-lg">
            ${course.price}
          </span>
          <Link
            href={`/courses/${course.id}`}
            className="btn btn-primary btn-sm"
          >
            View Course
          </Link>
        </div>
      </div>
    </div>
  );
}
