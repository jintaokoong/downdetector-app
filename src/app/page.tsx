"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [domain, setDomain] = useState("");
  const router = useRouter();

  const error = useMemo(() => {
    const domainRegex = /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/;
    if (!domainRegex.test(domain) && submitted) {
      return "Domain must be a valid domain name";
    } else {
      return null;
    }
  }, [domain, submitted]);

  return (
    <>
      <section className="max-w-lg mx-auto my-10">
        <h1 className="text-3xl font-semibold text-gray-600 max-w-max">
          Down for everyone or just me? 🚨
        </h1>
        <p className="mt-1.5 text-gray-400 max-w-max">
          Start checking right now!
        </p>
      </section>
      <div className="flex flex-col items-center justify-center gap-8 my-10">
        <form
          className="w-full max-w-lg"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
            // validate domain
            const domainRegex = /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/;
            if (!domainRegex.test(domain)) {
              return;
            }
            router.push(`/domain/${domain}`);
          }}
        >
          <input
            className="w-full border-gray-300 border-2 rounded-md px-4 py-2 focus:outline-none focus:border-red-500"
            type="text"
            value={domain}
            style={{
              border: error ? "1px solid red" : undefined,
            }}
            placeholder="Which site do you want to check?"
            onChange={(e) => setDomain(e.target.value)}
          />
          {error && (
            <small className="mt-2" style={{ color: "red", display: "block" }}>
              {error}
            </small>
          )}
        </form>
      </div>
    </>
  );
}
