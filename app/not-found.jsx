import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-primary">404</h1>
        <h2 className="text-3xl font-bold mt-4 mb-2">Page Not Found</h2>
        <p className="text-base-content/60 mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/" className="btn btn-primary px-8">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
