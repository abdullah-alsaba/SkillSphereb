export default function Loading() {
  return (
    <div className="min-h-screen bg-base-100 py-12 px-4 max-w-7xl mx-auto">
      <div className="h-10 bg-base-200 rounded w-48 mx-auto mb-4 animate-pulse" />
      <div className="h-4 bg-base-200 rounded w-72 mx-auto mb-10 animate-pulse" />
      <div className="flex gap-4 mb-10">
        <div className="h-12 bg-base-200 rounded w-full animate-pulse" />
        <div className="h-12 bg-base-200 rounded w-48 animate-pulse" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="card bg-base-200 animate-pulse">
            <div className="h-48 bg-base-300 rounded-t-2xl" />
            <div className="p-4 space-y-3">
              <div className="h-4 bg-base-300 rounded w-3/4" />
              <div className="h-3 bg-base-300 rounded w-1/2" />
              <div className="h-3 bg-base-300 rounded w-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
