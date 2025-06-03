import { useEffect, useState } from "react";
import axios from "axios";

export function IntroNav({
  page = "HOME",
  className = "",
  id = "",
}: {
  page: "HOME" | "ABOUT" | "PROJECT";
  className?: string;
  id?: string;
}) {
  const { profile, loading } = useProfile();

  return (
    <div
      className={`absolute right-0 z-50 duration-200 ease-out hover:-translate-y-6 ${className}  max-[500px]:scale-[0.7] sm:scale-[0.7] md:translate-x-[-10rem] md:translate-y-0 md:scale-[0.65] lg:translate-x-[-8rem] lg:scale-[0.65] xl:scale-75 2xl:scale-90`}
      id={id}
    >
      <span className="inline-block w-72 py-2.5 text-9xl font-semibold">
        {page}
      </span>
      <div className="mt-7 flex items-start xl:scale-105">
        <i className="bx bx-minus text-5xl leading-6" />
        <div className="ml-4 flex flex-col">
          {loading ? (
            <>
              <span className="mb-3 text-2xl font-semibold">Loading...</span>
              <span className="text-base leading-7 text-gray-500">...</span>
            </>
          ) : (
            <>
              <span className="mb-3 text-2xl font-semibold">
                {profile?.name}
              </span>
              <span className="text-base leading-7 text-gray-500">
                {profile?.major}
              </span>
              <span className="text-base leading-7 text-gray-500">
                {profile?.role}
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export function useProfile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/profile")
      .then((res) => setProfile(res.data))
      .finally(() => setLoading(false));
  }, []);

  return { profile, loading };
}
