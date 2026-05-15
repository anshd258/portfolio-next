import { Analytics } from "@vercel/analytics/react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Manifesto from "./components/Manifesto";
import Work from "./components/Work";
import Shipped from "./components/Shipped";
import Stack from "./components/Stack";
import Signal from "./components/Signal";
import Transmit from "./components/Transmit";
import Footer from "./components/Footer";
import ScrollProgressRail from "./components/ScrollProgressRail";
import SmoothScroll from "./components/SmoothScroll";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <ScrollProgressRail />
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <Work />
        <Shipped />
        <Stack />
        <Signal />
        <Transmit />
      </main>
      <Footer />
      <Analytics />
    </>
  );
}
