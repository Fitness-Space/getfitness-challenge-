import Challenge from "@/components/Challenge";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <>
      <main className="relative isolate overflow-x-clip">
        <Header />
        <Hero />
        <Challenge />
        <HowItWorks />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
