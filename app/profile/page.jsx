"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import Image from "next/image";

const badges = [
  {
    icon: "🏆",
    title: "Top Performer",
    desc: "Completed 5 courses in a month",
  },
  { icon: "🔥", title: "10 Day Streak", desc: "Incomplete" },
  { icon: "⭐", title: "React Specialist", desc: "Certified Advanced Dev" },
];

const progress = [
  { title: "UI/UX Design Fundamentals", percent: 75 },
  { title: "Advanced React Patterns", percent: 32 },
];

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
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg" />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-base-100 py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Panel */}
        <div className="flex flex-col gap-6">
          <div className="card bg-base-100 shadow p-6 flex flex-col items-center text-center">
            <div className="relative mb-4">
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-2">
                  {(user?.image || user?.picture) ? (
                    <Image
                      src={user?.image || user?.picture}
                      alt={user?.name || "User"}
                      width={96}
                      height={96}
                      unoptimized
                      className="w-24 h-24 rounded-full object-cover"
                    />
                  ) : (
                    <div className="bg-primary text-primary-content w-24 h-24 rounded-full flex items-center justify-center text-3xl font-bold">
                      {user?.name?.charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>
              </div>
              <Link
                href="/profile/update"
                className="absolute bottom-0 right-0 btn btn-primary btn-circle btn-xs"
              >
                ✏
              </Link>
            </div>
            <h2 className="text-xl font-bold">{user?.name}</h2>
            <p className="text-base-content/60 text-sm">{user?.email}</p>

            <div className="flex gap-6 mt-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">12</p>
                <p className="text-xs text-base-content/60">COURSES</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">48</p>
                <p className="text-xs text-base-content/60">HOURS</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">5</p>
                <p className="text-xs text-base-content/60">BADGES</p>
              </div>
            </div>
          </div>

          {/* Progress */}
          <div className="card bg-base-100 shadow p-6">
            <h3 className="font-bold mb-4">Current Progress</h3>
            <div className="space-y-4">
              {progress.map((p, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{p.title}</span>
                    <span className="text-primary font-semibold">
                      {p.percent}%
                    </span>
                  </div>
                  <progress
                    className="progress progress-primary w-full"
                    value={p.percent}
                    max="100"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="card bg-base-100 shadow p-6">
            <div className="flex items-center justify-between mb-1">
              <div>
                <h3 className="font-bold text-lg">Profile Settings</h3>
                <p className="text-base-content/60 text-sm">
                  Manage your public information and account security.
                </p>
              </div>
              <Link href="/profile/update" className="btn btn-primary btn-sm">
                Update Profile
              </Link>
            </div>

            <div className="divider" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Full Name</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  value={user?.name || ""}
                  readOnly
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Email Address</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  value={user?.email || ""}
                  readOnly
                />
              </div>
            </div>

            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text font-medium">Professional Bio</span>
              </label>
              <textarea
                className="textarea textarea-bordered w-full h-28"
                placeholder="Tell us about yourself..."
                readOnly
                defaultValue="Passionate learner and developer eager to master the latest technologies."
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Current Role</span>
                </label>
                <select className="select select-bordered w-full" disabled>
                  <option>Student</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Location</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Your city, country"
                  readOnly
                />
              </div>
            </div>
          </div>

          {/* Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {badges.map((b, i) => (
              <div
                key={i}
                className="card bg-base-100 shadow p-6 flex flex-col items-center text-center gap-2"
              >
                <span className="text-4xl">{b.icon}</span>
                <h4 className="font-bold">{b.title}</h4>
                <p className="text-xs text-base-content/60">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
