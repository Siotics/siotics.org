import Hero from "@/components/layout/Hero"
import Navbar from "@/components/layout/Navbar"
import Activities from "@/components/layout/Activities"
import About from "@/components/layout/About"
import Footer from "@/components/layout/Footer"
import FAQs from "@/components/layout/FAQs"
import Team from "@/components/layout/Team"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Activities/>
      <About />
      <FAQs />
      <Team />
      <Footer />
    </>
  );
}
