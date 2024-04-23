import Image from "next/image";
import HeroSection from "./components/heroSection";
import Navbar from "./components/navbar";
import AboutSection from "./components/aboutSection";

export default function Home() {
  return (
    <main className="flex  px-5 py-4  bg-black">
      <Navbar/>
   <div className=" container mt-16 mx-auto">
   <HeroSection/>
   <AboutSection/>
   </div>
    </main>
  );
}
