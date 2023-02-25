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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
        // validate domain
        const domainRegex = /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/;
        if (!domainRegex.test(domain)) {
          return;
        }
        router.push(`/${domain}`);
      }}
    >
      <input
        type="text"
        value={domain}
        style={{
          border: error ? "1px solid red" : undefined,
        }}
        onChange={(e) => setDomain(e.target.value)}
      />
      <button disabled={error !== null} type="submit">
        Submit
      </button>
      {error && (
        <small style={{ color: "red", display: "block" }}>{error}</small>
      )}
    </form>
  );
}
