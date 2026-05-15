import { Analytics } from "@vercel/analytics/react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import Recognition from "./components/Recognition";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import Section, { SectionBreak } from "./components/Section";
import { Reveal } from "./components/Reveal";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Nav />
      <main className="mx-auto max-w-[1280px] px-6 md:px-10">
        <Hero />

        <Section variant="normal"><Work /></Section>

        <Reveal><SectionBreak from="Work" to="Projects" /></Reveal>

        <Section variant="showcase"><Projects /></Section>

        <Reveal><SectionBreak from="Projects" to="Stack" /></Reveal>

        <Section variant="reference"><Stack /></Section>

        <Reveal><SectionBreak from="Stack" to="Recognition" /></Reveal>

        <Section variant="reference"><Recognition /></Section>

        <Reveal><SectionBreak from="Recognition" to="Contact" /></Reveal>

        <Section variant="showcase"><Contact /></Section>

        <Footer />
      </main>
      <Analytics />
    </>
  );
}
