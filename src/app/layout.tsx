import { Quicksand } from "next/font/google";
import Head from "next/head";
import "./globals.css";

export const metadata = {
  title: "Service Down?",
  description:
    "Check if a website is down for everyone or just you. Begin by entering a domain name!",
};

const inter = Quicksand({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🚨</text></svg>"
        />
      </head>
      <body
        className={"mx-auto md:w-[768px] lg:w-[1024px] px-4 " + inter.className}
      >
        {children}
        <footer className="text-center font-thin">
          Made with ❤️ by{" "}
          <a
            className="underline"
            href={process.env.NEXT_PUBLIC_AUTHOR_URL}
            target="_blank"
          >
            Jintao
          </a>
        </footer>
      </body>
    </html>
  );
}
