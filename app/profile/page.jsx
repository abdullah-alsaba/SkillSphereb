"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    authClient.getSession().then(({ data }) => {
      if (!data?.user) {
        router.push("/login");
      } else {
        setUser(data.user);
      }
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg" />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-base-200 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="card bg-base-100 shadow-xl p-8">
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
            <div className="avatar placeholder">
              <div className="bg-primary text-primary-content rounded-full w-24">
                {user?.image ? (
                  <img src={user.image} alt={user.name} />
                ) : (
                  <span className="text-3xl">
                    {user?.name?.charAt(0).toUpperCase()}
                  </span>
                )}
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold">{user?.name}</h1>
              <p className="text-base-content/60">{user?.email}</p>
              <span className="badge badge-primary mt-2">Student</span>
            </div>
          </div>

          <div className="divider" />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="stat bg-base-200 rounded-xl">
              <div className="stat-title">Enrolled Courses</div>
              <div className="stat-value text-primary">0</div>
            </div>
            <div className="stat bg-base-200 rounded-xl">
              <div className="stat-title">Completed</div>
              <div className="stat-value text-success">0</div>
            </div>
            <div className="stat bg-base-200 rounded-xl">
              <div className="stat-title">Certificates</div>
              <div className="stat-value text-warning">0</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/profile/update" className="btn btn-primary flex-1">
              Update Profile
            </Link>
            <button
              onClick={async () => {
                await authClient.signOut();
                router.push("/login");
              }}
              className="btn btn-outline btn-error flex-1"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
