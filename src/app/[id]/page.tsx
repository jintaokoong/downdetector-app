import Link from "next/link";
import { cache } from "react";

/**
 * A function that checks the domain by making a GET request to the domain.
 * Then, it checks the response to see if the service is up. Throws an error
 * if any network error occurs. Returns true if the response is in the 200s.
 * otherwise, returns false.
 * @param domain the domain to check
 */
const getServiceStatus = async (domain: string): Promise<boolean> => {
  try {
    const response = await fetch(`http://${domain}`, {
      redirect: "follow",
      next: { revalidate: 120 },
    });
    return response.status >= 200 && response.status < 300;
  } catch (e) {
    // network error
    throw new Error("Our service could be blocked, please try again later");
  }
};

export default async function Page({ params }: { params: { id: string } }) {
  const up = await getServiceStatus(params.id);
  return (
    <div>
      <h1>
        {params.id} is {up ? "up" : "down"}
      </h1>
      <Link href="/">
        <button>Try another domain</button>
      </Link>
    </div>
  );
}
