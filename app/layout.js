import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata = {
  title: "Anshdeep Singh — Full-Stack & AI Software Engineer",
  description:
    "SDE-1 at Posha. I build agentic AI systems, multi-agent code review, and full-stack products across Flutter, Next.js, and FastAPI.",
  metadataBase: new URL("https://anshdeep.dev"),
  openGraph: {
    title: "Anshdeep Singh — Full-Stack & AI Software Engineer",
    description:
      "SDE-1 at Posha. Agentic AI systems, multi-agent code review, full-stack products.",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="grain antialiased">{children}</body>
    </html>
  );
}
