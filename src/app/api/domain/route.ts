import { redirect } from "next/navigation";

export async function POST(request: Request) {
  // read form data from request
  const formData = await request.formData();
  // read field from form data
  const domain = formData.get("domain");
  // validate domain
  const domainRegex = /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/;
  if (!domain) {
    return new Response("Domain is required", { status: 400 });
  } else if (!domainRegex.test(domain.toString())) {
    return new Response("Invalid domain", { status: 400 });
  } else {
    return redirect("/" + domain);
  }
}
