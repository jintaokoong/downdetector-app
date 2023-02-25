import Link from "next/link";

/**
 * A function that checks the domain by making a GET request to the domain.
 * Then, it checks the response to see if the service is up. Throws an error
 * if any network error occurs. Returns true if the response is in the 200s.
 * otherwise, returns false.
 * @param domain the domain to check
 */
const getServiceStatus = async (domain: string): Promise<boolean> => {
  // check if the domain is valid
  const domainRegex = /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/;
  if (!domainRegex.test(domain)) {
    throw new Error("Domain must be a valid domain name");
  }

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
    <div className="py-12 px-8">
      <h1 className="text-green-600 font-bold text-2xl">
        Looks like {params.id} is {up ? "up" : "down"}!
      </h1>
      <Link href="/">
        <button
          className="px-4 py-2 bg-gray-100 rounded-full text-gray-600 font-semibold mt-8 hover:bg-gray-200 hover:shadow-lg transition duration-300 hover:text-gray-700"
          type="button"
        >
          Try another domain
        </button>
      </Link>
    </div>
  );
}
