import Introduction from "@/components/Introduction";
import { Navbar } from "@/components/Navbar";
import AboutMe from "@/components/about-me";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Portfolio from "@/components/portfolio";
import Services from "@/components/services";

export default function Home() {
  return (
    <main className="pb-40">
      <Navbar />
      <Introduction />
      <AboutMe />
      <Experience />
      {/* <Services /> */}
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
