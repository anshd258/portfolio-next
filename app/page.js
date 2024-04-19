import Image from "next/image";
import HeroSection from "./components/heroSection";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main className="flex  px-5 py-4">
      <Navbar/>
   <div className=" container mt-16 mx-auto">
   <HeroSection/>
   </div>
    </main>
  );
}
