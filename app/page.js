import Image from "next/image";
import HeroSection from "./components/heroSection";
import Navbar from "./components/navbar";
import AboutSection from "./components/aboutSection";
import ProjectSection from "./components/projectSection";
import EmailSection from "./components/emailsecttion";
import Footer from "./components/footer";
export default function Home() {
  return (
    <main className="flex   py-4  bg-black">
      <Navbar />
      <div className=" container mt-16 mx-auto">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
        <Footer />
      </div>
    </main>
  );
}
