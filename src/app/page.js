import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/pages/Hero";
import About from "@/pages/About";
import Services from "@/pages/Services";
import WhyUs from "@/pages/WhyUs";
import Testimonials from "@/pages/Testimonials";
import Contact from "@/pages/Contact";

export default function Home() {
  return (
    <main
      id="webpage"
      className="bg-gray-50 h-dvh max-w-[1600px] mx-auto overflow-x-hidden"
    >
      <div className="">
        <Header />
        <Hero />
        <About />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ebe0d7"
            fillOpacity="1"
            d="M0,160L48,165.3C96,171,192,181,288,186.7C384,192,480,192,576,165.3C672,139,768,85,864,69.3C960,53,1056,75,1152,96C1248,117,1344,139,1392,149.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <Services />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 310">
          <path
            fill="#ebe0d7"
            fillOpacity="1"
            d="M0,96L48,96C96,96,192,96,288,117.3C384,139,480,181,576,192C672,203,768,181,864,144C960,107,1056,53,1152,26.7C1248,0,1344,0,1392,0L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <WhyUs />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ebe0d7"
            fillOpacity="1"
            d="M0,160L48,144C96,128,192,96,288,122.7C384,149,480,235,576,250.7C672,267,768,213,864,186.7C960,160,1056,160,1152,154.7C1248,149,1344,139,1392,133.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
