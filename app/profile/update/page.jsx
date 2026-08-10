"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import Image from "next/image";

export default function UpdateProfilePage() {
  const [form, setForm] = useState({ name: "", image: "" });
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const router = useRouter();

  useEffect(() => {
    authClient.getSession().then(({ data }) => {
      if (!data?.user) {
        router.push("/login");
      } else {
        setForm({
          name: data.user.name || "",
          image: data.user.image || "",
        });
      }
      setFetching(false);
    });
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await authClient.updateUser({
      name: form.name,
      image: form.image,
    });
    if (error) {
      toast.error(error.message || "Update failed.");
    } else {
      toast.success("Profile updated successfully!");
      router.push("/profile");
    }
    setLoading(false);
  };

  if (fetching) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg" />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-base-200 py-16 px-4">
      <div className="max-w-lg mx-auto">
        <div className="card bg-base-100 shadow-xl p-8">
          <h1 className="text-3xl font-bold mb-2">Update Profile</h1>
          <p className="text-base-content/60 mb-6">
            Change your name or profile photo
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Full Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">
                  Profile Image URL
                </span>
              </label>
              <input
                type="url"
                className="input input-bordered w-full"
                placeholder="https://example.com/photo.jpg"
                value={form.image}
                onChange={(e) => setForm({ ...form, image: e.target.value })}
              />
            </div>

            {form.image && (
              <div className="flex justify-center">
                <Image
                  src={form.image}
                  alt="Preview"
                  width={96}
                  height={96}
                  unoptimized
                  className="w-24 h-24 rounded-full object-cover border-4 border-primary"
                />
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary w-full mt-2"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner" />
              ) : (
                "Save Changes"
              )}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
