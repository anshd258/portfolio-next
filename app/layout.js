import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata = {
  title: "Anshdeep Singh · Full-Stack & AI Engineer",
  description:
    "SDE-1 at Posha. I ship agentic systems in production: multi-agent code review, MCP tooling, and the full-stack surface that wraps them.",
  metadataBase: new URL("https://anshdeep.dev"),
  openGraph: {
    title: "Anshdeep Singh · Full-Stack & AI Engineer",
    description:
      "SDE-1 at Posha. Agentic systems in production: multi-agent code review, MCP tooling, full-stack delivery.",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
