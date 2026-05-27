import Image from "next/image";

export default function Home() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-orange-100 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-100 blur-3xl" />

      <div className="mx-auto grid w-full max-w-[1280px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="space-y-7">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold tracking-wide text-slate-700">
            NEW COURSES AVAILABLE
          </span>

          <h1 className="max-w-xl text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Upgrade Your Skills Today
          </h1>

          <p className="max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
            Join over 50,000 learners mastering modern technologies and business strategy with industry-leading experts.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button className="btn h-12 rounded-xl border-0 bg-orange-500 px-8 text-white hover:bg-orange-600">
              Explore Courses
            </button>
            <button className="btn h-12 rounded-xl border border-slate-200 bg-white px-8 text-slate-700 hover:bg-slate-100">
              View Roadmap
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop"
              alt="Students collaborating in modern workspace"
              className="h-[260px] w-full rounded-xl object-cover sm:h-[340px] lg:h-[420px]"
              width={1600}
              height={1067}
              priority
            />
          </div>

          <div className="absolute -bottom-6 -left-2 rounded-xl border border-slate-100 bg-white p-4 shadow-md sm:-left-6">
            <p className="text-sm font-bold text-slate-900">Certified Learning</p>
            <p className="text-xs text-slate-500">Accredited by global tech partners</p>
          </div>
        </div>
      </div>
    </section>
  );
}
